(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{277:function(e,v,o){e.exports=o.p+"assets/img/image-20230311184930927.146859c8.png"},297:function(e,v,o){"use strict";o.r(v);var r=o(14),_=Object(r.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"_9-0-概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-0-概述"}},[e._v("#")]),e._v(" 9.0 概述")]),e._v(" "),v("p",[v("img",{attrs:{src:o(277),alt:"image-20230311184930927"}})]),e._v(" "),v("p",[e._v("容器提供者 "),v("code",[e._v("ContainerProvider")]),e._v(" 是用于隔离数据源，并且对数据源获取途径进行增强的组件，它可以简单的理解为数据源容器的容器，比如 "),v("code",[e._v("Crane4j")]),e._v(" 的全局配置类 "),v("code",[e._v("Crane4jGlobalConfiguration")]),e._v(" 本身就是一个 "),v("code",[e._v("ContainerProvider")]),e._v("。")]),e._v(" "),v("p",[e._v("当解析器解析配置得到用户指定的 "),v("code",[e._v("namespace")]),e._v(" 时，会：")]),e._v(" "),v("ul",[v("li",[e._v("先从全局配置类/上下文找到指定的 "),v("code",[e._v("ContainerProvider")]),e._v("；")]),e._v(" "),v("li",[e._v("若有必要，"),v("code",[e._v("ContainerProvider")]),e._v(" 先对 "),v("code",[e._v("namespace")]),e._v(" 进行解析（比如表达式或者方法调用）；")]),e._v(" "),v("li",[v("code",[e._v("ContainerProvider")]),e._v(" 使用解析后的 "),v("code",[e._v("namespace")]),e._v(" 寻找已注册的容器；")])]),e._v(" "),v("p",[e._v("不同的数据源将会根据其所属的 "),v("code",[e._v("ContainerProvider")]),e._v(" 彼此隔离，第三方的框架接入时只需提供自己的 "),v("code",[e._v("ContainerProvider")]),e._v(" 即可，不必担心影响其他的数据源。比如，项目中可能有多个数据源，这种情况下同样用于提供用户信息的容器 "),v("code",[e._v("userContainer")]),e._v(" ，可能就需要同时存在两个，并且指向不同的数据源，此时即可根据 "),v("code",[e._v("ContainerProvider")]),e._v(" 进行区分。")])])}),[],!1,null,null,null);v.default=_.exports}}]);