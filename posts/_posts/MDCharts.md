---
title: Markdown 进阶操作 | 流程图、时序图制作
date: 2018-09-10 20:14:55
subtitle: 啊，指尖舞动算法美。
top_img: https://i.loli.net/2018/09/10/5b96684035553.png
tags:
  - sspai
---

![1 Markdown with Typora.png](https://i.loli.net/2018/09/10/5b966095542c3.png)

自从我派在 2014 年发布了「[认识与入门 Markdown](https://sspai.com/post/25137)」这篇文章，Markdown 这个简洁、轻量而又强大的标记语言就逐渐走进了非专业人士的生活中。无论是对于程序员，还是博客作者、微信公众平台作者等等，Markdown 语言都逐渐深入人心。

作为可能是市面上免费的 Markdown 编辑器中最优雅的一个，还是全平台（Windows, macOS 和绝大多数 Linux 发行版）支持的 Markdown 利器 —— Typora，除了最基础的「标题」「列表」「表格」「图片」「代码」等等功能，你可能不知道的是：**Typora 还原生支持直接绘制时序图 Sequence、流程图 Flow Chart，**甚至**直接集成了 Mermaid 渲染引擎。**

本文写作环境为 Windows 10 1803，Typora 版本 0.9.57 (beta)。在 Typora「偏好设置 → Markdown 扩展语法」中打开「序列图、流程图和 Mermaid 选项」即可开启相关绘制功能。

![2 Typora Settings.png](https://i.loli.net/2018/09/10/5b9660b0a1ff3.png)

> Typora 官网参考：[Draw Diagrams With Markdown](https://support.typora.io/Draw-Diagrams-With-Markdown/)

## 时序图 Sequence

> Typora 的时序图渲染引擎是 [`js-sequence` - Turns text into UML sequence diagrams.](https://bramp.github.io/js-sequence-diagrams/#syntax)

在 Typora 中，你可以通过下面的方式开启时序图渲染：

![code.png](https://i.loli.net/2018/09/10/5b9663525d683.png)

上面是时序图的代码例子，渲染之后，这个时序图是这个样子的：

![3 Sequence-1.png](https://i.loli.net/2018/09/10/5b96613e8708f.png)

实际上时序图是一个循环，其**基本元素包括标题 `Title`、参与者 `participant`、箭头 `->` 和标签 `Notes`**。经过渲染之后，每个参与者 `participant` 由两个元素块构成，一条线段将两个元素块连接，这样就可以方便的用箭头表示他们之间的转换关系了。

### 标题和箭头的语法

![code.png](https://i.loli.net/2018/09/10/5b9663c41df18.png)

**在时序图基本语法中：**标题 `Title` 放在第一行，之后是参与者与用箭头标识的参与者之间的相互关系。

箭头有四种形式：常规箭头、虚线箭头、开口箭头和虚线开口箭头。分别通过：`->`、`-->`、`->>`、`-->>` 来表示。

![4 Sequence-2.png](https://i.loli.net/2018/09/10/5b9661553d5ea.png)

### 标签语法

![code.png](https://i.loli.net/2018/09/10/5b9663f6e7036.png)

在时序图中，我们可以通过「标签」这个组件来给我们的某个参与者或是某些参与者进行标注。标签可以放在参与者的左侧 - `Note left of A`、右侧 - `Note right of A` 或者浮于参与者上方 - `Note over A`。当然，标签也可以同时浮于两个参与者上方 - `Note over A,B`。

![5 Sequence-3.png](https://i.loli.net/2018/09/10/5b966168e5334.png)

### 参与者顺序语法

![code.png](https://i.loli.net/2018/09/10/5b966422a0f8f.png)

如果我们希望更改参与者的顺序，那么可以在一开始按照我们想要的顺序，先列出参与者的名字：`participant A` 这样。

![6 Sequence-4.png](https://i.loli.net/2018/09/10/5b9661789a6bd.png)

上面的几个例子是 Typora 所支持的基本时序图绘制语法，除了这些相对大的语法外，还有注释：`# 你的注释` 和在某个模块中换行：`\n` 这两个重要的语法。基本上通过这样的方式，我们就能绘制出简单的时序图了。🍻

更加详细的语法可以通过下图进行实现，深黄色为关键保留词，浅黄色为具体信息：

![7 Grammar.png](https://i.loli.net/2018/09/10/5b96619b6d8c9.png)

## 流程图 Flow Chart

> Typora 的时序图渲染引擎是 [`flowchart.js` - Draws simple SVG flow chart diagrams from textual representation of the diagram.](http://flowchart.js.org)

流程图的代码部分相对复杂。我们先从 Typora 官方文档给出的例子开始：

![code.png](https://i.loli.net/2018/09/10/5b966447ac1d6.png)

上面这部分代码，我们可以看到流程图的渲染代码**大体分为两个部分：元素定义部分、元素连接部分。**即：首先在第一部分，我们**定义整个流程图中的节点元素**；之后在第二部分，我们将各个节点通过箭头连接，以**表示整个图表的流向。**

经过渲染之后，我们可以得到以下这样的基础流程图：

![8 Flow-1.png](https://i.loli.net/2018/09/10/5b9661aa79bd2.png)

#### 第一部分：元素定义

我们从第一部分开始，可以看到，一个流程图的基本元素有六大类别：

- `start`：流程图开始
- `end`：流程图结束
- `operation`：操作
- `subroutine`：子进程
- `condition`：判断条件
- `inputoutput`：输入输出

元素定义部分的基本代码结构是这样的：

```gfm
tag=>type: content:>url
```

其中：

- `tag`：就是作为第二部分连接元素时候引用我们定义元素时的名称，这个 `tag` 需要独一无二。
- `type`：就是我们流程图的六大基本元素类别，选择元素种类填入即可。
- `content`：是我们流程图元素中所显示的文字。这里的冒号与文本之间一定要有个空格。
- `url`：是元素所带有的超链接。🔗

这样就是我们元素定义部分的基本语法了。🎉🎉🎉

#### 第二部分：元素连接

第二部分就是将我们在第一部分定义的元素通过我们想要的方式进行连接。

在这一部分，连接十分简单，就是利用 `->` 来连接我们在第一部分定义的那些元素，元素利用 `tag` 来区分。这里面需要注意的是：

- 对于每个「判断条件元素」 `condition`，都会有 `yes` 和 `no` 两个分支，比如上面代码中的 `cond(yes)` 和 `cond(no)`。
- 每个元素可以制定分支走向，默认是 `向下` 的，也可以用 `right` 指向右边，比如下面这个流程图中，我们可以将「子进程元素」 `subroutine` 放在右侧显示：

![code.png](https://i.loli.net/2018/09/10/5b96647b9b6fc.png)

![9 Flow-2.png](https://i.loli.net/2018/09/10/5b9661cb98988.png)

## Mermaid 集成

> Typora also has integration with [mermaid](https://knsv.github.io/mermaid/#mermaid), which supports sequence, flowchart and Gantt.

Mermaid 是另一种更加方便的生成流程图、时序图的语法 ——「Generation of diagrams and flowcharts from text in a similar manner as markdown.」。其官方文档在这里 → [mermaid.js](https://mermaidjs.github.io/)。Typora 集成了 Mermaid 渲染引擎，我们可以直接用 Mermaid 语法画时序图、流程图和甘特图。🎉🎉🎉

这部分语法相对更加复杂，而本篇文章我已经写了近两千字了，因此我决定另起一篇文章进行介绍：包括 Mermaid 基础语法的介绍、甘特图 Gantt 的介绍和利用 Mermaid 绘制 Sequence, Flowchart 和 Gantt 这三种基本图像的方法。👌

感谢阅读。🍻

