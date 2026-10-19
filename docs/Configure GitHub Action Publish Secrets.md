# 配置 GitHub Actions 发布凭据

[Publish 工作流](../.github/workflows/publish.yml) 发布到两个市场：

| 平台 | 凭据方式 |
| --- | --- |
| Visual Studio Marketplace | 仓库 Secret `VSCE_PAT` |
| Open VSX Registry | Trusted Publishing（OIDC），无需存储任何 Secret |

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

## 2. 注册 Open VSX Trusted Publisher

Open VSX 用工作流的 OIDC 短时令牌换取发布权限，注册一次后 CI 里不再需要 token。发布步骤通过 `ovsx publish --trusted-publishing` 完成（要求 `ovsx` CLI ≥ 1.3.0），工作流已声明 `id-token: write` 权限。

前置条件：注册操作使用的 GitHub 账号必须拥有 `coder-xiaomo` 命名空间。

1. 登录 [Open VSX](https://open-vsx.org)，进入 **User settings** → **Trusted Publishers**。
2. 点击 **Add a trusted publisher**，按弹窗填写：

   | 字段 | 值 |
   | --- | --- |
   | Namespace | `coder-xiaomo` |
   | Publisher | GitHub |
   | Extension | `variable-conversion` |
   | Organization or User name | `zhang-brook` |
   | Repository name | `variable-conversion-vscode-extension` |
   | Workflow filename | `publish.yml` |
   | Environment name | 留空（工作流未使用 GitHub Environment） |

3. 点击 **Register**。

注意：

- Workflow filename 只填文件名，且该文件必须已存在于仓库的 `.github/workflows/`。
- 注册匹配的是「命名空间 + 扩展 + 仓库 + 工作流文件」，之后任何分支或 tag 触发都允许发布；OIDC 令牌会校验仓库与发布者归属，因此改名仓库或转移所有权后需要更新注册。
- 若之前为 CI 创建过 `OVSX_PAT`，注册成功并验证发布后可在 Open VSX 撤销该 token，并删除同名 GitHub Secret。

## 3. 写入 GitHub Secrets

在 GitHub 仓库 [zhang-brook/variable-conversion-vscode-extension](https://github.com/zhang-brook/variable-conversion-vscode-extension) 中操作：

1. 打开 **Settings** → **Secrets and variables** → **Actions**。
2. 点击 **New repository secret**。
3. Name 填 `VSCE_PAT`，Secret 填上一步创建的 PAT，保存。

命令行方式（可选，需要已登录 `gh`）：

```bash
gh secret set VSCE_PAT
```

按提示粘贴值，不要把 token 直接写在命令行参数里。

Secret 名称必须与工作流中的 `secrets.VSCE_PAT` 完全一致。保存后只能更新或删除，无法查看原值。

## 4. 验证发布

1. 提交并推送工作流文件到默认分支。
2. 打开 GitHub **Actions** → **Publish** → **Run workflow**。
3. 输入要发布的 tag，例如 `2.3.3`，勾选 **Publish to Open VSX Registry**（默认不勾选），点击运行。

工作流会先校验 tag 与 `package.json` 版本一致，再依次发布。两个市场都启用了 `--skip-duplicate`，已存在的版本会被跳过，因此某个市场失败后可以直接重跑。

tag 推送触发的发布会自动执行 Open VSX 步骤，无需勾选。

## 凭据维护

- 出现泄露或不再使用时，立即在 Azure DevOps 撤销 token，并更新对应的 GitHub Secret。
- `VSCE_PAT` 到期前创建新 PAT 并更新 Secret。
- `docs/` 目录不会被打进扩展包，凭据只通过 GitHub Secrets 注入，不要写入仓库文件。
