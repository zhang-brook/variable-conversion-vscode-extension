# 配置 GitHub Actions 发布凭据

[Publish 工作流](../.github/workflows/publish.yml) 需要两个仓库 Secret：

| Secret | 平台 | 权限 |
| --- | --- | --- |
| `VSCE_PAT` | Visual Studio Marketplace | Marketplace → Manage |
| `OVSX_PAT` | Open VSX Registry | 可发布到 `coder-xiaomo` 命名空间 |

## 1. 创建 VSCE_PAT

前置条件：创建 PAT 的 Microsoft 账号必须能管理 `coder-xiaomo` 发布者，可在 [发布者管理页](https://marketplace.visualstudio.com/manage/publishers/coder-xiaomo) 确认。

1. 使用该账号登录 [Azure DevOps](https://dev.azure.com/footprintcat)。
2. 右上角 **User settings** → **Personal access tokens** → **New Token**。
3. 填写名称，例如 `variable-conversion-github-actions`。
4. **Organization** 选择你的组织 `footprintcat`。
5. **Expiration** 按组织策略设置，到期前需要轮换。
6. **Scopes** 选择 **Full access**。
7. 点击 **Create**，立即复制 token；页面关闭后无法再次查看。

本地验证（可选）：

```bash
npx @vscode/vsce login coder-xiaomo
# 按提示粘贴 PAT，成功后会保存到系统凭据
```

## 2. 创建 OVSX_PAT

前置条件：登录 Open VSX 的账号必须拥有 `coder-xiaomo` 命名空间，或具备该命名空间的发布权限。

1. 使用该账号登录 [Open VSX](https://open-vsx.org)。
2. 打开 [Access Tokens](https://open-vsx.org/user-settings/tokens)。
3. 点击 **Generate New Token**，填写名称，例如 `variable-conversion-github-actions`。
4. 复制 token；页面关闭后无法再次查看。

本地验证（不会发布）：

```bash
read -s OVSX_PAT
npx ovsx verify-pat coder-xiaomo -p "$OVSX_PAT"
unset OVSX_PAT
```

## 3. 写入 GitHub Secrets

在 GitHub 仓库 [zhang-brook/variable-conversion-vscode-extension](https://github.com/zhang-brook/variable-conversion-vscode-extension) 中操作：

1. 打开 **Settings** → **Secrets and variables** → **Actions**。
2. 点击 **New repository secret**。
3. Name 填 `VSCE_PAT`，Secret 填上一步创建的 PAT，保存。
4. 重复上述步骤，添加 `OVSX_PAT`。

命令行方式（可选，需要已登录 `gh`）：

```bash
gh secret set VSCE_PAT
gh secret set OVSX_PAT
```

按提示粘贴值，不要把 token 直接写在命令行参数里。

Secret 名称必须与工作流中的 `secrets.VSCE_PAT`、`secrets.OVSX_PAT` 完全一致。保存后只能更新或删除，无法查看原值。

## 4. 验证发布

1. 提交并推送工作流文件到默认分支。
2. 打开 GitHub **Actions** → **Publish** → **Run workflow**。
3. 输入要发布的 tag，例如 `2.3.3`，点击运行。

工作流会先校验 tag 与 `package.json` 版本一致，再依次发布。两个市场都启用了 `--skip-duplicate`，已存在的版本会被跳过，因此某个市场失败后可以直接重跑。

tag `2.3.3` 已在此工作流创建前推送，不会自动触发；需要按上述方式手动运行一次。

## 凭据维护

- 出现泄露或不再使用时，立即在 Azure DevOps / Open VSX 撤销 token，并更新对应的 GitHub Secret。
- `VSCE_PAT` 到期前创建新 PAT 并更新 Secret；`OVSX_PAT` 也建议定期轮换。
- `docs/` 目录不会被打进扩展包，凭据只通过 GitHub Secrets 注入，不要写入仓库文件。
