# 12 - 文档对象模型（DOM）

> DOM（Document Object Model），是浏览器提供给JavaScript操控HTML网页的接口，可以理解为是HTML文档的JavaScript形态
>
> 根据DOM会将HTML转换成一系列的节点，呈树状结构（DOM Tree），我们能够通过DOM提供的各种API来实现对HTML文档的，增，删，查，改等各种操作

## 12.01 - DOM 的结构

### DOM 树结构图

![](data:image/jpeg;base64,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)



### 节点（Node）

> 节点是DOM 中最基本的单位，像一颗树中的每根树枝。通过节点与节点之间的关系可以分为：
>
> 1. 父节点 2. 子节点 3. 兄弟节点
>
> 而 document 对象中包含了所有的节点代表了整个DOM树的最上层，其下只有一个根节点<html>（rootnode）和一个文档类型节点<!doctype html>（DocumentType）

- **节点的类型**

  > 节点的类别可以通过 node.nodeType 属性得知其返回值对应如下的节点

  - 元素节点（element）：1
  - 属性节点（attr）：2
  - 文本节点（text）：3
  - 注释节点（Comment）：8
  - 文档节点（document）：9
  - 文档类型节点（DocumentType）：10
  - 文档片段节点（DocumentFragment）：11

## 12.02 - DOM相关

### 文档结构的加载顺序

解析HTML结构 ==> 加载外部的样式和脚本文件 ==> 解析并执行脚本代码 ==> 构键HTML DOM模型（触发DOMContentLoaded事件） ==> 加载图片等外部文件 ==> 界面加载完毕（触发load事件）

## 12.03 - Node的属性与方法

> 所有的节点都有一些属性和方法有的是共同有的是单独的，我们可以通过这些属性和方法进行对DOM的一系列操作

### 属性

- **nodeType**：节点的类型，返回一个整数
- **nodeName**：节点的名称
  - 文档节点（document）：`#document`
  - 元素节点（element）：大写的标签名
  - 属性节点（attr）：属性的名称
  - 文本节点（text）：`#text`
  - 文档片断节点（DocumentFragment）：`#document-fragment`
  - 文档类型节点（DocumentType）：文档的类型
  - 注释节点（Comment）：`#comment`
- **nodeValue**：节点的文本值

> 只有文本节点（text）和注释节点（comment）有文本值

- **textContent**：节点和它的所有后代节点的文本内容

> 与innerText一致，标签将不会被解析

- **nextSibling / previousSibling**：距离最近的前后同级节点

> 可以是元素节点，文本节点，注释节点等等

- **parentNode**：返回元素的父节点

> 通过这种方式返回的父节点，肯能是`元素节点`，`文档节点`，`文档片段节点`

- **parentElement**：返回元素文档节点父节点
- **firstChild / lastChild**：返回当前元素的第一个 / 最后一个子节点


> 包括所有的节点

-  **childNodes**：返回当前节点的所有子节点的集合，包含length属性

### 方法

- **appendChild(node)**：将node作为其最后一个子节点插入
- **hasChildNodes()**：判断一个元素是否有子节点，返回一个布尔值

> 任何类型的节点都参与判断

- **cloneNode([boolean])**：克隆节点

> 布尔值参数代表是否需要同时克隆子节点
>
> 但是会失去所有绑定的事件

- **insertBefore(newNode, referenceNode)**：在referenceNode节点前插入newNode

> referenceNode必须是父节点中的子节点
>
> referenceNode如果为null则插入的元素的最后 但是不能省略元素

```html
<div id="box">
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
</div>
<p id="addElement">new</p>
<script>
	box.insertBefore(addElement,box.firstChild);// 添加到最前面
</script>
```

- **removeChild(childNode)**：移除子节点，并且返回被移除的节点

> 此方法需要在父级节点上调用然后找到自己再进行删除

```html
<div id="box">
    <p>1</p>
    <p>2</p>
    <p id="rmChild">3</p>
    <p>4</p>
</div>
<script>
	rmChild.parentNode.removeChild(rmChild);// 移除第三个p标签
</script>
```

- **replaceChild(newNode, oldChild)**：将oldChild替换为newNode，返回oldChild

> oldChild 必须是元素的子节点

```html
<div id="box">
    <p>1</p>
    <p>2</p>
    <p id="rmChild">3</p>
    <p>4</p>
</div>
<p id="addElement">new</p>
<script>
	box.replaceChild(addElement,rmChild);// 将box 里面的第三个p标签替换为 addElement
</script>
```

- **contains(node)**：检测node是否为元素的后代节点，返回一个布尔值

## 12.04 - 元素节点的属性与方法

### 属性

- **children**：获取元素的所有元素子节点，类似与css的 > 选择器
- **firstElementChild / lastElementChild**：返回元素的（第一个 / 最后一个）
- **nextElementSibling / previousElementSibling**：距离最近的前后同级元素节点
- **childElementCount**：返回拥有的子节点数
- **tagName**：元素的标签名
- **innerHTML**：元素包含的HTML内容
- **outerHTML**：元素自身以及包含的HTML内容
- **offsetParent**：获取元素的定位父级节点


### 方法

- **append(node[, node ...]) / prepend(node[, node ...])**：往前 / 后，添加一个或者多个`子节点`
- **before(node[, node ...]) / after(node[, node ...])**：往前 / 后，添加一个或者多个`兄弟节点`
- **remove()**：从dom中删除自己
- **replaceWith(child)**：替换当前节点


### 宽高位置相关属性

- **clientWidth / clientHeight**：元素自身的`可视`宽度 / 高度 （content+padding）

> 宽度不包括滚动条的宽度，不计算超出内容的宽度

- **offsetWidth / offsetHeight**：元素自身的`总`宽度 / 高度 （content+padding+border）

> 宽度包括滚动条的宽度，不计算超出内容的宽度，同时需要获取整个网页的高度，需要从 document.documentElement （HTML对象）上获取

- **scrollWidth / scrollHeight**：元素以及超出内容的`总`宽度 / 高度（content+padding）

> 宽度包括滚动条的宽度，计算超出内容的宽度

- **scrollTop / scrollLeft**：元素垂直 / 水平 滚动条滚动的距离

> 一般结合 scroll 事件使用，同时需要获取整个网页的滚动高度，需要从 document.documentElement （HTML对象）上获取

- **offsetLeft / offsetTop**：获取元素相对与定位父级的水平 / 垂直 距离

```js
// 获取元素相对整个网页的位置
function getElePosition(ele){
    var x,y,p;
    do{
        x = ele.offsetLeft,y = ele.offsetTop;
        p = ele.offsetParent;
    }while(p !== null);
    return {x:x,y:y};
}
```

- **Element.getBoundingClientRect()**：方法返回元素的大小及其相对于视口的位置。

## 12.05 - document对象

> document 对象为整个文档的最上层的对象，DOM中所有的节点都是document对象的子节点，并且包含了许多与DOM相关的方法与属性

### 属性

- **doctype**：返回文档的文档申明
- **documentElement**：返回根元素( HTML )
- **baseURI**：当前网页的绝对路径

### 方法

- **createElement(nodeName)**：创建一个元素节点，参数为标签名

```js
var newDiv = document.createElement('div');
newDiv.innerHTML = 'hello DOM!';
document.body.append(newDiv);
```

- **createTextNode(text)**：创建一个文本节点，参数为需要创建的文本的字符串

> 此方法与innerHTML添加的区别在于，不会影响到原有节点的属性或者方法的绑定，而innerHTML相当于重新添加了所有元素，将会失去事件的绑定

- **write()** **writeln()**

### cookie

> 浏览器在本地暂时存储数据的机制，通常为一些用户名，等等用户信息的存储

- **cookie相关**
  - 存储的数据会暂时被浏览器保存到本地
  - 每个浏览器的cookie保存位置和方法不同 不能通用
  - 存储的位置以域名为单位存储
  - chrome浏览器不能在本地的环境存储或使用必须在后台环境
  - 默认情况下cookie只能保存到浏览器关闭，可以通过设置时间戳调整时间
- **cookie的读写**

> cookie实际上就是存储了一对一对的字符串的键与值，所以我们只需要给cookie赋值那么就可以存储cookie但是需要注意字符串有特定的格式：
>
> 存储格式：'key=value;'
>
> 读取格式：'name=amo; password=666666'
>
> PS：每次只能存储一条数据，读取的时候为全部读取，多条数据之间用分号和空格隔开

```js
// 设置
document.cookie = "name=amo;";
document.cookie = "password=666666;";
// 获取
console.log( document.cookie );// name=amo; password=666666
```

- **cookie生命周期**

> 默认情况下cookie只能保存到浏览器关闭，如果我们需要cookie在一段时间内保存，我们在存储cookie的时候设置过期的时间戳
>
> 1. 时间戳写在每条数据后的 expires 属性中代表当前数据的过期时间
> 2. 时间戳需要转换为 UTC 的格式

```js
// 设置固定时间戳
var dateUser = 'Sat, 07 Apr 2018 13:56:21 GMT';
document.cookie = "name=amo;expires=" + dateUser;

// 设置未来某个时间的时间戳
var datePassword = new Date( new Date().getTime() + 10000 ).toUTCString();// 设置未来10000毫秒后的时间戳
document.cookie = "password=666666;expires=" + date;
```



## 12.05 - 练习

### 自动悬浮导航

### 楼梯导航



 