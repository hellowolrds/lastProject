var path = require('path');
var url = require('url');
var render = require('./render');

function assets (req, res) {
	// 解析路径名
	var urlPath = url.parse(req.url, true).pathname;
	
	if ( urlPath.indexOf('/public/') === 0 ) {

		render(req, res);

	}
}


module.exports = assets;