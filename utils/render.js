var fs = require('fs');
var url = require('url');
var template = require('art-template');
var mime = require('mime');

function render (req, res, viewPath, obj) {
	var urlPath = url.parse(req.url, true).pathname;
	var filePath = './' + urlPath;
	var type = mime.lookup(urlPath);
	if ( filePath.indexOf('/public/') < 0 ) {
		filePath = viewPath;
		type = 'text/html';
	}

	fs.readFile(filePath, function (err, data) {
		if ( err ) {
			res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
			res.end("<h1>对不起您网页跑到火星去了</h1>");
		}
		var contentType = type.indexOf('text') === 0
			? type + ';charset=utf-8' : type;
		res.writeHead(200, {'Content-Type': contentType});
		// 判断obj是否为空
		if ( obj ) {
			// 首先将data转成字符串
			data = data.toString();
			data = template.render(data, obj);
			// console.log(data.toString())
		}
		res.end(data);
	});
}

module.exports = render;