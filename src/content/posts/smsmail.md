---
title: 搭建短信转发器，不带手机也能收验证码！
published: 2026-02-21T20:33:01
description: 再也不用因为忘带手机而收不到验证码，教你用旧手机打造专属短信转发器。
image: ../assets/images/smsmail/image.jpg
tags: 
  - 短信
  - 开源
  - 搞机
  - 效率工具
draft: false
lang: ''
---

# 📱 搭建短信转发器：不带手机，也能收验证码！

出门在外（尤其是学校），手机没带，验证码一收不到，直接原地升天，在登录界面干瞪眼半小时。

但今天，这个问题即将成为历史！有了下面这个开源神器，你可以让家里的旧手机化身你的短信小助手，随时随地把验证码“空投”到你的邮箱。

:::github{repo="pppscn/SmsForwarder"}
:::

## 战前准备：你的“军火库”需要这些

在开始搞事情之前，我们得先备齐家伙事儿：

1.  **核心装备：SmsForwarder**
    就是上面那个项目的APK，把它装在你的“工具机”上。

2.  **工具机：一台能收短信、能联网的安卓设备**
    系统要求不高，Android 4.4 以上就行。翻翻你的抽屉，那台卡成PPT的旧手机终于要迎来它的“第二春”了。

3.  **发信渠道：一个用于转发短信的邮箱（推荐网易163）**
    这是你的“信鸽”，负责把短信送出去。**（血的教训：千万别用QQ邮箱！我试了几下，腾讯直接把我邮箱扬了，气死了！）**

4.  **电力保障：足够的电源**
    这软件一直跑着还是挺费电的，建议插着充电器，实现“永动机”式服务。

5.  **收信渠道：你用来接收短信的邮箱（推荐Outlook）**
    你的私人信箱。选Outlook是因为我在外面直接登录就能收信，不用再二次验证，就很方便。

6.  **终极外挂：一个聪明的大脑 & AI助手**
    遇到不懂的配置？直接问AI，它就是你的7x24小时在线技术顾问。

## 🚀 开始整活！手把手教程

### 第一步：SmsForwarder 是个啥？

简单说，它就是个“短信二传手”。能监控你手机上的短信、来电甚至App通知，然后根据你定的规矩，用各种姿势（钉钉、企业微信、邮箱、Bark等）转发到另一台设备上。甚至还能让你远程发短信、查电量，牛不牛？

### 第二步：搞定你的“发信邮箱”

1.  注册或准备好你的发信邮箱（推荐163）。
2.  登录网页版，去设置里找到 `POP3/SMTP服务`，把它打开。

![](/poimage/pop.jpg)

3.  记下生成的**授权码**，这相当于邮箱的“独立密码”，**千万别告诉别人**。

### 第三步：配置SmsForwarder

打开软件，跟着我走：

1.  **进入主界面**，点击右下角的 `通用设置` 按钮，开始你的第一步。权限该给就给，别吝啬，开源的也不会偷你数据。
![](/poimage/Ty.jpg)
2.  **创建发送通道**：点击底部导航栏第三个图标（像个纸飞机，叫“发送通道”），然后点右上角的 `➕` 新建一个通道。
![](/poimage/fs.jpg)
    - **通道昵称**：随便起个名，比如“163冈易免费邮”。
    - **发件邮箱**：选对邮箱类型，比如 `163.com`。然后填写邮箱地址@前面的内容
    - **登录密码**：填你刚才得到的那个**授权码**，不是邮箱登录密码哦！
    - **收件人邮箱**：填你用来接收短信的邮箱（比如Outlook）。
    - 其他选项可以自定义，比如发件人昵称、邮件主题，点那些示例按钮可以插入变量（比如设备名）。
    - 都填好后，点右下角的 **“测试”**。如果配置没问题，你的收信邮箱很快就能收到一封测试邮件。
 ![](/poimage/fs2.jpg)
      
3.  **创建转发规则**：点击底部导航栏第二个图标（标题是“转发规则”），然后点右上角的 `➕` 新建一个规则。
    - **规则别名**：比如“转验证码”。
    - **发送通道**：选择你刚创建的那个“163冈易免费邮”。
    - **匹配卡槽**：如果你插了两张卡，可以指定只转发某一张卡的短信。我只有一张卡，所以选“不限卡槽”。
    - **匹配字段**：选“短信内容”。
    - **匹配规则**：输入 `验证码`。这样，只有短信内容里带“验证码”的短信才会被转发，避免各种垃圾短信轰炸转发到邮箱。
    - 别忘了打开 **“启用该条转发规则”** 的开关。
    - 点一下“测试”，随便填个号码和内容，你的收信邮箱应该又能收到一封测试邮件。完美！
![](/poimage/zf1.jpg)
![](/poimage/zf2.jpg)
### 第四步（可选）：给你的通知来个“精装修”

现在能用了，但默认的邮件内容比较简陋，不够酷。我们可以勾选 **“自定义模板”**，用HTML代码自己设计一个高颜值的邮件通知。

然后，把你的代码粘贴进去。当然，你也可以直接用我这份，用了𝕏（原Twitter）上下载的（找不到原图出处了，请谅解！）绝区零 **妄想天使** 图片作背景：

```html
<table width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width:480px;margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;border-radius:16px;overflow:hidden;border-collapse:collapse;"><tr><td style="padding:0;margin:0;line-height:0;font-size:0;"><img src="https://tangjunkai.eu.org/image/20260214_125044.jpg" alt="背景图" width="100%" style="display:block;width:100%;height:auto;border-radius:16px 16px 0 0;vertical-align:middle;"></td></tr><tr><td style="padding:6px;background:rgba(240,150,180,0.65);border-radius:0 0 16px 16px;border-collapse:collapse;margin:0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="background:#f096b4;color:#fff;padding:6px 10px;border-radius:8px;margin:0;border-collapse:collapse;"><tr><td width="16" style="padding-right:6px;margin:0;vertical-align:middle;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></td><td style="font-weight:600;font-size:14px;margin:0;vertical-align:middle;">新短信通知</td></tr></table><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size:13px;line-height:1.1;color:#fff;margin:0;border-collapse:collapse;"><tr><td width="14" style="padding-right:6px;vertical-align:middle;margin:0;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f096b4" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></td><td width="52" style="font-weight:bold;vertical-align:middle;margin:0;">来源：</td><td style="vertical-align:middle;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0;">{{FROM}} {{PHONE_AREA}}</td></tr><tr><td width="14" style="padding-right:6px;vertical-align:top;padding-top:1px;margin:0;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f096b4" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></td><td width="52" style="font-weight:bold;vertical-align:top;padding-top:1px;margin:0;">内容：</td><td style="background:rgba(240,240,245,0.2);padding:4px 8px;border-radius:6px;word-break:break-all;overflow:hidden;margin:0;">{{SMS}}</td></tr><tr><td width="14" style="padding-right:6px;vertical-align:middle;margin:0;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f096b4" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></td><td width="52" style="font-weight:bold;vertical-align:middle;margin:0;">时间：</td><td style="vertical-align:middle;margin:0;">{{RECEIVE_TIME}}</td></tr><tr><td width="14" style="padding-right:6px;vertical-align:middle;margin:0;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f096b4" stroke-width="2"><rect x="1" y="6" width="22" height="12" rx="2" ry="2"></rect><line x1="2" y1="2" x2="22" y2="2"></line></svg></td><td width="52" style="font-weight:bold;vertical-align:middle;margin:0;">设备：</td><td style="vertical-align:middle;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0;">{{DEVICE_NAME}}</td><td width="auto" style="color:#16a34a;font-weight:500;vertical-align:middle;white-space:nowrap;margin:0;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-right:2px;"><rect x="6" y="2" width="12" height="20" rx="2" ry="2"></rect><line x1="12" y1="2" x2="12" y2="6"></line></svg>{{BATTERY_PCT}} ({{BATTERY_STATUS}})</td></tr></table><table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin:0;border-collapse:collapse;"><tr><td style="text-align:center;font-size:10px;color:#fff;opacity:0.8;margin:0;padding-top:4px;">由 {{DEVICE_NAME}} 自动转发 · 请勿回复 来自tangjunkai.eu.org</td></tr></table></td></tr></table>
```
预览:

<table width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width:480px;margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;border-radius:16px;overflow:hidden;border-collapse:collapse;"><tr><td style="padding:0;margin:0;line-height:0;font-size:0;"><img src="https://tangjunkai.eu.org/image/20260214_125044.jpg" alt="背景图" width="100%" style="display:block;width:100%;height:auto;border-radius:16px 16px 0 0;vertical-align:middle;"></td></tr><tr><td style="padding:6px;background:rgba(240,150,180,0.65);border-radius:0 0 16px 16px;border-collapse:collapse;margin:0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="background:#f096b4;color:#fff;padding:6px 10px;border-radius:8px;margin:0;border-collapse:collapse;"><tr><td width="16" style="padding-right:6px;margin:0;vertical-align:middle;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></td><td style="font-weight:600;font-size:14px;margin:0;vertical-align:middle;">新短信通知</td></tr></table><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size:13px;line-height:1.1;color:#fff;margin:0;border-collapse:collapse;"><tr><td width="14" style="padding-right:6px;vertical-align:middle;margin:0;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f096b4" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></td><td width="52" style="font-weight:bold;vertical-align:middle;margin:0;">来源：</td><td style="vertical-align:middle;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0;">19198101145</td></tr><tr><td width="14" style="padding-right:6px;vertical-align:top;padding-top:1px;margin:0;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f096b4" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></td><td width="52" style="font-weight:bold;vertical-align:top;padding-top:1px;margin:0;">内容：</td><td style="background:rgba(240,240,245,0.2);padding:4px 8px;border-radius:6px;word-break:break-all;overflow:hidden;margin:0;">【噼里啪啦】114514短信登录验证码，5分钟内有效，请勿泄露。</td></tr><tr><td width="14" style="padding-right:6px;vertical-align:middle;margin:0;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f096b4" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></td><td width="52" style="font-weight:bold;vertical-align:middle;margin:0;">时间：</td><td style="vertical-align:middle;margin:0;">2026-02-21 22:27:25</td></tr><tr><td width="14" style="padding-right:6px;vertical-align:middle;margin:0;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f096b4" stroke-width="2"><rect x="1" y="6" width="22" height="12" rx="2" ry="2"></rect><line x1="2" y1="2" x2="22" y2="2"></line></svg></td><td width="52" style="font-weight:bold;vertical-align:middle;margin:0;">设备：</td><td style="vertical-align:middle;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0;">Oneplus</td><td width="auto" style="color:#16a34a;font-weight:500;vertical-align:middle;white-space:nowrap;margin:0;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-right:2px;"><rect x="6" y="2" width="12" height="20" rx="2" ry="2"></rect><line x1="12" y1="2" x2="12" y2="6"></line></svg>100% (充电中)</td></tr></table><table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin:0;border-collapse:collapse;"><tr><td style="text-align:center;font-size:10px;color:#fff;opacity:0.8;margin:0;padding-top:4px;">由 Oneplus 自动转发 · 请勿回复 来自tangjunkai.eu.org</td></tr></table></td></tr></table>

（可能会和邮箱内显示的不一样）

## 收工！让它永不停歇

全部设置完毕后，只要保证这台“工具机”不关机、不被后台杀死，你的短信转发系统就正式上线了！



