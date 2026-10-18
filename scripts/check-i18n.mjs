import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const errors = [];

function readJson(file) {
    return JSON.parse(readFileSync(file, 'utf8'));
}

function collectManifestKeys(value, keys) {
    if (typeof value === 'string') {
        const match = /^%([A-Za-z0-9_.-]+)%$/.exec(value);
        if (match) {
            keys.add(match[1]);
        }
        return;
    }
    if (Array.isArray(value)) {
        value.forEach(item => collectManifestKeys(item, keys));
        return;
    }
    if (value && typeof value === 'object') {
        Object.values(value).forEach(item => collectManifestKeys(item, keys));
    }
}

function compareKeySets(label, actualKeys, expectedKeys) {
    for (const key of expectedKeys) {
        if (!actualKeys.has(key)) {
            errors.push(`${label}: missing key "${key}"`);
        }
    }
    for (const key of actualKeys) {
        if (!expectedKeys.has(key)) {
            errors.push(`${label}: unused key "${key}"`);
        }
    }
}

function validateValues(label, data) {
    for (const [key, value] of Object.entries(data)) {
        if (typeof value !== 'string' || value.length === 0) {
            errors.push(`${label}: "${key}" must be a non-empty string`);
        }
    }
}

function placeholders(value) {
    return [...value.matchAll(/\{(\w+)\}/g)].map(match => match[1]).sort().join(',');
}

// package.nls.*: keys referenced from package.json must be translated consistently in every locale file
const pkg = readJson(join(root, 'package.json'));
const manifestKeys = new Set();
collectManifestKeys(pkg, manifestKeys);

const defaultNlsFile = 'package.nls.json';
const defaultNls = readJson(join(root, defaultNlsFile));
compareKeySets(defaultNlsFile, new Set(Object.keys(defaultNls)), manifestKeys);
validateValues(defaultNlsFile, defaultNls);

const localeNlsFiles = readdirSync(root).filter(file => /^package\.nls\..+\.json$/.test(file));
for (const file of localeNlsFiles) {
    const data = readJson(join(root, file));
    compareKeySets(file, new Set(Object.keys(data)), manifestKeys);
    validateValues(file, data);
}

// l10n bundles: source strings extracted from vscode.l10n.t() must exist in every bundle
function walk(dir, filter, files = []) {
    for (const entry of readdirSync(dir)) {
        const path = join(dir, entry);
        if (statSync(path).isDirectory()) {
            walk(path, filter, files);
        } else if (filter(path)) {
            files.push(path);
        }
    }
    return files;
}

function decodeLiteral(raw) {
    return raw
        .replace(/\\(['"\\])/g, '$1')
        .replace(/\\n/g, '\n')
        .replace(/\\r/g, '\r')
        .replace(/\\t/g, '\t');
}

const runtimeKeys = new Set();
const literalPattern = /(?:vscode\.)?l10n\.t\(\s*(['"])((?:\\.|(?!\1).)*?)\1/g;
for (const file of walk(join(root, 'src'), path => path.endsWith('.ts'))) {
    const source = readFileSync(file, 'utf8');
    for (const match of source.matchAll(literalPattern)) {
        runtimeKeys.add(decodeLiteral(match[2]));
    }
}

if (runtimeKeys.size === 0) {
    errors.push('src: no vscode.l10n.t() calls found');
}

const l10nDir = join(root, 'l10n');
const bundleFiles = readdirSync(l10nDir).filter(file => /^bundle\.l10n(\..+)?\.json$/.test(file));
const defaultBundleFile = 'bundle.l10n.json';
const defaultBundle = readJson(join(l10nDir, defaultBundleFile));
compareKeySets(defaultBundleFile, new Set(Object.keys(defaultBundle)), runtimeKeys);
validateValues(defaultBundleFile, defaultBundle);
for (const [key, value] of Object.entries(defaultBundle)) {
    if (key !== value) {
        errors.push(`${defaultBundleFile}: "${key}" must map to itself, found "${value}"`);
    }
}

for (const file of bundleFiles.filter(file => file !== defaultBundleFile)) {
    const data = readJson(join(l10nDir, file));
    compareKeySets(file, new Set(Object.keys(data)), runtimeKeys);
    validateValues(file, data);
    for (const key of runtimeKeys) {
        if (key in data && placeholders(key) !== placeholders(data[key])) {
            errors.push(`${file}: placeholders of "${key}" do not match the source string`);
        }
    }
}

if (errors.length > 0) {
    console.error(`i18n check failed with ${errors.length} error(s):`);
    errors.forEach(error => console.error(`  - ${error}`));
    process.exit(1);
}

console.log(`i18n check passed: ${manifestKeys.size} manifest keys, ${runtimeKeys.size} runtime keys, ${bundleFiles.length} runtime bundle(s)`);
