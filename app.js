var http = require('http');
var assets = require('./utils/static');
var route = require('./routes/route');
http.createServer(function (req, res) {
	

	route(req, res);

	// 处理静态资源和404
	assets(req, res);

}).listen(3000, function () {
	console.log('服务启动了');
});