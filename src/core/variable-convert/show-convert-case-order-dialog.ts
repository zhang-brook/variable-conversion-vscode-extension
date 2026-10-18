import * as vscode from 'vscode';
import { cyclicConvertCaseOrder, quickPickSupportCases, commands } from './types/SupportVariableCaseType';
import { getUserConfigurations } from '../../utils/user-configuration';
import { getVariableCaseDisplayName } from '../../i18n/display-names';

interface ConfigDialogActionItem extends vscode.MessageItem {
    action: 'openAllSettings' | 'openEnabledFormats' | 'openFormatOrder';
}

/**
 * 显示当前配置的格式顺序信息
 */
export function showConvertCaseDetailDialog() {
    // 获取用户配置的格式顺序
    const formatOrder = getUserConfigurations<string[]>('formatOrder') || [];
    // 获取启用的格式
    const enabledFormats = getUserConfigurations<Record<string, boolean>>('enabledFormats') || {};

    // 获取所有有效的settingsKey
    const validSettingsKeys = new Set(quickPickSupportCases.map(item => item.settingsKey));

    // 检测重复项和无效项
    const seenSettingsKeys = new Set<string>();
    const duplicateSettingsKeys = new Set<string>();
    const invalidSettingsKeys = new Set<string>();

    formatOrder.forEach(format => {
        if (!validSettingsKeys.has(format)) {
            invalidSettingsKeys.add(format);
        } else if (seenSettingsKeys.has(format)) {
            duplicateSettingsKeys.add(format);
        } else {
            seenSettingsKeys.add(format);
        }
    });

    // 创建settingsKey到enableSettingsKey的映射
    const settingsKeyToEnableKeyMap: Record<string, string> = {};
    commands.forEach(item => {
        settingsKeyToEnableKeyMap[item.settingsKey] = item.enableSettingsKey;
    });

    // 构建显示内容
    const message = [
        vscode.l10n.t('Current variable naming convention order:'),
        '',
    ];

    // 先显示用户配置的顺序
    if (formatOrder.length > 0) {
        message.push(vscode.l10n.t('Custom order:'));
        formatOrder.forEach((format, index) => {
            const enableKey = settingsKeyToEnableKeyMap[format];
            const isEnabled = enableKey ? enabledFormats[enableKey] !== false : true;
            const status = isEnabled ? '✔️' : '❌'; // ✅✔️☑️

            // 添加重复和无效标记
            let marker = '';
            if (!validSettingsKeys.has(format)) {
                marker = ` ❌ ${vscode.l10n.t('(Invalid format)')}`;
            } else if (duplicateSettingsKeys.has(format)) {
                marker = ` ⚠️ ${vscode.l10n.t('(Duplicate entry)')}`;
            }

            message.push(`${index + 1}. ${getVariableCaseDisplayName(format).name} (${format}) ${marker || status}`);
        });
    } else {
        message.push(vscode.l10n.t('No custom order configured. Using the default order.'), '');
    }

    // 显示未配置但已启用的格式
    const unconfiguredEnabledFormats = cyclicConvertCaseOrder
        .filter(item => {
            const enableKey = settingsKeyToEnableKeyMap[item.settingsKey];
            const isEnabled = enableKey ? enabledFormats[enableKey] !== false : true;
            return isEnabled && !formatOrder.includes(item.settingsKey);
        })
        .map(item => item.settingsKey);

    if (unconfiguredEnabledFormats.length > 0) {
        message.push('', vscode.l10n.t('Enabled formats not in the custom order (default order):'));
        unconfiguredEnabledFormats.forEach((format, index) => {
            message.push(`${formatOrder.length + index + 1}. ${getVariableCaseDisplayName(format).name} (${format}) ✔️`);
        });
    }

    // 显示未启用的格式
    const disabledFormats = cyclicConvertCaseOrder
        .filter(item => {
            const enableKey = settingsKeyToEnableKeyMap[item.settingsKey];
            return enableKey ? enabledFormats[enableKey] === false : false;
        })
        .map(item => item.settingsKey);

    if (disabledFormats.length > 0) {
        message.push('', vscode.l10n.t('Disabled formats:'));
        disabledFormats.forEach(format => {
            message.push(`- ${getVariableCaseDisplayName(format).name} (${format}) ❌`);
        });
    }

    // 警告信息
    if (duplicateSettingsKeys.size > 0 || invalidSettingsKeys.size > 0) {
        message.push('');
        if (duplicateSettingsKeys.size > 0) {
            message.push(vscode.l10n.t('⚠️ Warning: duplicate formats: {0}', Array.from(duplicateSettingsKeys).join(', ')));
        }

        if (invalidSettingsKeys.size > 0) {
            message.push(vscode.l10n.t('❌ Error: invalid formats: {0}', Array.from(invalidSettingsKeys).join(', ')));
        }
    }

    message.push(
        '',
        vscode.l10n.t('Notes:'),
        vscode.l10n.t('- Disabled formats are not shown in conversion options even if they appear in the order.'),
        vscode.l10n.t('- Duplicate or invalid entries may cause display issues.'),
    );

    const actionItems: ConfigDialogActionItem[] = [
        { title: vscode.l10n.t('All Extension Settings'), action: 'openAllSettings' },
        { title: vscode.l10n.t('Configure Enabled Formats'), action: 'openEnabledFormats' },
        { title: vscode.l10n.t('Configure Format Order'), action: 'openFormatOrder' },
    ];

    // 显示信息弹窗
    vscode.window.showInformationMessage<ConfigDialogActionItem>(
        vscode.l10n.t('Variable Conversion Configuration'),
        { modal: true, detail: message.join('\n') },
        ...actionItems,
    ).then(selection => {
        if (!selection) {
            return;
        }
        // 跳转到设置项
        switch (selection.action) {
            case 'openAllSettings':
                vscode.commands.executeCommand('workbench.action.openSettings', 'variable-conversion');
                break;
            case 'openEnabledFormats':
                vscode.commands.executeCommand('workbench.action.openSettings', 'variable-conversion.enabledFormats');
                break;
            case 'openFormatOrder':
                vscode.commands.executeCommand('workbench.action.openSettings', 'variable-conversion.formatOrder');
                break;
        }
    });
}
