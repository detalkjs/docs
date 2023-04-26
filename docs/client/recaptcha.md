---
layout: doc
title: 前端 reCAPTCHA 设置
---

# 前端 reCAPTCHA 设置

## 注册 reCAPTCHA

::: info What is reCAPTCHA?
**reCAPTCHA protects your website from fraud and abuse without creating friction.**

reCAPTCHA uses an advanced risk analysis engine and adaptive challenges to keep malicious software from engaging in abusive activities on your website. Meanwhile, legitimate users will be able to login, make purchases, view pages, or create accounts and fake users will be blocked.
:::

reCAPTCHA 是非常人性化、优秀的人机验证码服务，可以有效帮助你的 Detalk.js 减少被轰炸的风险。

reCAPTCHA v3 不需要任何额外的操作，reCAPTCHA 就可以自动分析行为并给出得分。

首先，你需要一个 Google 账号。然后，点击控制台上的 [注册新网站](https://www.google.com/recaptcha/admin/create)。

填写备注名，勾选「reCAPTCHA 第 3 版」，添加部署 Detalk.js 的域名（建议额外添加 `localhost`, `127.0.0.1` 便于调试）。

最后，勾选「我已同意协议」，点击「提交」。

![](https://p.awa.fyi/s/2023/1673072313234.png)

然后，就可以看到「网站密钥」和「密钥」两个参数。

「网站密钥」可以提交给前端，任何人都可以查看。而「密钥」则是必须妥善保存，存放于 Server 端。

![](https://p.awa.fyi/s/2023/1673072557333.png)

## 前端 reCAPTCHA 设置

前端需要在 `detalk.init` 时配置 reCAPTCHA 「网站密钥」。

配置代码如下：

```js
detalk.init({
  ...options,
  // 网站密钥
  recaptchaSiteKey: '6LefUdojAAAAAHe0G0p0MaW5U93AnH_G5QViDl92',
  // 是否已经加载 reCAPTCHA。如这项设为 true，则不会再加载 reCAPTCHA 代码。
  recaptchaLoaded: false,
});
```

---

<Comment />

