# 扩展发布

推送与 `package.json` 版本一致的 tag 后，GitHub Actions 会自动构建并发布至 Visual Studio Marketplace 与 Open VSX Registry；也可在 Actions 页面手动运行 `Publish` 工作流并指定 tag。

仓库需配置 Secret：`VSCE_PAT`（Azure DevOps PAT，Marketplace Manage 权限）；Open VSX 使用 Trusted Publishing（OIDC 短时令牌），无需存储 Access Token。具体步骤见 [配置 GitHub Actions 发布凭据](./Configure%20GitHub%20Action%20Publish%20Secrets.md)。

## 手动发布

- [发布至 Visual Studio Marketplace](./deprecated/Publish%20to%20Visual%20Studio%20Marketplace.md)
- [发布至 Open VSX Registry](./deprecated/Publish%20to%20Open%20VSX%20Registry.md)

```bash
# 同时发布至多个 Marketplace
npm run publish
```
