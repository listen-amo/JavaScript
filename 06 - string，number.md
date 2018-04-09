# 06 - String，Number

## 6.01 - Number

> 关于数字的一些特性，属性与方法

### **数字的特性**

- **精确取值范围**：-2^53到2^53
- **字面量不同的进制表示**：
  - 二进制（0b）：0b101
  - 八进制（0o）：0o123
  - 十进制：1000
  - 十六进制（0x）：0xffe

###特殊数字值

- **NaN**：非数字
- **Infinity**：无穷大
- **Number.MAX_VALUE**：最大的正数
- **Number.MIN_VALUE**：最小的正数
- **1.1e+10**：科学计数法

### 数字相关方法

- **全局方法**

  - number( val )
  - parseInt( val [ ,radix] )：接受一个可选的表示传入数值的进制参数

  ```js
  var n = 100;
  console.log( parseInt(n) );// 100 默认位10 进制
  console.log( parseInt(n,2) ); // 4 把 100 视为 2 进制
  ```

  - parseFloat( val )
  - isNaN( val )

- **数字方法**

  - number.toString( [radix] )：将数字转为字符串带进制参数

  - number.toFixed( Int )：让数字保留对应位数的小数，四舍五入

  - 备注：

    1. 对整数使用数字方法时，避免小数点的歧义需要先把数字放在括号里

    ```js
    // 10.toString();// error
    (10).toString(); // "10"
    ```

## 6.20 - String

> 字符串，0个或者多个字符的排列组合，放在单或者双引号中

### 字符串的特性

- **关于引号**：单双引号的表示是完全一样的，但是需要保证统一，一个字符串中需要用到引号字符时，需要进行转义或者使用单双相互嵌套的形式

```js
"<a href=\"#\"></a>";// 转义引号
'<a href="#"></a>';// 单双嵌套
```

- **换行**：普通字符串无法正常换行，会抛出异常，换行需要使用一下方式

```js
// 1. 换行前添加转义符
'<a href="#">\
	hello world\
</a>';
// 2. 拼接
'<a href="#">'+
	'hello world'+
'</a>';

```

- **字符串可读不可写**：字符串可以通过下标直接读取对应序列的字符但是无法被修改

```js
var str = 'abcd';
console.log( str[1] );// 'b'
str[1] = 'e';
console.log( str ); // 'abcd'
```

### 转义

- `\n` ：换行符
- `\r` ：回车键
- `\t` ：制表符
- `\'` ：单引号
- `\"` ：双引号
- `\\` ：反斜杠

### 字符串属性

- string.length：字符串的长度

### 字符串方法

| 方法                              | 描述                                                         |
| --------------------------------- | ------------------------------------------------------------ |
| charAt(n)                         | 返回指定索引位置的字符（兼容IE7-）                           |
| charCodeAt(n)                     | 以Unicode编码形式返回指定索引位置的字符                      |
| String.fromCharCode(ascii)        | 返回ASCII对应的字符                                          |
| indexOf(str)                      | 从左往右查找字符str是否在字符串中,找到返回索引,找不到返回-1  |
| lastIndexOf(str)                  | 从右往左查找字符str是否在字符串中,找到返回索引,找不到返回-1  |
| substring(n,m)                    | 返回区间n与m之间数值较小的到较大的之间的字符串,不包括m索引位 |
| slice(n,m)                        | 返回区间(n,m]之间的字符串,不包括m索引位，n为负值的时候从字符串最后倒数至n位开始 |
| substr(n,m)                       | 返回n索引之后的m个字符                                       |
| toLowerCase()                     | 全部转换成小写                                               |
| toUpperCase()                     | 全部转换成大写                                               |
| split(pattern [,length] )         | 按照pattern匹配来切分原始字符串，可选参数，返回的数组的最大长度 |
| replace(str,replaceStr\|callback) | 在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串 |
| trim()  trimLeft()  trimRight()   | 去除字符串两端的空格，返回一个新字符串，不改变原字符串       |
| match(str\|reg)                   | 返回一个数组，成员为匹配到的字符串。如果没有找到匹配返回null |
