# 17 - AJAX

> AJAX [ Asynchronous JavaScript and XML （异步的 JavaScript 和 XML）]，首先来说，作用只有一个，就是可以在JS中与服务器进行数据交换（通过JS向服务器发起请求）。也就是说可以发送通过JS得到的数据到服务器去，也可以接收从服务器得到的数据，然后在JS中进行操作。
>
> 所以带来的最直接的好处就是，不需要刷新整个界面，就可以更新界面中的数据。
>
> `AJAX需要在服务器的环境下才能运行，同时遵守同源政策`

## 17.01 - AJAX基本使用

> AJAX的使用需要借助于JS中给我们提供的对应的原生对象`XMLHttpRequest`对象来实现，总共分为如下四个步骤：
>
> 1. 创建AJAX对象
> 2. 确定参数（请求地址，请求方式，是否异步）
> 3. 发送请求
> 4. 接收请求结果

```js
// 1. 创建AJAX对象
var xhr = new XMLHttpRequest();
// 2. 确定参数（请求地址，请求方式，是否异步）
xhr.open('get','./test.json',true);
// 设置接收数据的类型
xhr.responseType = 'json';
// 3. 发送请求
xhr.send();
// 4. 接收请求结果
xhr.onreadystatechange = function(){
    if(xhr.readyState=== 4 && xhr.status === 200){
        // 请求到的数据
        console.log(xhr.response);// {key:value}
    }
}
```

## 17.02 - AJAX实例的属性

### 属性

- **readyStart**：返回一个整数，表示当前请求的状态

  - 0：实例已经生成但是open方法还没有被调用
  - 1：表示open方法已经被调用，但是send方法还没有被调用
  - 2：send方法执行
  - 3：已经开始接收数据，但是数据还没有接收完整
  - 4：表示数据已经接收完成，或者接收失败，请求结束

  > readyStart的值每次发生变化的时候都会触发readystatechange事件

- **response**：返回接收到的数据，如果接收失败则返回null

  > 必须要在需要在请求成功之后再进行获取

- **responseType**：指定接收到的数据（response）的类型，如果接收到的数据不能转换成该类型，则返回null

  - text：字符串
  - json：json对象
  - document：document对象（html / xml）

- **responseText**：只返回接收到的字符串数据数据

- **status**：返回本次请求所得到的http状态码

  - 200： OK，访问正常
  - 301： Moved Permanently，永久移动
  - 302： Move temporarily，暂时移动
  - 304： Not Modified，未修改
  - 307：Temporary Redirect，暂时重定向
  - 401： Unauthorized，未授权
  - 403：Forbidden，禁止访问
  - 404： Not Found，未发现指定网址
  - 500：Internal Server Error，服务器发生错误

  > 状态码还有很多，但是状态码在 200~300 之间 或者 304 都是正常的

- **statusText**：返回状态码的提示信息的字符串

### 方法

- **open(method,url,async)**：设置发送HTTP请求的参数
  - method：请求的方式
    - 'get'
    - 'post'
  - url：请求的地址
  - async：是否异步

- **send([postData])**：发送HTTP请求
  - postData：post请求时，需要发送的数据

- **setRequestHeader(header,value)**：设置请求头信息

  - header：请求的属性名称
  - value：请求的属性值

  > 请求头信息的设置必须在open方法调用之后，send方法调用之前

### 事件

- **readystartchange**：当请求的状态（readyStart）发生改变的时候触发该事件

  > 这个事件一般结合判断请求状态码来进行使用，当请求状态码为 4 的时候说明请求完成，然后再进行获取数据的操作

- **load**：请求成功的时候触发

  > 可以代替readstartchange事件判断的方式，来通知是否已经获取完成

- **error**：请求失败的时候触发


## 17.03 - AJAX数据发送

> AJAX除了可以接收数据之外，还可以向服务器发送数据。发送数据的方式比较简单，但是GET和POST发送数据的方式有所不同，能够发送的数据类型也不相同

### GET请求

> 通过GET方式只能简单的发送键值对格式的字符串数据（请求体的参数部分），直接跟在请求当中。

- **数据格式：**`?name=amo&sex=男&age=18&length=25`

```js
var data = 'name=amo&sex=男&age=18&length=25';
var url = './test.json' + '?' + data;

var xhr = new XMLHttpRequest();
xhr.open('get',url,true);// ./test.json?name=amo&sex=男&age=18&length=25
xhr.send();
xhr.onreadystatechange = function(){
    if(xhr.readyState=== 4 && xhr.status === 200){
        console.log(xhr.response);// {key:value}
    }
}
```

### POST请求

> 使用POST方式发送的数据除了能够在请求体中发送数据之外，还可以在`send(data)`方法的参数中发送数据，其可以发送的数据的类型，可以是字符串也可以是文件

- **字符串数据**

```js
var data = 'name=amo&sex=男&age=18&length=25';
var url = './test.json';

var xhr = new XMLHttpRequest();
xhr.open('post',url,true);// ./test.json
xhr.send(data);// name=amo&sex=男&age=18&length=25
xhr.onreadystatechange = function(){
    if(xhr.readyState=== 4 && xhr.status === 200){
        console.log(xhr.response);// {key:value}
    }
}
```

- **文件数据**

```html
<input type="file" id="file_input" /><button id="upload">upload</button>
<script>
    var
    	fileInp = document.getElementById('file_input'),
    	upload = document.getElementById('upload');
    
    var xhr = new XMLHttpRequest();
    var file = null;
    upload.onclick = function(){
        // 获取需要上传的文件
        file = fileInp.files[0];
        if(!file){
            alert('请选择文件');
            return;
        };
        // 设置请求信息，以及向服务器发送文件名及拓展名信息
        xhr.open('POST', 'http://localhost:8080/upload?filename='+file.name);
        // 设置请求头信息，申明文档的类型
        xhr.setRequestHeader('Content-Type', file.type);
        // 发送数据
        xhr.send(file);
    }
</script>
```

## 17.04 - AJAX封装

```js
 function ajax(arg){
     // 设置默认参数
     var defArg = {
         method:'GET',
         data:'',
         async:true,
         dataType:'text',
         beforeSend:function(){},
         success:function(){
             console.log('请传入回调函数以接收数据');
         },
         error:function(){
             console.log('有错误但是，并没有用错误回调函数处理错误');
         },
     };
     for(var k in arg)defArg[k] = arg[k];

     // 数据传输处理
     var
     	data = defArg.data,
        method = defArg.method.toUpperCase(),
        url = defArg.url;
     if(data && typeof data === 'string' && method === 'GET'){
         url += '?' + data;
     }

     // 请求设置
     var xhr = new XMLHttpRequest();
     xhr.open(defArg.method, url, defArg.async);
     xhr.responseType = defArg.dataType;
     defArg.beforeSend(xhr);
     xhr.send(data);
     xhr.onreadystatechange = function(){
         if(xhr.readyState=== 4 && xhr.status === 200){
             // 请求成功
             defArg.success(xhr.response,xhr);
         }else{
             // 请求失败
             defArg.error(xhr.status,xhr);
         }
     }
 }
```

## 17.05 - 同源策略

> 思考一个问题：我们知道通过AJAX我们可以在通过服务器，拿到或者发送一些数据（目前看来只要知道请求地址就可以），那如果有一天我偶然得到了TM用户信息管理的请求地址！那我就可以通过这个地址请求到所有的用户信息，然后自己写一个程序，每天给这些用户发送小广告了！
>
> 但是事实是，这个是做不到的哪怕你得到了请求地址。因为AJAX的请求需要遵守`同源策略`，也就是当AJAX对一个地址发送请求的时候会先对这地址进行判断检测，判断地址是否同源（证明是你自己的服务器地址），如果不是则会报错`Response for preflight is invalid (redirect)`

- **同源的三个相同**

  - 协议相同
  - 域名相同
  - 端口相同

  > 当前地址：http://www.tanzhou.com/java/index.html 默认端口为 80
  >
  > - 协议不同：https://www.tanzhou.com/java/index.html
  > - 域名不同：http://www.shiguangkey.com/java/index.html
  > - 端口不同：http://www.tanzhou.com:88/java/index.html

## 17.06 - JSONP

> JSONP（JSON with Padding），是用于解决跨域请求的一个方案，特点在于简单易用，没有兼容个问题，但是需要服务端的数据满足特定的格式。
>
> 根本的实现原理是通过script标签去请求加载一段脚本，然后把对应的数据放在这个脚本当中。
>
> script标签去请求一个地址的时候是不受同源策略的限制的，但是前提在于需要服务端提供的数据满足一个脚本的格式。

```html
<script>
    // 服务端请求地址（假设）：http://localhost:8080/test.js?callback=fnname
    // 服务端返回的数据格式：fnname( {a:1, b:2} );

    // 客户端处理
    // callback=? ?代表回调函数的名称将在内部被替换成临时的函数名
    getJsonp('http://localhost:8080/jsonp/test.js?callback=?&a=10',data=>{
        console.log(data);// {a:1, b:2}
    })
    
    function getJsonp(url,cb){
        // 创建一个script标签
        var oS = document.createElement('script');
        // 设置请求路径
        oS.src = url.replace(/(?<=\=)\?(?=&|$)/,'cb_');
        // 导出回调函数到全局
        window.cb_ = cb;
        // 添加script标签
        document.body.append(oS);
        // 脚本加载完成后 删除导出属性以及script标签
        oS.onload = function(){
            delete window.cb_;
            this.remove();
        }
    }
    
   
    
    
</script>






```








