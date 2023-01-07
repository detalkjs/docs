---
layout: doc
title: 后端 reCAPTCHA 设置
---

# 后端 reCAPTCHA 设置

## 注册 reCAPTCHA

> **What is reCAPTCHA?**
> 
> **reCAPTCHA protects your website from fraud and abuse without creating friction.**
> 
> reCAPTCHA uses an advanced risk analysis engine and adaptive challenges to keep malicious software from engaging in abusive activities on your website. Meanwhile, legitimate users will be able to login, make purchases, view pages, or create accounts and fake users will be blocked.

reCAPTCHA 是非常人性化、优秀的人机验证码服务，可以有效帮助你的 Detalk.js 减少被轰炸的风险。

reCAPTCHA v3 不需要任何额外的操作，reCAPTCHA 就可以自动分析行为并给出得分。

首先，你需要一个 Google 账号。然后，点击控制台上的 [注册新网站](https://www.google.com/recaptcha/admin/create)。

填写备注名，勾选「reCAPTCHA 第 3 版」，添加部署 Detalk.js 的域名（建议额外添加 `localhost`, `127.0.0.1` 便于调试）。

最后，勾选「我已同意协议」，点击「提交」。

![](https://p.awa.fyi/s/2023/1673072313234.png)

然后，就可以看到「网站密钥」和「密钥」两个参数。

「网站密钥」可以提交给前端，任何人都可以查看。而「密钥」则是必须妥善保存，存放于 Server 端。

![](https://p.awa.fyi/s/2023/1673072557333.png)

## 后端 reCAPTCHA 设置

打开 [控制面板](/server/dashboard.html)，在「后端设置」中找到「第三方」一栏，填写「密钥」和「阈值」。

![](https://p.awa.fyi/s/2023/1673072688363.png)

「密钥」指上文复制的存放于 Server 端的密钥。

「阈值」则为判定机器人的标准，范围在 `0.0 - 1.0` 之间，不宜设置过高或过低，默认值为 `0.5`。


