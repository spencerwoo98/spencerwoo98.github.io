(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{254:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("前几天稍微写了一个小小的打赏 "),s("strong",[t._v("碎片。")]),t._v(" 给 Hexo 做了一些微小的贡献。")]),t._v(" "),s("p",[t._v("因为实在是太小了，实现也太过简单了，所以划重点："),s("strong",[t._v("碎片")]),t._v("。")]),t._v(" "),s("h1",{attrs:{id:"_0×01-fragments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0×01-fragments","aria-hidden":"true"}},[t._v("#")]),t._v(" 0×01 Fragments")]),t._v(" "),s("p",[t._v("之前看 Hexo 的主题，包括 Next 和 Material 主题，都直接集成了「打赏模块」。很可惜我的主题简洁到除了没有评论，也没有设计打赏模块！自己动手，丰衣足食。虽然很简单，但是有总比没有强。")]),t._v(" "),s("p",[t._v("最初，我想要的是一个小小的按钮，点击打开一个抽屉，然后出现两个二维码。")]),t._v(" "),s("p",[t._v("就像 iOS 6.0 以及之前的应用抽屉：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2018/03/15/5aaa57113bc8b.jpg",alt:""}})]),t._v(" "),s("p",[t._v("如果真的可以用纯 CSS 实现这个质感的背景 (svg)，我就实在是佩服自己了。")]),t._v(" "),s("br"),t._v(" "),s("h1",{attrs:{id:"_0×02-rewards"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0×02-rewards","aria-hidden":"true"}},[t._v("#")]),t._v(" 0×02 Rewards")]),t._v(" "),s("p",[t._v("最难的部分竟然是用  jQuery 实现点击下拉 + 点击隐藏，就是所谓的 Expand and Collapse.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".reward_btn"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        $reward_btn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//getting the next element")]),t._v("\n        $qr_code "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $reward_btn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//open up the qr_code needed - toggle the slide- if visible, slide up, if not slidedown.")]),t._v("\n        $qr_code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slideToggle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//execute this after slideToggle is done")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//change text of reward_btn based on visibility of qr_code div")]),t._v("\n            $reward_btn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//change text based on condition")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" $qr_code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("is")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('":visible"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"点击收起"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请喝咖啡"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("具体的 JavaScript 就是如上了。主要代码只有 6 行，感谢 StackOverflow 的大神。")]),t._v(" "),s("p",[t._v("用 CSS 把按钮和图片变好看是最最最简单的了。虽然要比 JavaScript 多上 90 多行代码量。")]),t._v(" "),s("p",[t._v("最后实现的效果在本页面最下面啦！")]),t._v(" "),s("br"),t._v(" "),s("h1",{attrs:{id:"_0×03-github-ify"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0×03-github-ify","aria-hidden":"true"}},[t._v("#")]),t._v(" 0×03 GitHub-ify")]),t._v(" "),s("p",[t._v("前几天唐大佬在校内服务器上搞成功了一个 GitLab，间接地熟悉了 git 的各种命令。")]),t._v(" "),s("p",[t._v("受 Telegram 上一个叫做「Apply for 🐸」的机器人启发，"),s("strong",[t._v("ALSO")]),t._v(" 也为了测试校内服务器，在 GitLab 上面上传了一个抒发对赞大佬崇拜之情的脚本。")]),t._v(" "),s("p",[t._v("这个算作是自己第二个认认真真设计的项目吧。地址在这里 -> "),s("a",{attrs:{href:"https://github.com/spencerwoo98/sexy-donate",target:"_blank",rel:"noopener noreferrer"}},[t._v("SexyDonate on GitHub"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("目前有两个小遗憾：")]),t._v(" "),s("ul",[s("li",[t._v("一个是那个 iOS 拟物化风格的应用抽屉背景，用纯 CSS 实现。")]),t._v(" "),s("li",[t._v("还有一个是整个 Fragment 用 JavaScript 渲染出来。这样直接引用更小的一部分代码，在其他网页上就可以出现了，现在还需要一点 HTML 配合。最终的想法应该是 Gitment 那样子的代码片段：")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" gitment "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Gitment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Your page ID'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// optional")]),t._v("\n  owner"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Your GitHub ID'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  repo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The repo to store comments'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  oauth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    client_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Your client ID'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    client_secret"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Your client secret'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For more available options, check out the documentation below")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ngitment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'comments'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("如上吧，这是 Render Gitment 时候的 JavaScript 代码。这样的话，还可以直接设置 HTML 代码中的一些自定义的内容，包括二维码链接、按钮的文本等等。")]),t._v(" "),s("p",[t._v("理想。")]),t._v(" "),s("br"),t._v(" "),s("h1",{attrs:{id:"_0×04-animista"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0×04-animista","aria-hidden":"true"}},[t._v("#")]),t._v(" 0×04 Animista")]),t._v(" "),s("p",[t._v("昨天还有一个愿望，就是按钮可以对鼠标点击 (onClick) 或者悬停事件 (onHover) 做出一些反应，显得不那么单调，调皮一些。")]),t._v(" "),s("p",[t._v("首先感谢 Chrome 的插件 AnywayFM，一群牛逼的设计师设计的首屏。美的不可方物。")]),t._v(" "),s("p",[t._v("再感谢 "),s("a",{attrs:{href:"http://animista.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Animista"),s("OutboundLink")],1),t._v("，由 AnywayFM 推荐的 CSS 合集。")]),t._v(" "),s("p",[t._v("在上面我找到了能实现：鼠标悬停在按钮上，按钮会调皮的抖动的 CSS。实在是骚气。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2018/03/14/5aa8bc4b20774.jpg",alt:""}})]),t._v(" "),s("br"),t._v(" "),s("h1",{attrs:{id:"_0×05-设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0×05-设计","aria-hidden":"true"}},[t._v("#")]),t._v(" 0×05 设计")]),t._v(" "),s("p",[t._v("我的 Java 和安卓老师，金大师。")]),t._v(" "),s("p",[t._v("他在安卓课上讲到 Google 的 Material Design 的时候讲过，程序员不要接触设计相关的领域。")]),t._v(" "),s("p",[t._v("脑子会烧掉的。")]),t._v(" "),s("p",[t._v("让那些有美感的同学去做设计吧。")]),t._v(" "),s("p",[s("strong",[t._v("我是一万个不同意。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2018/03/11/5aa5377418b17.jpg",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("好看是第一生产力。")])]),t._v(" "),s("p",[t._v("继续对简洁与效率的追求。这就是美。")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("p",[t._v("© Spencer Woo")]),t._v(" "),s("p",[t._v("打赏 DEMO 如下 ↓↓↓ 打赏 DEMO 如下")])])},[],!1,null,null,null);a.default=e.exports}}]);