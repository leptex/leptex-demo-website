# Lucky Farm 幸运农场 · Redmond, WA

**一页网站,一个聊天入口。** 版面学 openai.com —— 居中的大问句、输入框、几个建议按钮;
画面是夜色山水。价格、地点、时间一律**不写在页面上**,全部由
[Leptex](https://leptex.com) 的助手在对话里回答。

线上:<https://luckyfarm.leptex.shop> · 问答页:`https://leptex.com/web/bu8nbabMeDZu`

没有构建步骤,没有依赖。一个 HTML、一份 CSS、两份 JS、六张手绘 SVG。

```bash
python3 -m http.server 8811
```

部署:GitHub Pages,从 `main` 分支根目录发布,`CNAME` 已在仓库里。

---

## 一、网站上「没有」什么 —— 这是故意的

| 不写在页面上 | 去哪儿问 |
| --- | --- |
| 价格 | 助手。页面上写明「价格随这一周、随那天早上摘了多少而动」 |
| 农场地址 | 助手 |
| 自取时间 | 助手 |
| 提前多久下单 / 付款方式 | 助手 |

页面只留**不会过期的东西**:种什么、什么时候熟、不打药、东西是自己种的。
所有会变的、需要因人而异的,都变成一个问句链接,把人送进对话。

这么做有三个好处:**信息不会过期**(网页改不过来,对话永远是今天的)、
**合规面收窄**(页面上不做价格和承诺,说错话的机会少)、**每一次好奇都变成一条线索**。

全站扫过一遍:没有任何美元金额、街道地址、营业时间、付款方式。
`assets/js/i18n.js` 也只打包页面真正引用的 89 个 key,旧的价格/地址文案**没有留在包里**。

### ⚠️ Leptex 后台那条回复规则必须跟着改

后台现在写的是:

> Do not discuss specific prices… **You may only mention that prices are available on the website.**

网站已经没有价格了。**这条规则不改,就会死循环** —— 客人问价 → 助手说「去网站看」→
网站说「问助手」→ 客人走人。

改成让助手直接报当天的价,或者「先问清楚要哪样、多少,再给报价并留邮箱」。
地址和自取时间同理:现在页面上没有了,助手必须能答,或者能收邮箱转人工。

---

## 二、Leptex 是怎么接的

Leptex 那一页是**整页**,不是挂件。所以这个站**只链过去,不嵌入** —— 没有 script、没有 key、不往外送访客数据。

| 参数 | 作用 |
| --- | --- |
| `?q=` | 预填访客的第一句话。**只是预填**,他还得自己按发送,发之前能改 |
| `&e=` | 标出链接所在的位置,用来看哪一块带来人、哪一块成单 |

一页网站,所以 `e` 标的是**版块**,不是页面。共 21 个链接 + 2 个输入框:

| `e` | 版块 | 数量 |
| --- | --- | --- |
| `home` | 首屏问句框 + 尾部问句框 | 6 |
| `seasons` | 本季六样 + 价格说明 | 7 |
| `farm` | 凭什么放心 | 2 |
| `ask` | 什么都可以问 | 6 |

这样后台能直接看出来:**是价格把人问进来的,还是"不打药"把人问进来的。**

### 输入框是个普通表单

```html
<form class="ask" data-ask action="https://leptex.com/web/bu8nbabMeDZu"
      method="get" target="_blank" rel="noopener">
  <input type="text" name="q" data-ask-input placeholder="…">
  <input type="hidden" name="e" value="home">
  <button type="submit">↑</button>
</form>
```

`q` 在前、`e` 在后,浏览器自己把任何语言的问句编码好。**JS 关掉也能用**。
`site.js` 只多做一件事:问句是空的就不带 `?q=`。

---

## 三、六种语言 · 两种模式

语言:English / 简体中文 / Español / 한국어 / Tiếng Việt / 日本語。按浏览器语言自动挑,
记在 `localStorage`。全部文案在 `assets/js/i18n.js`,HTML 里内联的是英文,
所以 JS 挂了还是一份完整的英文站。

| 属性 | 换什么 |
| --- | --- |
| `data-i18n="key"` | 元素里的文字 |
| `data-i18n-ph="key"` | 输入框 placeholder |
| `data-i18n-label="key"` | `aria-label` |
| `data-q="key"` | 链接里 `?q=` 的问句 —— 换语言时问句也跟着换 |

**加一门语言**:在 `i18n.js` 的 `langs` 里加一项,再给每个 key 补上那门语言。`site.js` 不用改。

明暗:**默认是夜**。右上角按钮切换,记在 `localStorage`。配色在 `site.css` 开头,
`:root` 是夜,`:root[data-theme="light"]` 是日。

---

## 四、上线前还要换什么

只剩一处了:**页脚的邮箱**(`hello@luckyfarm.leptex.shop`),在 `index.html` 里带 `class="edit"`。

换完把 `site.css` 最后那条 `.edit { … }` 规则删掉,虚线提示就没了。

---

## 五、「安全 / 有机」这类话怎么说才合规

页面只说**做法**和**出处**,不碰标签和健康承诺:

- ✅ 「卖的每一样都是我们自己在 Redmond 种的,不从别处进货再转手」—— 来源事实
- ✅ 「不打杀虫剂,也不打除草剂,任何季节都不打」—— **做法**陈述,真的就能说
- ✅ 「地垄就在你取袋子的地方旁边,走一圈」—— 邀请核实

刻意避开的三个词:

1. **Organic / 有机** —— USDA 管制,没认证不能当认证宣称
2. **Pesticide-free / 零农残** —— 这是对**产品残留**的断言。邻地飘移管不了,谁都保证不了
3. **完全安全 / 最安全** —— 生鲜本身有食品安全风险,证实不了,出事反成责任

页面上那句话把这个立场直接写明了:

> 我们不说「零农残」,也不说「有机认证」—— 那是标签上的话。
> 我们说的是做法:这块地不打药,你随时可以来看。

这三个词在全站**只出现在这一句否认它们的话里**,六种语言都核过。

> 通用营销合规常识,不是法律意见。要打认证标之前找 WSDA 或律师确认。

---

## 六、文件结构

```
index.html            整个网站
assets/css/site.css   全部样式(带章节目录,从「夜」到「动静」)
assets/js/i18n.js     89 个 key × 6 种语言
assets/js/site.js     明暗 / 语言 / 问句送出 / 页眉 / 浮章 / 滚动浮现
assets/img/           樱桃 · 蓝莓 · 山楂 · 红肉苹果 · 柿子 · 四季豆 + favicon
                      全是手写 SVG,明暗两种模式下都不用换
robots.txt  sitemap.xml  CNAME
```

标是**山水**两个字的意思:山在上,水在下 —— 不用汉字,哪种语言的客人都认得。
画永远裱在宣纸色的册页上(`.plate`),所以夜里像挂在暗墙上的画,一套图两种模式通用。

### 换一家店

1. 全局替换 `https://leptex.com/web/bu8nbabMeDZu` 为新的 Leptex 链接
2. `e=home / seasons / farm / ask` 按新版块起名
3. `i18n.js` 换文案(key 有规律:`c.*` 作物、`q.*` 问句、`l.*` 按钮、`p*.k/v` 承诺)
4. 换 `assets/img/` 里的 SVG,或直接放照片(`.plate img` 已是 `object-fit: contain`)
5. `site.css` 开头换 `--cinnabar`(朱砂)和 `--ground`(墨底)

---

MIT License · © 2026
