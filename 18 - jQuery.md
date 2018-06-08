# 18 - jQuery

> jQuery是一个使用原生JavaScript封装的开源插件库，其中封装了很多常用的一些JavaScript操作的方法，例如选择器，样式设置，遍历节点，事件操作，AJAX等等，可以极大的提高开发的效率，使用也比较简单

## 18.01 - jQuery的版本

> jQuery目前有三个大的版本，每个版本有若干小版本。其中又分为常规版和mini版（进行了压缩提高了加载性能）

- **版本 1.***：1.*的版本，考虑了各大浏览器的兼容性，支持所有的浏览器，但是代码体积相对要庞大很多
- **版本 2.***：2.*的版本，在1.\*版本的基础上精简了很多版本，但是不在支持IE6，7，8的兼容`IE，这辈子都不可能用IE的`，介于1.\*版与3.\*版本之间的过渡版本
- **版本 3.***：再次精简了很多代码，为目前版本中最轻量级的，不在考虑一些非常规兼容，使用了更好的运动框架

## 18.02 - jQuery的下载与引用

> jQuery就是一个js文件，网上可以很容易的找到jQuery的各个版本的文件，当然也可以去官网。开发阶段也可以使用在线的cdn。但是需要注意，jQuery的引用一定要在代码使用之前。

- `bootcdn`：http://www.bootcdn.cn/jquery/

```html
<script src="http://www.bootcdn.cn/jquery/"></script>
<script>
	console.log($);// function
</script>
```

## 18.03 - jQuery核心

> 这里只记录jQuery中最常用最核心的一些方法，其他大部分的方法都不会经常使用，需要用的时候查下api就可以了：
>
> `jQuery api`：http://jquery.cuishifeng.cn/

### 核心方法

- `jQuery | $`：获取一个jQuery对象节点，方法执行后返回一个有若干方法的对象，且方法链之后的这些方法的对象为该方法获取的节点。此方法为jQuery的核心，一切的方法都是以它开始的

  - 参数：可以传很多类型的参数进去

    - selectString：选择器字符串

      ```
      $('#box div').css('color','red');
      ```

    - element：dom对象

      ```
      $( document.getElmentsByClassName('.item') ).css('color','red');
      ```

    - jQueryObj：jQuery对象

      ```
      $( $('.box div') ).css('color','red');
      ```

    - function：函数

      > 传入一个函数的时候，等同于 DOMContentLoaded 事件被触发的时候执行此函数

      ```
      $(function(){
          // ...
      });
      ```

    - HTMLString：html标签字符串

      > 其效果类似于用 innerHTML 创建标签，创建的标签会被直接包装成jQuery对象，但是同样这个元素需要被动的添加到DOM树中，一般直接调用`appendTo()`方法添加

      ```
      $('<div>hello jQuery</div>').css('color','red').appendTo('body');
      ```


- `.each(cb)`：遍历节点，传入一个回调函数，此函数中的this指向每次遍历到的dom节点对象，回调函数的第一参数代表序列号，可以通过return false;的方式终止遍历

  ```
  $li.each(function(i){
  	if(i>2){
  		return false;
  	}
  	console.log(this,i);
  });
  ```

  ​



