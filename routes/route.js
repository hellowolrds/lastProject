var url = require('url');
var render = require('../utils/render');
var hero = require('../controller/hero');

function route (req, res) {
	var urlPath = url.parse(req.url, true).pathname;
	if ( urlPath === '/' ) {
		render(req, res, 'views/index.html');
	}
	else if ( urlPath === '/hero/index' ) {
		
		hero.showList(req, res);
	}
	else if( urlPath.indexOf('/hero/detail') === 0 ) {
		hero.showDetail(req, res);
	}
}


module.exports = route;