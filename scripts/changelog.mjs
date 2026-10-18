import { readFileSync, writeFileSync } from 'node:fs';

const HEADING = /^## +(\[[^\]]+\]|[^\s]+)\s*$/;
// The commented template at the top of CHANGELOG.md also carries a '## [Unreleased]' heading.
const UNRELEASED = /^unreleased$/i;

function parseArgs(argv) {
    const options = { version: undefined, file: 'CHANGELOG.md', out: undefined };
    for (let index = 0; index < argv.length; index += 1) {
        const arg = argv[index];
        if (arg === '--file' || arg === '-f') {
            options.file = argv[++index];
        } else if (arg === '--out' || arg === '-o') {
            options.out = argv[++index];
        } else if (!options.version) {
            options.version = arg;
        } else {
            throw new Error(`Unexpected argument: ${arg}`);
        }
    }
    if (!options.version) {
        throw new Error('Usage: node scripts/changelog.mjs <version> [--file CHANGELOG.md] [--out <path>]');
    }
    return options;
}

function extractSection(markdown, version) {
    const lines = markdown.split(/\r?\n/);
    const collected = [];
    let inside = false;
    for (const line of lines) {
        const heading = HEADING.exec(line);
        if (heading) {
            if (inside) {
                break;
            }
            const name = heading[1].replace(/^\[|\]$/g, '');
            inside = !UNRELEASED.test(name) && name === version;
            continue;
        }
        if (inside) {
            collected.push(line);
        }
    }
    return collected.join('\n').replace(/<!--[\s\S]*?-->/g, '').trim();
}

try {
    const options = parseArgs(process.argv.slice(2));
    const section = extractSection(readFileSync(options.file, 'utf8'), options.version);
    if (!section) {
        throw new Error(`${options.file} has no section for '${options.version}'.`);
    }
    if (options.out) {
        writeFileSync(options.out, `${section}\n`);
        console.log(`Wrote ${options.version} release notes to ${options.out}.`);
    } else {
        console.log(section);
    }
} catch (error) {
    console.error(`error: ${error.message}`);
    process.exitCode = 1;
}
