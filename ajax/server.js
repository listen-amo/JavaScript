// 模块加载
const
	FS = require('fs'),
	PATH = require('path'),
	HTTP = require('http'),
	URL = require('url'),
	QUERYSTRING = require('querystring');

const
	upload = null;
// 路由查询
function routeTest(pathname){
	return function(url,cb){
		if((url==='/' && /^\/[^.\/]+\.[^.\/]+$/.test(pathname)) || new RegExp('^'+url+'(\/.*)?$').test(pathname) ){
			cb();
		}
	}
	
}

console.log();


// 获取文件名
function getFileName(str){
	return /([^/]+\..+?)(?:$|\?)/.exec(str)[1];
}

// 搭建服务器

// 参数
var
	port = 8080;

const server = HTTP.createServer((req,res)=>{
	// 解析请求
	var
		oUrl = URL.parse(req.url),
		oQuery = QUERYSTRING.parse(oUrl.query),
		pathname = oUrl.pathname,
		route = routeTest(pathname);

	// 路由

	// 主页文件
	route('/',()=>{
		if(pathname === '/'){
			pathname = '/index.html';
		}
		FS.readFile(PATH.join('www',pathname),(err,data)=>{
			res.end(data);
		});
	});
	// 上传
	route('/upload',()=>{
		require('./upload')(oQuery.filename,req,res);
	});
	// 静态文件
	route('/static',()=>{
		FS.readFile(PATH.join('www/static',getFileName(pathname)),(err,data)=>{
			res.end(data);
		});
	});
	// jsonp文件
	route('/jsonp',()=>{
		var path = PATH.join('www/static',getFileName(pathname));
		FS.readFile(path,'utf8',(err,data)=>{
			if(err){
				return;
			};
			res.end(oQuery.callback+'('+data+')');
		});
	});
});
// 监听端口
server.listen(port,err=>{
	if(err)throw err;
	console.log(`成功监听端口:${port} `)
});	