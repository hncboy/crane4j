(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{279:function(e,t,_){e.exports=_.p+"assets/img/image-20230220150040070.63150c20.png"},300:function(e,t,_){"use strict";_.r(t);var r=_(14),v=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("img",{attrs:{src:_(279),alt:"image-20230220150040070"}})]),e._v(" "),t("h2",{attrs:{id:"_1-1-为什么写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-为什么写"}},[e._v("#")]),e._v(" 1.1.为什么写？")]),e._v(" "),t("p",[t("code",[e._v("crane4j")]),e._v(" 的前身是 "),t("a",{attrs:{href:"https://github.com/Createsequence/crane",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("crane")]),t("OutboundLink")],1),e._v("，而 "),t("code",[e._v("crane")]),e._v(" 的前身来自在公司写的一个字段填充框架。当时恰好个人负责的业务有大量重复的字段填充的需求，这些字段跟核心业务无关，就是重复的关联查询，但是又无处不在，实在厌倦了联查和手动塞值的我，抽了点时间在项目里面加了一个基于 "),t("code",[e._v("MybatisPlus")]),e._v(" 自动查询并填充字段值的小插件。")]),e._v(" "),t("p",[e._v("随着时间的推移，这个插件的功能越来越丰富，又支持了枚举和常量转换，接着又是基于切面的自动填充......最后又独立成了一套框架，这就是 crane 的前身，至今仍然在生产环境中发光发热。")]),e._v(" "),t("p",[e._v("去年年前的时候，我抽时间重构了这个框架的代码，并且把它传到了 "),t("code",[e._v("Gitee")]),e._v("，这个项目就是 "),t("a",{attrs:{href:"https://github.com/Createsequence/crane",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("crane")]),t("OutboundLink")],1),e._v("。"),t("code",[e._v("crane")]),e._v(" 更新了大概半年多，功能渐渐稳定，不过早期设计不足导致扩展困难的问题也越来越明显。重新梳理的功能后，我决定基于 "),t("code",[e._v("crane")]),e._v(" 的功能和一些概念再进行一次彻底的重构，于是就有了现在的 "),t("code",[e._v("crane4j")]),e._v("。")]),e._v(" "),t("p",[e._v("相比起前辈 "),t("code",[e._v("crane")]),e._v("，"),t("code",[e._v("crane4j")]),e._v(" 的代码更健壮，设计更合理，功能更强大，使用更灵活。")]),e._v(" "),t("h2",{attrs:{id:"_1-2-它解决了什么问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-它解决了什么问题"}},[e._v("#")]),e._v(" 1.2.它解决了什么问题？")]),e._v(" "),t("p",[e._v("“根据 A 的 key 值拿到 B，再把 B 的属性映射到 A”，这就是 "),t("code",[e._v("crane4j")]),e._v(" 的核心功能。")]),e._v(" "),t("p",[e._v("一直以来，在日常开发中往往会遇到一些繁琐的数据组装工作，比如字典项、配置项、枚举常量，甚至是一些关联数据的查询。这些数据的来源五花八门，明明不涉及核心业务，但是为了处理它们又需要写大量样板代码，实在让人心烦。")]),e._v(" "),t("p",[t("code",[e._v("crane4j")]),e._v(" 旨在为了解决这种烦恼而生，它是一套基于注解的数据填充框架，仅需通过注解配置，即可优雅高效的完成不同数据源、不同类型、不同类型的字段数据填充，屏蔽繁琐的字段填充，专注于核心业务。")]),e._v(" "),t("h2",{attrs:{id:"_1-3-它有什么特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-它有什么特性"}},[e._v("#")]),e._v(" 1.3.它有什么特性？")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("多样的数据源支持")]),e._v("：支持将枚举、普通键值对缓存，甚至实例方法或静态方法作为数据源，也支持通过简单的自定义扩展兼容更多类型的数据源，并且对所有类型数据源都提供缓存支持；")]),e._v(" "),t("li",[t("strong",[e._v("强大的字段映射能力")]),e._v("：通过注解即可完成不同类型字段之间映射自动转换，支持模板、排序、分组、自动填充嵌套对象等等功能，除 JDK 原生反射外还支持更快的字节码调用；")]),e._v(" "),t("li",[t("strong",[e._v("高度的可扩展性")]),e._v("：所有主要组件均可由用户自由替换，配合 Spring 的依赖注入可实现轻松优雅的完成自定义扩展。")]),e._v(" "),t("li",[t("strong",[e._v("丰富的可选功能")]),e._v("：引入 Spring 后，还提供包括方法返回值与方法入参参数的自动填充，多线程填充，自定义符合注解以及表达式等可选功能；")])]),e._v(" "),t("p",[e._v("在后续，将会陆续完成包括 JSON 对象的字段动态填充/替换、基于 redis 的数据源缓存、基于 "),t("s",[e._v("Myabtis/MybatisPlus")]),e._v("（已完成）、JPA 等 ORM 框架的数据源自动适配等新功能。")]),e._v(" "),t("h2",{attrs:{id:"_1-4-如何使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-如何使用"}},[e._v("#")]),e._v(" 1.4.如何使用？")]),e._v(" "),t("p",[e._v("想要快速体验 "),t("code",[e._v("crane4j")]),e._v("，请阅读"),t("RouterLink",{attrs:{to:"/basic/2.快速开始.html"}},[e._v("快速开始")]),e._v("一节，如果想要进一步了解和使用 "),t("code",[e._v("crane4j")]),e._v("，可以按推荐顺序阅读：")],1),e._v(" "),t("ol",[t("li",[t("RouterLink",{attrs:{to:"/advance/2.装配操作.html"}},[e._v("装配操作")]),e._v("：如何声明并配置一个填充操作；")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/advance/4.拆卸操作.html"}},[e._v("拆卸操作")]),e._v("：如何处理嵌套对象的填充；")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/advance/3.字段映射.html"}},[e._v("字段映射")]),e._v("：如何配置数据源与目标对象之间的各种属性映射，以及多 "),t("code",[e._v("key")]),e._v(" 值填充；")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/advance/1.数据源容器.html"}},[e._v("数据源容器")]),e._v("：如何配置不同的数据源；")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/advance/5.手动&自动填充.html"}},[e._v("手动&自动填充")]),e._v("：如何手动或者自动的触发填充操作；")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/advance/6.分组过滤.html"}},[e._v("分组过滤")]),e._v("：如何在自动填充时只处理特定的属性；")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/advance/7.缓存.html"}},[e._v("缓存")]),e._v("：如何配置并启用缓存；")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/advance/8.操作执行器.html"}},[e._v("操作执行器")]),e._v("：如何启用多线程填充、顺序填充；")],1)]),e._v(" "),t("p",[e._v("源码中记录每个类都有对应的测试用例，如果仍然感觉不好理解，可以在把示例项目 "),t("code",[e._v("crane4j-example")]),e._v(" ("),t("a",{attrs:{href:"https://gitee.com/CreateSequence/crane4j-example",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gitee"),t("OutboundLink")],1),e._v(" / "),t("a",{attrs:{href:"https://github.com/Createsequence/crane4j-example",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),t("OutboundLink")],1),e._v(")  拉到本地，里面有针对某些比较复杂的功能的集成测试，可能会有助于理解和使用对应功能。")])])}),[],!1,null,null,null);t.default=v.exports}}]);