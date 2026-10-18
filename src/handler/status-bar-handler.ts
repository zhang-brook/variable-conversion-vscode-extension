import * as vscode from 'vscode';

// docs: https://code.visualstudio.com/api/references/vscode-api#StatusBarItem

let statusBarItemList: Array<vscode.StatusBarItem> = [];

/**
 * 创建状态栏按钮
 *
 * @since 2024-04-07
 */
export function createStatusBarItem() {
    // 变量转换状态栏 2024.04.07
    const createVariableConvertStatusBarItem = () => {
        const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
        // Icon Listing docs: https://code.visualstudio.com/api/references/icons-in-labels#icon-listing
        statusBarItem.text = `$(find-replace) ${vscode.l10n.t('Variable Conversion')}`;
        statusBarItem.tooltip = vscode.l10n.t('Convert the selected text using Variable Conversion');
        statusBarItem.command = 'variable-conversion.convertCase';
        // statusBarItem.color = 'red';
        // statusBarItem.show();
        return statusBarItem;
    };
    // 路径转换状态栏 2024.12.14
    const createPathConvertStatusBarItem = () => {
        const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
        statusBarItem.text = `$(sync-ignored) ${vscode.l10n.t('Path Conversion')}`; // italic symbol-null
        statusBarItem.tooltip = vscode.l10n.t('Convert the selected path using Path Conversion');
        statusBarItem.command = 'variable-conversion.convertPath';
        statusBarItemList.push(statusBarItem);
        return statusBarItem;
    };

    statusBarItemList.push(
        createVariableConvertStatusBarItem(),
        createPathConvertStatusBarItem(),
    );
}

/**
 * 判断是否展示状态栏按钮
 *
 * @since 2024-04-07
 */
export function updateStatusBarItemVisible(selectTextLength: number) {
    let editor = vscode.window.activeTextEditor;
    if (editor && selectTextLength > 0) {
        statusBarItemList.forEach(statusBarItem => {
            statusBarItem.show();
        });
        return;
    }
    statusBarItemList.forEach(statusBarItem => {
        statusBarItem.hide();
    });
}
