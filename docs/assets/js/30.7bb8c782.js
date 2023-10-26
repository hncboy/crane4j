(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{302:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"填充嵌套对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#填充嵌套对象"}},[s._v("#")]),s._v(" 填充嵌套对象")]),s._v(" "),a("p",[s._v("在某些情况下，我们需要填充的对象中可能嵌套了其他对象，这种情况下，我们需要先将这些嵌套对象拆分出来，然后再进行填充操作。这个将嵌套对象取出并展开的操作称为"),a("strong",[s._v("拆卸操作")]),s._v("。")]),s._v(" "),a("p",[s._v("嵌套对象可能存在多层级的情况，因此在执行填充操作之前，我们需要先完成拆卸操作，将所有的嵌套对象展开，然后再统一进行装配。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiajibagao.top/image-20230220182831112.png",alt:"DissembleOperation"}})]),s._v(" "),a("h2",{attrs:{id:"_1-声明拆卸操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-声明拆卸操作"}},[s._v("#")]),s._v(" 1.声明拆卸操作")]),s._v(" "),a("p",[s._v("拆卸操作支持处理数组、集合 ("),a("code",[s._v("Collection")]),s._v(") 或单个对象。此外，与装配操作一样，拆卸操作同样支持在类或属性上声明。")]),s._v(" "),a("h3",{attrs:{id:"_1-1-在属性上声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-在属性上声明"}},[s._v("#")]),s._v(" 1.1.在属性上声明")]),s._v(" "),a("p",[s._v("我们可以直接在需要进行拆卸操作的属性上使用 "),a("code",[s._v("@Disassemble")]),s._v(" 注解进行声明：")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Department")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Disassemble")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Employee")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Employee")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" employees"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("在上面的示例中，对于填充 "),a("code",[s._v("Department")]),s._v(" 对象之前，会先将 "),a("code",[s._v("Department")]),s._v(" 中的所有 "),a("code",[s._v("Employee")]),s._v(" 对象取出并展开。如果 "),a("code",[s._v("Employee")]),s._v(" 对象中还存在需要拆卸的嵌套对象，也会一并取出并展开，一直递归下去，直到所有的对象都被展开为止。")]),s._v(" "),a("h3",{attrs:{id:"_1-2-在类上声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-在类上声明"}},[s._v("#")]),s._v(" 1.2.在类上声明")]),s._v(" "),a("p",[s._v("我们也可以将 "),a("code",[s._v("@Disassemble")]),s._v(" 注解声明在类上，此时你需要使用 "),a("code",[s._v("key")]),s._v(" 属性显式指定需要拆卸的字段：")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 直接声明")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Disassemble")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"employees"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Employee")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Department")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Employee")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" employees"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"_1-3-递归拆卸"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-递归拆卸"}},[s._v("#")]),s._v(" 1.3.递归拆卸")]),s._v(" "),a("p",[s._v("一般情况下，拆卸操作是递归完成的。也就是说，无论你嵌套了多少层，在开始装配前，都会全部取出并摊平：")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Department")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Disassemble")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Department")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 递归填充下级部门")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Department")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" departments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("注意，你需要自己避免循环引用，否则会栈溢出。")])]),s._v(" "),a("h2",{attrs:{id:"_2-自动推断类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-自动推断类型"}},[s._v("#")]),s._v(" 2.自动推断类型")]),s._v(" "),a("p",[s._v("在某些情况下，无法在编译期确定要填充的对象类型。此时，可以不指定 "),a("code",[s._v("type")]),s._v(" 属性，而是在执行拆卸操作时动态推断类型：")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Department")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Disassemble")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 无法确定填充类型")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" employees"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("上述示例中，无法在编译期确定 "),a("code",[s._v("employees")]),s._v(" 属性的类型，因此没有指定 "),a("code",[s._v("type")]),s._v(" 属性。在执行拆卸操作时，会动态推断 "),a("code",[s._v("employees")]),s._v(" 属性的类型。")]),s._v(" "),a("p",[s._v("这个功能是通过类型解析器 "),a("code",[s._v("TypeResolver")]),s._v(" 实现，你也可以提供自己的实现类来替换默认的类型解析器。")]),s._v(" "),a("h2",{attrs:{id:"_3-拆卸操作处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-拆卸操作处理器"}},[s._v("#")]),s._v(" 3.拆卸操作处理器")]),s._v(" "),a("p",[s._v("与装配操作类似，拆卸操作也依赖于拆卸操作处理器 "),a("code",[s._v("DisassembleOperationHandler")]),s._v(" 来完成。用户可以在注解中使用 "),a("code",[s._v("handler")]),s._v(" 或 "),a("code",[s._v("handlerType")]),s._v(" 属性来指定要使用的处理器。")]),s._v(" "),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Department")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Disassemble")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Employee")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        handlerType "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ReflectiveDisassembleOperationHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定操作处理器")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Employee")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" employees"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("在配置解析过程中，会根据指定的类型和处理器类型获取对应的操作处理器。")]),s._v(" "),a("p",[s._v("用户可以根据自己的需求，实现自定义的拆卸操作处理器，并通过 "),a("code",[s._v("handler")]),s._v(" 或 "),a("code",[s._v("handlerType")]),s._v(" 属性进行指定。目前默认的，也是唯一的拆卸操作处理就是 "),a("code",[s._v("ReflectiveDisassembleOperationHandler")]),s._v("。")])])}),[],!1,null,null,null);a.default=n.exports}}]);