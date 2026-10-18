import * as vscode from 'vscode';
import QuickPickItemEx from "../types/QuickPickItemExType";
import { QuickPickSupportCaseItem, quickPickSupportCases, settingsKeyToEnableSettingsKey } from '../../core/path-convert/types/SupportPathFormatType';
import { TransformTextResult } from '../../types/TransformTextResultType';
import { transformMultiSelectionText } from '../../utils/transform';
import { EOL } from '../../types/EOLType';
import { pathConversion } from '../../core/path-convert/conversion';
import { isStringArrayEqual } from '../../utils/utils';
import { getUserConfigurations } from '../../utils/user-configuration';
import { getPathFormatDisplayName } from '../../i18n/display-names';

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
 * @since 2024-12-14
 */
function generateOptionsBasedOnText(textList: string[], eol: EOL, enabledQuickPickSupportCases: Array<QuickPickSupportCaseItem>): Array<QuickPickItemEx> {
    // Cut text 切割文本
    const resultsList: Array<TransformTextResult[]> = transformMultiSelectionText(textList);

    const mergeResultList: Array<RecommendItem> = [];
    for (const quickPick of enabledQuickPickSupportCases) {
        const shortName = getPathFormatDisplayName(quickPick.settingsKey).shortName;
        const conversionResults: Array<string> = [];
        for (let i = 0; i < textList.length; i++) {
            const text = textList[i];
            const results = resultsList[i];
            const conversionResult: string = pathConversion(quickPick.type, text, eol, results);
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
    const quickPickList = [];

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
        vscode.window.showInformationMessage(vscode.l10n.t('Select the path you want to convert and try again.'));
        return;
    }

    // 获取用户配置
    const enabledPathFormats = getUserConfigurations<Record<string, boolean>>('enabledPathFormats') || {};
    // 排除未启用的选项
    const enabledQuickPickSupportCases = [];
    for (const quickPick of quickPickSupportCases) {
        const enableSettingsKey = settingsKeyToEnableSettingsKey.get(quickPick.settingsKey);
        if (!enableSettingsKey) {
            console.warn('Cannot find enableSettingsKey for settingsKey:', quickPick.settingsKey);
            continue;
        }
        if (enabledPathFormats[enableSettingsKey] === false) {
            continue;
        }
        enabledQuickPickSupportCases.push(quickPick);
    }
    if (enabledQuickPickSupportCases.length === 0) {
        vscode.window.showInformationMessage(vscode.l10n.t('All path formats have been disabled. Update the `variable-conversion.enabledPathFormats` setting and try again.'));
        return;
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
        title: vscode.l10n.t('Select a path format'),
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
