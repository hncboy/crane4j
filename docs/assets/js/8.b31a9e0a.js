(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{275:function(s,t,a){s.exports=a.p+"assets/img/image-20230220150040070.63150c20.png"},322:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"什么是-crane4j"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-crane4j"}},[s._v("#")]),s._v(" 什么是 crane4j？")]),s._v(" "),t("p",[t("img",{attrs:{src:a(275),alt:""}})]),s._v(" "),t("p",[t("strong",[s._v("crane4j 是一个基于注解的，用于完成一切 “根据 A 的 key 值拿到 B，再把 B 的属性映射到 A” 这类需求的字段填充框架。")])]),s._v(" "),t("p",[s._v("最初，我在公司开发中遇到了大量重复的字段填充需求，这些需求与核心业务无关，只是一些重复的关联查询操作。我厌倦了频繁的联查和手动赋值，于是花了时间写一个小插件，用于自动查询接口并填充字段值。")]),s._v(" "),t("p",[s._v("随着时间推移，这个插件功能逐渐丰富，我还加入了对枚举和常量的转换支持，并实现了基于切面的自动填充功能。最终，这个插件发展成了一个独立的内部框架，并在生产环境中广泛使用。")]),s._v(" "),t("p",[s._v("在 2022 年初，我对这个内部框架进行了重构，并将其上传到 "),t("code",[s._v("Gitee")]),s._v("，它就是 "),t("a",{attrs:{href:"https://github.com/Createsequence/crane",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("crane")]),t("OutboundLink")],1),s._v("。经过半年多的更新，"),t("code",[s._v("crane")]),s._v(" 的功能逐渐稳定，但早期设计的不足导致扩展困难。因此，我重新梳理了功能，并决定在保留 "),t("code",[s._v("crane")]),s._v(" 功能和概念的基础上进行彻底的重构，这就是现在的 "),t("code",[s._v("crane4j")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"_1-什么是字段填充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是字段填充"}},[s._v("#")]),s._v(" 1.什么是字段填充？")]),s._v(" "),t("p",[s._v("在日常开发中，从缓存或 DB 中查到的数据一般不直接具备所有字段，因此我们往往需要通过外键从各种数据源中 —— 比如 RPC 接口、枚举、字典或者 DB —— "),t("strong",[s._v("根据外检查询出各种关联信息")]),s._v("，并将其部分字段填充到最终返回的对象上，这种行为实际上就是"),t("strong",[s._v("字段填充")]),s._v("，或者也可以叫做数据组装或者数据聚合。")]),s._v(" "),t("p",[s._v("我们以一个典型的“将字典编码转为字典值”为例：")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("listPerson")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" ids"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1、根据 id 查询 person 数据")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Preson")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" persions "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" personMapper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("listByIds")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ids"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2、将性别枚举按编码分组")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// {key = 0, value = GenderEnum.FEMALE}, {key = 1, value = GenderEnum.MALE}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Map")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GenderEnum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" genderMap "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Stream")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("of")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GenderEnum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("collect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Collectors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("toMap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GenderEnum")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getCode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" e "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3、根据 person 对象中的性别编码，为其设置对应的性别值")]),s._v("\n    persions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("person "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" genderCode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" person"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getGenderCode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GenderEnum")]),s._v(" gender "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" genderMap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("genderCode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        person"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setGenderName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gender"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[t("code",[s._v("listPerson")]),s._v(" 接口中的第 2、3 步就是非常典型的数据填充操作。")]),s._v(" "),t("h2",{attrs:{id:"_2-用-crane4j-怎么做"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-用-crane4j-怎么做"}},[s._v("#")]),s._v(" 2.用 crane4j 怎么做？")]),s._v(" "),t("p",[s._v("当引入 crane4j 后，我们可以通过相对简洁的注解描述上述操作，并将此逻辑从主业务流程中剥离，以便让开发者更加集中于核心业务逻辑的开发：")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@AutoOperate")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("listPerson")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" ids"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" personMapper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("listByIds")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ids"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Data")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@AssembleEnum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GenderEnum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" enumKey "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"code"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定枚举类，并按字典值分组")]),s._v("\n        props "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Mapping")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("src "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ref "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"genderName"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将枚举的 name 映射到 foo 的 genderName 属性")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" genderCode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" genderName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("等到方法调用后，crane4j 将会自动的完成填充，效果与执行之前的代码完全一致。")]),s._v(" "),t("h2",{attrs:{id:"_3-为什么需要-crane4j"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-为什么需要-crane4j"}},[s._v("#")]),s._v(" 3.为什么需要 crane4j？")]),s._v(" "),t("p",[t("strong",[s._v("字段填充是一个广泛存在的需求，而 crane4j 则是针对它的一套完善的解决方案。")])]),s._v(" "),t("p",[s._v("crane4j 有着详细的注释和文档，完善的测试用例，灵活而直观的 API，通过引入 crane4j，你可以在避免“重复造轮子”的前提下，通过更少的代码搞定各种数据填充的需求。并且，你还可以通过 crane4j 处理比示例更复杂的各种情况，包括且不限于下述场景：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("同时存在的复数操作")]),s._v("：可能同时有多种类型的数据需要填充，比如各种详情页中，我们可能需要填充大量的关联数据；")]),s._v(" "),t("li",[t("strong",[s._v("复杂的数据结构")]),s._v("：填充的对象可能是一个嵌套的树形结构，需要递归的填充嵌套的数据；")]),s._v(" "),t("li",[t("strong",[s._v("繁多的数据源")]),s._v("：填充的数据源可能多种多样，比如有的通过 RPC 接口获取，有的通过 ORM 框架获取，有的则从本地缓存中获取；")]),s._v(" "),t("li",[t("strong",[s._v("可选的字段填充")]),s._v("：相同的数据源在不同的场景下填充的字段可能不同，比如同样是用户查询接口，当对外展示时则需要屏蔽一些敏感信息，比如身份证号、权限等级等等；")]),s._v(" "),t("li",[t("strong",[s._v("异步填充")]),s._v("：出于效率考虑，在数据源需要通过频繁的网络 IO 查询时，我们可能会希望异步的完成数据填充；")])]),s._v(" "),t("p",[s._v("你所面临的场景越多样化，那么 crane4j 就可能能够带给你越多的便利。")]),s._v(" "),t("h2",{attrs:{id:"_4-如何开始使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-如何开始使用"}},[s._v("#")]),s._v(" 4.如何开始使用？")]),s._v(" "),t("p",[s._v("如果你是第一次接触此类框架的新用户，那么推荐你先阅读 “"),t("strong",[s._v("基本概念")]),s._v("” 建立对框架的初步认知，然后跟着 “"),t("strong",[s._v("快速开始")]),s._v("” 一节尝试在本地编写一个可运行的最小示例，最后再根据情况继续阅读 “"),t("strong",[s._v("场景示例")]),s._v("” 或其他内容。")]),s._v(" "),t("p",[s._v("如果你已经使用过类似的框架，你可以直接阅读 “"),t("strong",[s._v("快速开始")]),s._v("”，然后根据需要阅读后续的 “"),t("strong",[s._v("场景示例")]),s._v("” 即可。")])])}),[],!1,null,null,null);t.default=e.exports}}]);