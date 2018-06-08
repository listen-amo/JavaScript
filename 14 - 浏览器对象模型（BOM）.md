# 14 - 浏览器对象模型（BOM）

> 浏览器对象模型（简称BOM），是独立于HTML界面的于浏览器相关的一些信息对象的模型。BOM主要由一系列的对象属性和方法组成

## window对象

### 属性

- **innerWidth / innerHeight**：返回窗口的文档显示区的 宽度 / 高度 (包含滚动条)。
- **console**

### 方法

- **close()**：关闭当前窗口
- **open(url[, name])**：打开一个地址，类似于a标签跳转
  - url：打开的网页地址
  - name：指定打开的方式
    - _self 当前窗口
    - _blank 新窗口
- **getSelection()**：返回当前被选中文本的相关信息，可以通过对象的 toString() 方法拿到选中的字符串
  - document.execCommand("copy")：复制选中的文本到粘贴板


```js
var selectText = window.getSelection().toString();
```

-  **window.scrollTo(x,y) /  window.scrollBy(x,y)**：设置窗口滚动的 绝对位置 / 相对位置
-  **setInterval() setTimeout()**
-  **alert() confirm() prompt()**

### 事件

- **load**：文档加载完成的时候触发
- **focus / blur**：窗口 获得 / 失去 焦点

## Navigator对象

> Navigator包含了浏览器相关的一些信息例如浏览器的版本信息等等

### 属性

**userAgent**：返回由客户机发送服务器的user-agent 头部的值，可以用于判断浏览器的版本

```js
// 检测浏览器
function version(){
	// 获取浏览器的User-Agent字符串
	var userAgent = navigator.userAgent;

	// 浏览器厂商或者版本的标识信息
	var v = {
		Opera : ['OPR'],
		Safari:['Version','Safari'],
		Chrome:['Chrome'],
		Firefox:['Firefox'],
		IE10:['compatible','MSIE 10.0'],
		IE9:['compatible','MSIE 9.0'],
		IE8:['compatible','MSIE 8.0'],
		IE7:['compatible','MSIE 7.0']
	};

	// 判断是否满足某个浏览器的所有标识信息
	var bool;
	for(var k in v){
		bool = true
		for(var j=0;j<v[k].length;j++){
			if(!(new RegExp(v[k][j]).test(userAgent))){
				bool = false;
			}	
		}
		if(bool){
			return k;
		}
	} 
}
// 判断移动端
function isMobile(){
   return /mobi|android|touch|mini/i.test(navigator.userAgent)
}

```

- **onLine**：返回一个布尔值，表示浏览器是否离线（true：表示没有离线）

## location 对象

> location 对象是window对象下的属性之一，主要包含了当前的URL相关的信息

### 属性

- **host**：返回当前网页URL的域名或者主机和端口的部分（需要再后台环境中）
- **href**：返回或者设置当前网页完整的URL 
- **protocol**：返回协议部分（http:、https:、file:、ftp: ...）

### 方法

- **assign(url)**：载入一个新的文档
- **reload()**：重新载入当前文档