// 模块加载
const
	FS = require('fs'),
	PATH = require('path');
// 变量

// 参数
var
	folder = './www/files';
function upload(filename,req,res){
	// console.log(PATH.join(folder,filename));
	// var str = '';
	var writeStream = null;
	var str = null;

	if(req.method === 'POST' && filename){
		writeStream = FS.createWriteStream(PATH.join(folder,filename));
		req.on('data',data=>{
			// str += data.toString();
			writeStream.write(data,err=>{
				if(err)console.log(err);
			});
		}).on('end',()=>{
			console.log('写入成功');
			res.end('写入成功');
		});
	}else{
		req.on('data',data=>{
			str = data;
			console.log(data)
		}).on('end',()=>{
			console.log(str.toString());
			res.end();
		});
	}

}

module.exports = upload;