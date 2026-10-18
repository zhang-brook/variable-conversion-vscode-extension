import * as vscode from 'vscode';
import QuickPickItemEx from "../types/QuickPickItemExType";
import { QuickPickSupportCaseItem, quickPickSupportCases, settingsKeyToEnableSettingsKey } from '../../core/variable-convert/types/SupportVariableCaseType';
import { TransformTextResult } from '../../types/TransformTextResultType';
import { transformMultiSelectionText } from '../../utils/transform';
import { EOL } from '../../types/EOLType';
import { caseConversion } from '../../core/variable-convert/conversion';
import { isStringArrayEqual } from '../../utils/utils';
import { getUserConfigurations } from '../../utils/user-configuration';
import { getVariableCaseDisplayName } from '../../i18n/display-names';

const QuickPickLabelMaxLength = 60;

interface RecommendItem {
    conversionText: Array<string>
    transformTo: string[]
    keyword: string[]
}

/**
 * 弹出的提示
 *
 * @param textList
 * @param eol
 * @param enabledQuickPickSupportCases
 * @returns
 */
function generateOptionsBasedOnText(textList: string[], eol: EOL, enabledQuickPickSupportCases: Array<QuickPickSupportCaseItem>): Array<QuickPickItemEx> {
    // Cut text 切割文本
    const resultsList: Array<TransformTextResult[]> = transformMultiSelectionText(textList);

    const mergeResultList: Array<RecommendItem> = [];
    for (const quickPick of enabledQuickPickSupportCases) {
        const shortName = getVariableCaseDisplayName(quickPick.settingsKey).shortName;
        const conversionResults: Array<string> = [];
        for (let i = 0; i < textList.length; i++) {
            const text = textList[i];
            const results = resultsList[i];
            const conversionResult: string = caseConversion(quickPick.type, text, eol, results);
            conversionResults.push(conversionResult);
        }
        const recommendItem: RecommendItem | undefined = mergeResultList.find(item => isStringArrayEqual(item.conversionText, conversionResults));

        if (recommendItem === undefined) {
            let item: RecommendItem = {
                conversionText: conversionResults,
                transformTo: [shortName],
                keyword: quickPick.keyword,
            };
            mergeResultList.push(item);
            continue;
        }

        recommendItem.transformTo.push(shortName);
        recommendItem.keyword = Array.from(new Set(recommendItem.keyword.concat(quickPick.keyword))); // 关键词去重
    }

    // 根据文本生成选项的逻辑
    const quickPickList = [
        // { label: '输入对应项下方任一关键词可快速选择', kind: vscode.QuickPickItemKind.Separator },
        // { label: text.toUpperCase(), description: '转换为大写', detail: '关键词：DaXie 大写 UpperCase', value: text.toUpperCase() },
        // { label: 'Group 2', kind: vscode.QuickPickItemKind.Separator },
        // { label: text.toLowerCase(), description: '转换为小写', value: text.toLowerCase() },
        // { label: text.toLowerCase(), description: '转换为小写', value: text.toLowerCase() },
        // { label: text.toLowerCase(), description: '转换为下划线', detail: '关键词：_', value: text.toLowerCase() },
        // { label: text.toLowerCase(), description: '转换为连字符', detail: '关键词：-', value: text.toLowerCase() },
    ];

    for (const recommendItem of mergeResultList) {
        if (isStringArrayEqual(textList, recommendItem.conversionText)) {
            continue; // 如果转换后与转换前相同，那么跳过这一项
        }
        const conversionTextForDisplay = recommendItem.conversionText.join(' ').replace(/\s+/g, " "); // 友好展示 将连续空格 \n \t 等替换为单一空格
        let quickPickItem: QuickPickItemEx = {
            label: conversionTextForDisplay.length >= QuickPickLabelMaxLength
                ? (conversionTextForDisplay.substring(0, QuickPickLabelMaxLength - 3) + '...')
                : conversionTextForDisplay,
            description: vscode.l10n.t('Convert to {0}', recommendItem.transformTo.join(' / ')),
            detail: vscode.l10n.t('Keywords: {0}', recommendItem.keyword.join(' ')),
            value: recommendItem.conversionText,
        };
        quickPickList.push(quickPickItem);
    }
    return quickPickList;
}

export function handleQuickPick() {
    // 获取当前编辑器
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }

    const document = editor.document;
    const selections = editor.selections;
    const eol: EOL = document.eol === vscode.EndOfLine.CRLF ? '\r\n' : '\n';

    // 获取选中的文本
    const textList = selections.map(selection => document.getText(selection));

    if (textList.filter(text => text.length > 0).length === 0) {
        vscode.window.showInformationMessage(vscode.l10n.t('Select the variable you want to convert and try again.'));
        return;
    }

    // 获取用户配置
    const enabledFormats = getUserConfigurations<Record<string, boolean>>('enabledFormats') || {};
    const formatOrder = getUserConfigurations<string[]>('formatOrder') || [];

    // 排除禁用的选项
    // issue: #1 https://github.com/zhang-brook/variable-conversion-vscode-extension/issues/1
    const enabledQuickPickSupportCases = [];
    for (const quickPick of quickPickSupportCases) {
        const enableSettingsKey = settingsKeyToEnableSettingsKey.get(quickPick.settingsKey);
        if (!enableSettingsKey) {
            console.warn('Cannot find enableSettingsKey for settingsKey:', quickPick.settingsKey);
            continue;
        }
        if (enabledFormats[enableSettingsKey] !== true) {
            continue;
        }
        enabledQuickPickSupportCases.push(quickPick);
    }

    if (enabledQuickPickSupportCases.length === 0) {
        vscode.window.showInformationMessage(vscode.l10n.t('All formats have been disabled. Update the `variable-conversion.enabledFormats` setting and try again.'));
        return;
    }

    // 按用户配置的顺序排序
    // issue: #5 https://github.com/zhang-brook/variable-conversion-vscode-extension/issues/5
    // issue: #6 https://github.com/zhang-brook/variable-conversion-vscode-extension/issues/6
    if (formatOrder.length > 0) {
        enabledQuickPickSupportCases.sort((a, b) => {
            const indexA = formatOrder.indexOf(a.settingsKey);
            const indexB = formatOrder.indexOf(b.settingsKey);

            // 如果两个都在配置中，按配置顺序
            if (indexA !== -1 && indexB !== -1) {
                return indexA - indexB;
            }
            // 如果只有一个在配置中，在配置中的排在前面
            if (indexA !== -1) {
                return -1;
            }
            if (indexB !== -1) {
                return 1;
            }
            // 如果都不在配置中，保持原有顺序
            return 0;
        });
    }

    // 基于选中的文本生成选项
    const options = generateOptionsBasedOnText(textList, eol, enabledQuickPickSupportCases);
    if (options.length === 0) {
        vscode.window.showInformationMessage(vscode.l10n.t('No conversion candidates are available for the selected content. Try selecting different text.'));
        return;
    }

    // 显示推荐项列表
    vscode.window.showQuickPick(options, {
        matchOnDetail: true,
        title: vscode.l10n.t('Select a naming convention'),
        placeHolder: vscode.l10n.t('Select a conversion, or type a keyword to filter')
    }).then(pickItem => {
        if (!editor || pickItem === undefined) {
            return;
        }

        const convertedList = pickItem.value;

        // 当转换后文本与转换前相同时，跳过转换，避免形成 Ctrl + Z 撤销历史记录
        if (isStringArrayEqual(convertedList, textList)) {
            console.log('selection text is same to converted text, skip replace contents.');
            return;
        }

        // 替换文本
        console.log('replace selection text', textList, 'to', convertedList);
        editor.edit(editBuilder => {
            for (let i = 0; i < selections.length; i++) {
                const selection = selections[i];
                const converted = convertedList[i];
                editBuilder.replace(selection, converted);
            }
        });
    });
}
