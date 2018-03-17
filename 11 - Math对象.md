# 11 - Math对象

> Math 对象下定义了许多与数学相关的属性和方法，比如圆周率的常量值，随机数的方法等等

## 11.01 - 常用属性

### Math.PI：圆周率

```js
console.log(Math.PI);// 3.141592653589793
```

## 11.02 - 常用方法
### Math.abs()：绝对值

```js
var a = 1,b = -1;
Math.abs(a);// 1
Math.abs(b);// 1
```

### Math.ceil()：向上取整

```js
var a = 1.01,b = 1.49;
Math.ceil(a);// 2
Math.ceil(b);// 2
```

### Math.floor()：向下取整

```js
var a = 1.01,b = 1.999;
Math.floor(a);// 1
Math.floor(b);// 1
```

### Math.max()：最大值

```js
Math.max(0,3,1,4,2,5);// 5
```

### Math.min()：最小值

```
Math.min(0,3,1,4,2,5);// 0
```

### Math.sqrt()：平方根

> `ath.sqrt`方法返回参数值的平方根。如果参数是一个负值，则返回`NaN`。

```js
Math.sqrt(4) // 2
Math.sqrt(-4) // NaN
```

### Math.round()：四舍五入

```js
Math.round(0.1) // 0
Math.round(0.5) // 1
Math.round(0.4445) // 1 从最后一位开始往前计算
```

### Math.random()：随机数

> 返回一个 0~1 之间的随机小数

```js
Math.random();// 0.19940782878719965  0~1 之间的随机小数
```

### Math.pow(n,e)：指数运算

> 返回 n 的 e 次方

```js
Math.pow(10,2);// 100   10*10
```

### Math.sin(radian) / Math.cos(radian)：正弦 / 余弦

>通过传递一个弧度值，返回对应的正弦/余弦值

- **角度与弧度的转换公式**：1deg = (π/180)rad

```js
// 角度转弧度
function radian_deg(deg){
	return Math.PI*deg/180;
}
Math.sin(  radian_deg(90) );// 1
Math.cos( radian_deg(0) );// 1
```

## 11.03 - Math对象运用案例

### 随机数

- **随机颜色**

```js
function ranColor(){
    var cArr = [];
    for(var i=0;i<3;i++)cArr.push(Math.floor(Math.random()*256));
    return "rgb("+cArr.join(",")+")";
}
```

- **指定范围内的随机整数**

```js
function ranNum(max,min){
    max = max || 10;
    min = min || 0;
    return Math.floor(Math.random()*(max-min+1))+min;
}
```

- **随机获取数组的成员**

```js
var arr = [1,2,3,4,5];
function ranMember(arr){
	return arr[Math.floor(Math.random()*arr.length)];
}
 ranMember(arr);
```

- **数组随机排序**

```js
var arr = [1,2,3,4,5];
// sort方式
function ranOrder_sort(arr){
    return arr.sort(function(){
        return Math.random()-0.5;
    });
}
// 数组中随机抽取的方式
function ranArr(arr){
	var _arr = [],len;
	while(len = arr.length){
		_arr.push(arr.splice(Math.floor(Math.random()*len),1)[0]);
	}
	return _arr;
}
```

### Math.min / Math.max

- **获取数组中最大（小）值**

```js
var arr = [5,4,3,1,2,6,8,0,7];
function getValue(arr){
    return {
        max : Math.max.apply(null,arr),
        min : Math.min.apply(null,arr)
    }
}
getValue(arr).max;// 8
getValue(arr).min;// 0
```

- **限定一个值的范围**

```js
var rv = rangeValue(50,200);
function rangeValue(min,max){
	min = min || 0;
	max = max || 100;
	return function(num){
		return  Math.min(Math.max(min,num),max);
	}
}
console.log(rv(49));// 50
console.log(rv(100));// 100
console.log(rv(220));// 200
```

### Math.sin / Math.cos

- **正弦余弦图像**
- **圆形**

```js
function circle(x,y,r,obj){
  x = x || 200;
  y = y || 200;
  r = r || 100;
  obj = obj || document.body;
  for(var i=0;i<360;i++){
    var dP = document.createElement("p");
    dP.style.cssText = 
      'position:absolute;left:'+(x+Math.sin(radian_angle(i))*r)+'px;top:'+(y+Math.cos(radian_angle(i))*r)+'px;width:0;height:0;border:1px solid red;';
    obj.appendChild(dP);
  }
}

function radian_angle(radian){
	return Math.PI*radian/180;
}
```







