# 索引签名

可以用字符串来访问 JavaScript 中的对象（TypeScript 中也一样），以此来保存来自其他任何对象的引用。

这有一个快速开始的例子：

```ts
let foo: any = {};
foo['Hello'] = 'World';
console.log(foo['Hello']); // World
```

我们在键 `Hello` 下保存了一个字符串 `World`，记住我们提到过它可以保存任意的 JavaScript 对象，理所当然，它也能保存一个类的实例。

```ts
class Foo {
  constructor(public message: string) {}
  log() {
    console.log(this.message);
  }
}

let foo: any = {};
foo['Hello'] = new Foo('World');
foo['Hello'].log(); // World
```

同样的，我们说过它能被一个字符串反问。当你传进一个其他对象至索引签名，JavaScript 在运行时得到结果之前会先调用 `.toString`：

```ts
let obj = {
  toString() {
    console.log('toString called');
    return 'Hello';
  }
};

let foo: any = {};
foo[obj] = 'World'; // toString called
console.log(foo[obj]); // toString called, World
console.log(foo['Hello']); // World
```

::: tip
只要索引位置使用了 `obj`，`toString` 都将会被调用。
:::

数组有点稍微不同，对于一个 `number` 类型的索引签名，JavaScript 引擎将会尝试去优化（这取决于它是否是一个真的数组、存储的项目结构是否匹配等）。因此，`number` 应该被考虑作为一个有效的对象访问器（这与 `string` 不同），如下例子：

```ts
let foo = ['World'];
console.log(foo[0]); // World
```

因此，这就是 JavaScript。现在让我们看看 JavaScript 对这些概念更优雅的处理。

## TypeScript 索引签名

首先，由于 JavaScript 在一个对象类型的索引签名上会隐式的调用 `toString` 方法，TypeScript 将会抛出一个错误，防止初学者砸伤自己的脚（我总是看到 `stackoverflow` 上有很多 JavaScript 使用者都会这样。）

```ts
const obj = {
  toString() {
    return 'Hello';
  }
};

const foo: any = {};

// ERROR: 索引签名必须为 string, number....
foo[obj] = 'World';

// FIX: TypeScript 强制你必须明确这么做：
foo[obj.toString()] = 'World';
```

强制用户必须明确的写出的原因是：在对象上默认执行的 `toString` 方法是非常有害的。例如 v8 引擎上总是会返回 `[object Object]`

```ts
const obj = { message: 'Hello' };
let foo: any = {};

// ERROR: 索引签名必须为 string, number....
foo[obj] = 'World';

// 这里实际上就是你存储的地方
console.log(foo['[object Object]']); // World
```

当然，数字类型是被允许的，因为

- 这需要数组／元组的支持；
- 即使你在数组里使用一个 `obj`，这个默认被调用的 `toString` 方法，被实现的很好（不是 `[object Object]`）。

如下所示：

```ts
console.log((1).toString()); // 1
console.log((2).toString()); // 2
```

因此，我们有以下结论：

::: tip
TypeScript 的索引签名必须是 `string` 或者 `number`。

`symbols` 也是有效的，TypeScript 支持它。在接下来我们将会讲解它。
:::

## 声明一个索引签名

在上文中，我们通过使用 `any` 来让 TypeScript 允许我们可以做任意我们想做的事情。实际上，我们可以明确的指定索引签名。例如：假设你想确认存储在对象中任何内容都符合 `{ message: string }` 的结构，你可以通过 `[index: string]: { message: string }` 来实现。

```ts
const foo: {
  [index: string]: { message: string };
} = {};

// 储存的东西必须符合结构
// ok
foo['a'] = { message: 'some message' };

// Error, 必须包含 `message`
foo['a'] = { messages: 'some message' };

// 读取时，也会有类型检查
// ok
foo['a'].message;

// Error: messages 不存在
foo['a'].messages;
```

::: tip
索引签名的名称（如：`{ [index: string]: { message: string } }` 里的 `index` ）除了可读性外，并没有任何意义。例如：如果有一个用户名，你可以使用 `{ username: string}: { message: string }` 来帮助下一位使用此代码的开发人员（这可能会是你）。
:::

`number` 类型的索引也支持：`{ [count: number]: 'SomeOtherTypeYouWantToStoreEgRebate' }`。

## 所有成员都必须符合字符串的索引签名

一旦你拥有了一个索引签名，所有明确的成员都必须符合索引签名：

```ts
// ok
interface Foo {
  [key: string]: number;
  x: number;
  y: number;
}

// Error
interface Bar {
  [key: string]: number;
  x: number;
  y: string; // Error: y 属性必须为 number 类型
}
```

这可以给你提供安全性，任何以字符串的访问都能得到相同结果。

```ts
interface Foo {
  [key: string]: number;
  x: number;
}

let foo: Foo = {
  x: 1,
  y: 2
};

// 直接
foo['x']; // number

// 间接
const x = 'x';
foo[x]; // number
```

## 使用一组有限的字符串字面量

一个索引签名可以通过映射类型来使索引字符串为联合类型中的一员，如下所示：

```ts
type Index = 'a' | 'b' | 'c';
type FromIndex = { [k in Index]?: number };

const good: FromIndex = { b: 1, c: 2 };

// Error:
// `{ b: 1, c: 2, d: 3 }` 不能分配给 'FromIndex'
// 对象字面量只能指定已知类型，'d' 不存在 'FromIndex' 类型上
const bad: FromIndex = { b: 1, c: 2, d: 3 };
```

这通常与 `keyof/typeof` 一起使用，来获取变量的类型，如下一章节所示。

变量的规则一般可以延迟被推断：

```ts
type FromSomeIndex<K extends string> = { [key in K]: number };
```

## 同时拥有 `string` 和 `number` 类型的索引签名

这并不是一个常见的用例，但是 TypeScript 支持它。

然后，`string` 类型的索引签名比 `number` 类型的索引签名更严格。这是故意设计如此，它允许你有如下类型：

```ts
interface ArrStr {
  [key: string]: string | number; // 必须包括所用成员类型
  [index: number]: string; // 字符串索引类型的子级

  // example
  length: number;
}
```

## 设计模式：索引签名的嵌套

::: tip
添加索引签名时，需要考虑的 API。
:::

在 JavaScript 社区你将会见到很多滥用索引签名的 API。如 JavaScript 库中使用 CSS 的常见模式：

```ts
interface NestedCSS {
  color?: string;
  [selector: string]: string | NestedCSS;
}

const example: NestedCSS = {
  color: 'red',
  '.subclass': {
    color: 'blue'
  }
};
```

尽量不要使用这种把字符串索引签名与有效变量混合使用。如果属性名称中有拼写错误，这个错误不会被捕获到：

```ts
const failsSilently: NestedCSS = {
  colour: 'red' // 'colour' 不会被捕捉到错误
};
```

取而代之，我们把索引签名分离到自己的属性里，如命名为 `next`（或者 `children`、`subnodes` 等）：

```ts
interface NestedCSS {
  color?: string;
  nest?: {
    [selector: string]: NestedCSS;
  };
}

const example: NestedCSS = {
  color: 'red',
  nest: {
    '.subclass': {
      color: 'blue'
    }
  }
}

const failsSliently: NestedCSS {
  colour: 'red'  // TS Error: 未知属性 'colour'
}
```

## 索引签名中排出某些属性

有些时候，你需要把属性合并至索引签名里。我们并不建议这么做，你应该使用上文中提到的嵌套索引签名的形式。

然而，如果你想在现有的 TypeScript 上使用索引签名，你可以使用交集类型来解决一些问题。在以下代码中，如果不使用交叉类型，你将会收到一个报错提示：

```ts
type FieldState = {
  value: string;
};

type FromState = {
  isValid: boolean; // Error: 不符合索引签名
  [filedName: string]: FieldState;
};
```

使用交叉类型可以解决上述问题：

```ts
type FieldState = {
  value: string;
};

type FormState = { isValid: boolean } & { [fieldName: string]: FieldState };
```

请注意尽管你可以声明它至一个已存在的 TypeScript 模型上，你也不可以通过 TypeScript 创建如下的对象：

```ts
type FieldState = {
  value: string;
};

type FormState = { isValid: boolean } & { [fieldName: string]: FieldState };

// 将它用于从某些地方获取的 JavaScript 对象
declare const foo: FormState;

const isValidBool = foo.isValid;
const somethingFieldState = foo['something'];

// 使用它来创建一个对象时，将不会工作
const bar: FormState = {
  // 'isValid' 不能赋值给 'FieldState'
  isValid: false
};
```
