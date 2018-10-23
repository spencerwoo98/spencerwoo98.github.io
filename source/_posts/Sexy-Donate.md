---
title: Sexy Donate
subtitle: 一只 200 行代码以内的小可爱「打赏」模块背后的思考
date: 2018-03-15 18:49:07
header-img: "https://i.loli.net/2018/03/15/5aaa61d77b629.jpg"
tags:
    - code
    - sexy moves
    - github
---

前几天稍微写了一个小小的打赏 **碎片。** 给 Hexo 做了一些微小的贡献。

因为实在是太小了，实现也太过简单了，所以划重点：**碎片**。

# 0×01 Fragments

之前看 Hexo 的主题，包括 Next 和 Material 主题，都直接集成了「打赏模块」。很可惜我的主题简洁到除了没有评论，也没有设计打赏模块！自己动手，丰衣足食。虽然很简单，但是有总比没有强。

最初，我想要的是一个小小的按钮，点击打开一个抽屉，然后出现两个二维码。

就像 iOS 6.0 以及之前的应用抽屉：

![img](https://i.loli.net/2018/03/15/5aaa57113bc8b.jpg)

如果真的可以用纯 CSS 实现这个质感的背景 (svg)，我就实在是佩服自己了。

<br>

# 0×02 Rewards

最难的部分竟然是用  jQuery 实现点击下拉 + 点击隐藏，就是所谓的 Expand and Collapse.

```javascript
$(".reward_btn").click(function() {
        $reward_btn = $(this);
        //getting the next element
        $qr_code = $reward_btn.next();
        //open up the qr_code needed - toggle the slide- if visible, slide up, if not slidedown.
        $qr_code.slideToggle(500, function() {
            //execute this after slideToggle is done
            //change text of reward_btn based on visibility of qr_code div
            $reward_btn.text(function() {
                //change text based on condition
                return $qr_code.is(":visible") ? "点击收起" : "请喝咖啡";
            });
        });
});
```

具体的 JavaScript 就是如上了。主要代码只有 6 行，感谢 StackOverflow 的大神。

用 CSS 把按钮和图片变好看是最最最简单的了。虽然要比 JavaScript 多上 90 多行代码量。

最后实现的效果在本页面最下面啦！

<br>

# 0×03 GitHub-ify

前几天唐大佬在校内服务器上搞成功了一个 GitLab，间接地熟悉了 git 的各种命令。

受 Telegram 上一个叫做「Apply for 🐸」的机器人启发，**ALSO** 也为了测试校内服务器，在 GitLab 上面上传了一个抒发对赞大佬崇拜之情的脚本。

这个算作是自己第二个认认真真设计的项目吧。地址在这里 -> [SexyDonate on GitHub](https://github.com/spencerwoo98/sexy-donate)

目前有两个小遗憾：

- 一个是那个 iOS 拟物化风格的应用抽屉背景，用纯 CSS 实现。
- 还有一个是整个 Fragment 用 JavaScript 渲染出来。这样直接引用更小的一部分代码，在其他网页上就可以出现了，现在还需要一点 HTML 配合。最终的想法应该是 Gitment 那样子的代码片段：

```javascript
const gitment = new Gitment({
  id: 'Your page ID', // optional
  owner: 'Your GitHub ID',
  repo: 'The repo to store comments',
  oauth: {
    client_id: 'Your client ID',
    client_secret: 'Your client secret',
  },
  // ...
  // For more available options, check out the documentation below
})

gitment.render('comments')
```

如上吧，这是 Render Gitment 时候的 JavaScript 代码。这样的话，还可以直接设置 HTML 代码中的一些自定义的内容，包括二维码链接、按钮的文本等等。

理想。

<br>

# 0×04 Animista

昨天还有一个愿望，就是按钮可以对鼠标点击 (onClick) 或者悬停事件 (onHover) 做出一些反应，显得不那么单调，调皮一些。

首先感谢 Chrome 的插件 AnywayFM，一群牛逼的设计师设计的首屏。美的不可方物。

再感谢 [Animista](http://animista.net/)，由 AnywayFM 推荐的 CSS 合集。

在上面我找到了能实现：鼠标悬停在按钮上，按钮会调皮的抖动的 CSS。实在是骚气。

![img](https://i.loli.net/2018/03/14/5aa8bc4b20774.jpg)

<br>

# 0×05 设计

我的 Java 和安卓老师，金大师。

他在安卓课上讲到 Google 的 Material Design 的时候讲过，程序员不要接触设计相关的领域。

脑子会烧掉的。

让那些有美感的同学去做设计吧。

**我是一万个不同意。**

![img](https://i.loli.net/2018/03/11/5aa5377418b17.jpg)

**好看是第一生产力。**

继续对简洁与效率的追求。这就是美。

<br>

<br>

© Spencer Woo

打赏 DEMO 如下 ↓↓↓ 打赏 DEMO 如下