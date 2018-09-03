(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{190:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口","aria-hidden":"true"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),a("p",[t._v("接口具有运行时的零影响。TypeScript 接口中有很多功能来声明变量的结构。")]),t._v(" "),a("p",[t._v("以下两个是等效声明, 第一个使用"),a("em",[t._v("内联注解")]),t._v("，第二个使用"),a("em",[t._v("接口")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Sample A")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myPoint"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" y"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Sample B")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Point")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  y"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myPoint"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Point"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("然而，"),a("em",[t._v("示例 B")]),t._v(" 的美妙之处在于，如果有人创建了一个基于 "),a("code",[t._v("myPoint")]),t._v(" 库构建的库来添加新成员, 他们可以轻松添加到 "),a("code",[t._v("myPoint")]),t._v(" 的现有声明中:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Lib a.d.ts")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Point")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  y"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myPoint"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Point\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Lib b.d.ts")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Point")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  z"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Your code")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myPoint"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z "),a("span",{attrs:{class:"token comment"}},[t._v("// Allowed!")]),t._v("\n")])])]),a("p",[t._v("这是因为 "),a("em",[t._v("TypeScript 中的接口是开放式的")]),t._v("，这是 TypeScript 的一个重要原则，它允许你使用"),a("em",[t._v("接口")]),t._v("模仿 JavaScript 的可扩展性。")]),t._v(" "),a("h2",{attrs:{id:"类可以实现接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类可以实现接口","aria-hidden":"true"}},[t._v("#")]),t._v(" 类可以实现接口")]),t._v(" "),a("p",[t._v("如果你希望在接口中使用必须遵循的类和别人给你定义的对象结构，可以使用 "),a("code",[t._v("implements")]),t._v(" 关键字来确保兼容性：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Point")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  y"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyPoint")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Point")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),t._v("，\n  y"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Same as Point")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("基本上在该 "),a("code",[t._v("implements(实现)")]),t._v(" 的存在下，该外部 "),a("code",[t._v("Point")]),t._v(" 接口的任何更改都将导致代码库中的编译错误，因此可以轻松地使其保持同步：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Point")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  y"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  z"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// New member")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyPoint")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Point")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ERROR : missing member `z`")]),t._v("\n  x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  y"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("注意，"),a("code",[t._v("implements")]),t._v(" 限制了类实例的结构，即:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Point "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyPoint")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("像 "),a("code",[t._v("foo: Point = MyPoint")]),t._v(" 这样并不是一回事。")]),t._v(" "),a("h2",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意","aria-hidden":"true"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),a("h3",{attrs:{id:"并非每个接口都是很容易实现的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并非每个接口都是很容易实现的","aria-hidden":"true"}},[t._v("#")]),t._v(" 并非每个接口都是很容易实现的")]),t._v(" "),a("p",[t._v("接口旨在声明 JavaScript 中可能存在的任意结构。")]),t._v(" "),a("p",[t._v("思考以下例子，其中可以使用 "),a("code",[t._v("new")]),t._v(" 调用某些内容：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Crazy")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    hello"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("你基本上会有这样的代码：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CrazyClass")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Crazy")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("constructor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hello"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Because")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" crazy "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CrazyClass")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// crazy would be { hello:123 }")]),t._v("\n")])])]),a("p",[t._v("你可以使用接口声明所有的 JavaScript，甚至可以安全地从 TypeScript 中使用它们。但并不意味着你可以使用 TypeScript 类来实现它们。")])])}],!1,null,null,null);s.default=e.exports}}]);