---
layout: doc
title: 一键部署
---

> **此内容已过时！新版本（v2.0.0+）仅支持 Deta Space！**


# 一键部署

Detalk 可以 100% 兼容的运行在 Deta 平台上。使用下方的按键即可一键部署至 Deta，这需要您有一个 [Deta 账号](https://web.deta.sh/)。


> Deta 对个人开发者可以免费使用。


## 开始

单击下方的 Deploy to Deta 即可一键部署：


[![Deploy](https://button.deta.dev/1/svg)](https://go.deta.dev/deploy?repo=https://github.com/detalkjs/server)


在页面中，会出现 Detalk 的一些简单设置：

![](https://p.awa.fyi/s/2023/1672890343774.png)

如果账户中目前只有一个 Detalk 可忽略 `BASE_NAME` 键。这是为了防止多个 Detalk 冲突而存在的。

如果账户中已有 Detalk，您需要更改 `BASE_NAME` 键。键值随意但不能与之前的相同。

> **此项不是必须的，如果为空则会默认为 `detalk`。**

接下来，点击 `Deploy`，Deta 就会自动部署。


## 成功

当提示成功时，页面就会显示您的 Detalk 后端地址。我们可以点击 `Go to Micro Details` 查看更多详情。

![](https://p.awa.fyi/s/2023/1672890641335.png)

然后浏览器访问 `[后端地址]/config`，根据提示就可以打开官方控制面板完成注册。

---

<Comment />
