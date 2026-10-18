import * as vscode from 'vscode';

export interface DisplayName {
    name: string;
    shortName: string;
}

/**
 * 获取变量命名方式的本地化显示名称
 *
 * 使用 settingsKey 作为稳定标识，便于用户配置与本地化文案解耦
 */
export function getVariableCaseDisplayName(settingsKey: string): DisplayName {
    switch (settingsKey) {
        case 'camel_case':
            return { name: vscode.l10n.t('Camel case'), shortName: vscode.l10n.t('Camel') };
        case 'pascal_case':
            return { name: vscode.l10n.t('Pascal case'), shortName: vscode.l10n.t('Pascal') };
        case 'snake_case':
            return { name: vscode.l10n.t('Snake case'), shortName: vscode.l10n.t('Snake') };
        case 'snake_camel_case':
            return { name: vscode.l10n.t('Snake camel case'), shortName: vscode.l10n.t('Snake camel') };
        case 'snake_pascal_case':
            return { name: vscode.l10n.t('Snake pascal case'), shortName: vscode.l10n.t('Snake pascal') };
        case 'snake_upper_case':
            return { name: vscode.l10n.t('Snake upper case'), shortName: vscode.l10n.t('Snake upper') };
        case 'kebab_case':
            return { name: vscode.l10n.t('Kebab case'), shortName: vscode.l10n.t('Kebab') };
        case 'kebab_camel_case':
            return { name: vscode.l10n.t('Kebab camel case'), shortName: vscode.l10n.t('Kebab camel') };
        case 'kebab_pascal_case':
            return { name: vscode.l10n.t('Kebab pascal case'), shortName: vscode.l10n.t('Kebab pascal') };
        case 'kebab_upper_case':
            return { name: vscode.l10n.t('Kebab upper case'), shortName: vscode.l10n.t('Kebab upper') };
        case 'space_case':
            return { name: vscode.l10n.t('Space case'), shortName: vscode.l10n.t('Space') };
        case 'space_camel_case':
            return { name: vscode.l10n.t('Space camel case'), shortName: vscode.l10n.t('Space camel') };
        case 'space_pascal_case':
            return { name: vscode.l10n.t('Space pascal case'), shortName: vscode.l10n.t('Space pascal') };
        case 'space_upper_case':
            return { name: vscode.l10n.t('Space upper case'), shortName: vscode.l10n.t('Space upper') };
        case 'dot_case':
            return { name: vscode.l10n.t('Dot case'), shortName: vscode.l10n.t('Dot') };
        case 'dot_camel_case':
            return { name: vscode.l10n.t('Dot camel case'), shortName: vscode.l10n.t('Dot camel') };
        case 'dot_pascal_case':
            return { name: vscode.l10n.t('Dot pascal case'), shortName: vscode.l10n.t('Dot pascal') };
        case 'dot_upper_case':
            return { name: vscode.l10n.t('Dot upper case'), shortName: vscode.l10n.t('Dot upper') };
        case 'lower_case':
            return { name: vscode.l10n.t('Lower case'), shortName: vscode.l10n.t('Lower') };
        case 'upper_case':
            return { name: vscode.l10n.t('Upper case'), shortName: vscode.l10n.t('Upper') };
        default:
            return { name: settingsKey, shortName: settingsKey };
    }
}

/**
 * 获取路径格式的本地化显示名称
 */
export function getPathFormatDisplayName(settingsKey: string): DisplayName {
    switch (settingsKey) {
        case 'windows_style':
            return { name: vscode.l10n.t('Microsoft Windows style'), shortName: vscode.l10n.t('Windows style') };
        case 'unix_style':
            return { name: vscode.l10n.t('Unix / Unix-like style (Linux, macOS, ...)'), shortName: vscode.l10n.t('Unix style') };
        default:
            return { name: settingsKey, shortName: settingsKey };
    }
}
