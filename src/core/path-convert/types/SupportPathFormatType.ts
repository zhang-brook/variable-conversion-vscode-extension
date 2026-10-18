/**
 * 路径转换类型
 *
 * @since 2024-12-14
 */
export enum SupportPathFormat {

    /**
     * Windows 风格
     *
     * @alias: windows / Windows
     * @since 2024-12-07
     */
    Windows,

    /**
     * Unix 风格
     *
     * @alias: unix / Unix
     * @since 2024-12-07
     */
    Unix,
};

const keyword = {
    windows: [
        'Windows', 'win',
    ],
    unix: [
        'Unix',
        'Linux',
        'macOS',
    ],
};

interface Command {
    command: string;
    targetCase: SupportPathFormat;
    settingsKey: string;
    // variable-conversion.enabledPathFormats 中的配置项
    enableSettingsKey: string;
}

/**
 * 接管的路径转换命令
 *
 * @since 2024-12-14
 */
export const commands: Array<Command> = [
    {
        command: 'variable-conversion.pathFormat.toWindowsStyle',
        targetCase: SupportPathFormat.Windows,
        settingsKey: 'windows_style',
        enableSettingsKey: 'windowsStyle.enabled',
    },
    {
        command: 'variable-conversion.pathFormat.toUnixStyle',
        targetCase: SupportPathFormat.Unix,
        settingsKey: 'unix_style',
        enableSettingsKey: 'unixStyle.enabled',
    },
];

// settingsKey 到 enableSettingsKey 的映射
export const settingsKeyToEnableSettingsKey = new Map<string, string>();
commands.forEach(command => {
    settingsKeyToEnableSettingsKey.set(command.settingsKey, command.enableSettingsKey);
});

/**
 * @since 2024-12-14
 */
export interface QuickPickSupportCaseItem {
    type: SupportPathFormat,
    keyword: string[],
    settingsKey: string,
}

/**
 * 所有支持的路径风格
 * @since 2024-12-14
 */
export const quickPickSupportCases: Array<QuickPickSupportCaseItem> = [
    {
        type: SupportPathFormat.Windows,
        keyword: keyword.windows,
        settingsKey: 'windows_style',
    },
    {
        type: SupportPathFormat.Unix,
        keyword: keyword.unix,
        settingsKey: 'unix_style',
    },
];

/**
 * @since 2024-12-14
 */
export interface CyclicConvertPathOrderItem {
    type: SupportPathFormat,
    settingsKey: string,
}

/**
 * 通过快捷键循环转换的顺序
 * @since 2024-12-14
 */
export const cyclicConvertPathOrder: Array<CyclicConvertPathOrderItem> = [
    { type: SupportPathFormat.Windows, settingsKey: 'windows_style' },
    { type: SupportPathFormat.Unix, settingsKey: 'unix_style' },
];
