# Lucky Farm 幸运农场 · Redmond, WA

一个**以买为主、以问收尾**的静态官网。版面学 openai.com —— 居中的大问句、输入框、三个建议按钮;
画面是**夜色山水**:墨底、远山、雾、一枚朱砂印。问答由 [Leptex](https://leptex.com) 那一页承接。

- 线上地址:`https://luckyfarm.leptex.shop`
- 问答页:`https://leptex.com/web/bu8nbabMeDZu`
- 农场:华盛顿州 Redmond,**不打农药**,**只做本地自取,不发货**

没有构建步骤,没有依赖,没有 npm。四个 HTML、一份 CSS、两份 JS、六张手绘 SVG,就是全部。

```bash
python3 -m http.server 8811
```

部署到任何静态托管都行。仓库里的 `CNAME` 写的是 `luckyfarm.leptex.shop`,用 GitHub Pages 直接生效,
换别的平台删掉它就行。

---

## 一、两种模式:夜 与 日

**默认是夜**(黑色山水)。右上角那枚按钮切换,选择记在 `localStorage`,下次进来还是上次那个。

配色全在 `site.css` 开头:`:root` 是夜,`:root[data-theme="light"]` 是日。两套用的是同一批变量名,
所以改一个地方,两套一起跟着走。

想让首次访问跟随系统、而不是一律进夜里,把每页 `<head>` 里那句改成:

```js
var t=localStorage.getItem('lf.theme');
document.documentElement.setAttribute('data-theme',
  t || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
```

> 画放在**纸上**。六张水墨图在夜里也裱在宣纸色的册页里(`.plate`),像挂在暗墙上的画 ——
> 这样一套图在明暗两种模式下都不用改颜色。

---

## 二、六种语言

页眉的地球图标。首次访问按浏览器语言自动挑,之后记在 `localStorage`。

| | | | | | |
|---|---|---|---|---|---|
| English | 简体中文 | Español | 한국어 | Tiếng Việt | 日本語 |

**全部文案在 `assets/js/i18n.js`** —— 224 个 key × 6 种语言 = 1344 条。HTML 里写的是英文原文,
JS 按语言替换。所以 JS 挂了,页面还是一份完整的英文站。

标记方式:

| 属性 | 换什么 |
| --- | --- |
| `data-i18n="key"` | 元素里的文字 |
| `data-i18n-ph="key"` | 输入框的 placeholder |
| `data-i18n-label="key"` | `aria-label` |
| `data-q="key"` | 链接里 `?q=` 的问句 —— 换语言时问句也跟着换 |

**加一门语言**:在 `i18n.js` 的 `langs` 里加一项(`code` / `name` / `tag`),再给 224 个 key 补上那门语言。
`site.js` 不用改。

---

## 三、Leptex 是怎么接的

Leptex 那一页是**整页**,不是挂件。所以这个站**只链过去,不嵌入** —— 没有 script、没有 key、不往外送访客数据。

| 参数 | 作用 |
| --- | --- |
| `?q=` | 预填访客的第一句话。**只是预填**,他还得自己按发送,发之前能改 |
| `&e=` | 标出链接所在的页面,用来看哪一页带来人、哪一页成单 |

每页只用一个 `e`,后台一眼分得清:

| 页面 | `e` | 入口数 |
| --- | --- | --- |
| `index.html` | `home` | 15 个链接 + 2 个输入框 |
| `produce.html` | `produce` | 22 个链接 + 2 个输入框 |
| `pickup.html` | `pickup` | 11 个链接 + 2 个输入框 |
| `about.html` | `about` | 11 个链接 + 2 个输入框 |

### 输入框是个普通表单

首页那个大框不是聊天框,是一个 `<form method="get">`,直接指向 Leptex:

```html
<form class="ask" data-ask action="https://leptex.com/web/bu8nbabMeDZu"
      method="get" target="_blank" rel="noopener">
  <input type="text" name="q" data-ask-input placeholder="…">
  <input type="hidden" name="e" value="home">
  <button type="submit">↑</button>
</form>
```

`q` 在前、`e` 在后,浏览器自己会把任何语言的问句编码好,拼出 `?q=…&e=home`。
**JS 关掉也能用** —— 这是故意的。`site.js` 只多做一件事:问句是空的就不带 `?q=`。

### 加一个问句入口

```html
<a class="pill" href="https://leptex.com/web/bu8nbabMeDZu?q=<英文问句URL编码>&amp;e=home"
   target="_blank" rel="noopener" data-q="q.你的key">
  <span class="pill__dot"></span><span data-i18n="l.你的key">按钮文字</span>
</a>
```

href 里放英文(给不开 JS 的人兜底),六种语言的版本放进 `i18n.js`。
注意:HTML 里 `&` 要写 `&amp;`;问句里别放 `&` 和 `#`。

---

## 四、上线前必须替换的内容

页面上所有**示例内容**都带一条虚线(鼠标停上去提示 "Sample content — replace"),
源码里是 `class="edit"`,旁边有 `<!-- 改这里 -->`。搜 `edit` 全能找到。

| 要改什么 | 在哪 | 现在写的 |
| --- | --- | --- |
| 九样作物的价格和分量 | `index.html`、`produce.html`,以及 `i18n.js` 里的 `c.*.unit` | `$6`–`$12` |
| **时令表的月份** | `produce.html` 的 `<table class="almanac">`,以及 `i18n.js` 里的 `c.*.when` | 按太平洋西北的常规写的,**必须按你自己的地核对** |
| 农场地址 | `index.html`、`pickup.html` | `0000 Redmond Ridge Rd NE, Redmond, WA` |
| 自取时间 / 提前量 / 付款 | 同上,以及 `i18n.js` 里的 `f.when.v` `f.notice.v` `f.pay.v` | 周六日 09:00–13:00 等 |
| 邮箱 | 四页页脚 | `hello@luckyfarm.leptex.shop` |
| 域名 | 各页 `canonical` / `og:url`、`sitemap.xml`、`CNAME` | `luckyfarm.leptex.shop` |

**价格一定要填真的。** Leptex 后台的回复规则写了「不谈具体价格,只说价格在网站上」——
助手会把客人指回这个网站。网站上没有价格,这条链路就断了。

改完把 `site.css` 最后那条 `.edit { … }` 规则删掉,虚线就没了。

### 关于「安全」这件事怎么说才合规

你要传达的是:**东西是自己本地种的、不打农药、放心**。这三件事里,只有前两件可以直接说。

**可以说的(陈述做法和出处,能验证):**

| 站上写的 | 为什么站得住 |
| --- | --- |
| 「卖的每一样都是我们自己在 Redmond 种的,不从别处进货再转手」 | 关于来源的事实,你自己说了算 |
| 「不打杀虫剂,也不打除草剂,任何季节都不打」 | 关于**做法**的陈述,真的就能说 |
| 「地垄就在你取袋子的地方旁边,走一圈,问问地里放了什么」 | 邀请人来核实,比任何形容词都有力 |

**不能说的(三个坑,站上一个都没踩):**

1. **Organic / 有机** —— USDA 管制用语。没认证不能拿它当认证宣称。
   (年销售额 5,000 美元以下的小农场有豁免,但仍然不能打 USDA Organic 标。)
2. **Pesticide-free / 零农残 / 无农药残留** —— 这是对**产品残留**的断言,不是对做法的。
   隔壁地飘过来一点你也管不了,所以这句话谁都保证不了。
   站上写的是「我们不打药」(做法),不是「果子上没有农药」(结果)。
3. **完全安全 / 最安全 / 比超市的安全** —— 生鲜本身就有食品安全风险(大肠杆菌之类),
   「绝对安全」既证实不了,出事还会反过来变成你的责任。
   而且拿自己和别人比安全,属于贬低同行,FTC 会管。

站上的做法是:**把「安全」换成「说得清」**。首页那一节叫「凭什么放心 / 每一袋,都说得出是哪一垄」,
底下明写着:

> 我们不说「零农残」,也不说「有机认证」—— 那是标签上的话。
> 我们说的是做法:这块地不打药,你随时可以来看。

这句话比「我们的菜绝对安全」可信得多,也不给自己留把柄。农场页「不做的四件事」里
**不打药排第一**,后面还接了一句问答入口「那虫子怎么办?」—— 让助手用你自己的话去解释。

真拿到 USDA Organic 认证了,把 `i18n.js` 里的 `sure.note` 和 `t1.k` / `t1.v` 换成认证说法就行,
其余不用动。

> 这些是通用的营销合规常识,不是法律意见。要打认证标或做健康宣称之前,找华盛顿州农业厅
> (WSDA)或律师确认一次。

## 五、文件结构

```
index.html      首页 —— 今天想买点什么 + 四样当季 + 自取三步 + 农场 + 常问
produce.html    时令 —— 六样各一段(带画),加一张九样的时令表
pickup.html     自取 —— 三步、地址时间、到场之后
about.html      农场 —— 为什么做小、不做的四件事
assets/css/site.css   全部样式(带章节目录,从「夜」到「动静」)
assets/js/i18n.js     224 个 key × 6 种语言的全部文案
assets/js/site.js     明暗 / 语言 / 问句送出 / 页眉 / 浮章 / 滚动浮现
assets/img/           樱桃 · 蓝莓 · 山楂 · 红肉苹果 · 柿子 · 四季豆 + favicon
                      全是手写 SVG,没有位图,明暗两种模式下都不用换
robots.txt  sitemap.xml  CNAME
```

标是**山水**两个字的意思:山在上,水在下 —— 不用汉字,哪种语言的客人都认得。

---

## 六、换一家店怎么用

1. 全局替换 `https://leptex.com/web/bu8nbabMeDZu` 为新的 Leptex 链接。
2. `e=home / produce / pickup / about` 按新页面重新起名(短一点,像 `pricing`、`contact`)。
3. `i18n.js` 里换文案。key 的命名是有规律的:`c.*` 作物、`q.*` 问句、`l.*` 按钮文字、`f.*` 事实条。
4. 换 `assets/img/` 里的 SVG,或者直接放照片(`.plate img` 已经是 `object-fit: contain`)。
5. 按第四节把示例内容换成真的。
6. `site.css` 开头换 `--cinnabar`(朱砂)和 `--ground`(墨底),整站气质就跟着变。

---

MIT License · © 2026
