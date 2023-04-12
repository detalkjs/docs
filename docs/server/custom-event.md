---
title: 自定义评论事件

---
# 自定义评论事件 <Badge type="warning" text="Beta" />

Detalk 支持您的评论前和评论后的事件行为进行自定义。

## 注意 <Badge type="danger" text="必读" />

> 这是由 `eval` 函数实现的，您可以在管理面板的「后端设置」中的「自定义」对其进行随意修改。

::: warning
这些函数可以对提交的评论信息、您的 Detalk 数据库进行随意修改，请在保存配置前确保你已经阅读并理解过代码。如果因为自定义事件中的恶意代码而导致信息泄露、数据库崩溃等事故，Detalk 概不负责。
:::

## 评论前

### 传入内容

> 评论前 (`beforeComment`) 的实现代码可以[见此处](https://github.com/detalkjs/server/blob/master/src/action/beforeComment.js)。

可以看到，函数传入一个 `$data` 变量。

`$data` 变量的内容大致如下：

```js
let $data = {
// 评论者的昵称
	nickname: "Detalk",
    // 评论者的邮箱
	email: "detalk@example.com",
    // 评论内容，已经 Markdown 解析
	content: "<p>Hello World</p>",
    // 评论者的网址（可能为空）
	url: "http://example.com",
    // 评论时间戳
	timestamp: 1672891465409,
    // IP 地址（目前为空）
	ip: '1.1.1.1',
    // 评论者的 UA
	ua: '',
    // 此条评论的唯一 ID
	rpid: '',
    // 评论者的 Token（可能为空）
	auth: '',
    // 评论者的标识（可能为空，admin 为管理员评论）
	label: '',
    // 是否隐藏
    hide: false,
};
```

### 基本格式

此函数在任何评论提交至数据库之前执行，一般可作为垃圾信息检测等。

你无需额外获取 `$data`，也无需 `return` 修改过的数据。

`$data` 变量中的内容将会被默认返回。

代码需遵循 JavaScript 语法，默认包含 [`fetch (node-fetch@2)`](https://www.npmjs.com/package/node-fetch/v/2.6.7), `Deta (deta)`, [`db (Deta Base)`](https://docs.deta.sh/docs/base/sdk#using) 等扩展。

以下是最简单的一个示例：

```js
// $data 已经传入，可直接使用
console.log($data);
// 对代码的内容进行修改
$data.content += 'Hello World'; // 评论内容追加 `Hello World`.
```

这样，每一条新建的评论末尾都会追加 `Hello World`。


### 更多示例

<br/>

#### 发起 HTTP 请求

默认已包含 `node-fetch@2`，可以直接使用 `fetch`。

`fetch` 是一个 Async 函数，在事件中，你可以这么写：

```js
// 在 async 中运行
(async () => {
	// fetch 取得响应数据
	let timestamp = await fetch('https://timestamp-by-cky.deno.dev/').then(res => res.text());
	// ... (以在内容后追加时间戳为例)
    $data.content += timestamp;
})();
```

#### 关键词评论隐藏

要使评论隐藏，只需要将 `$data.hide` 设为 `true` 即可。
```js
if ($data.content.match(/测试/g)) {
	$data.hide = true;
}
```

## 评论后

### 传入内容

评论后传入内容与评论前相同，您可以[参见此处](#传入内容)。

### 基本格式

评论后的基本格式与评论前相同，您可以[参见此处](#基本格式)。

不同的是，评论后数据已被写入数据库，**返回任何 `$data` 都不受影响**。

此函数只有在评论成功后才执行，一般可作为评论通知等。

> 为方便推送评论通知功能，`afterComment` 参数新增 [`nodemailer`](https://www.npmjs.com/package/nodemailer) 依赖。

## Awesome Scripts

Detalk.js 正在维护一个仓库，内有对于 Detalk.js 的强大脚本支持。你可以[参见此处](https://github.com/detalkjs/awesome-scripts#readme)。


---

<Comment/>
