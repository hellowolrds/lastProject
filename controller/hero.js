var render = require('../utils/render');
var fs = require('fs');
var url = require('url');

var heroPath = __dirname + '/../db/herolist.json';
var heroType = {
	1: '战士',
	2: '法师',
	3: '坦克',
	4: '刺客',
	5: '射手',
	6: '辅助'
};
function showList (req, res) {
	// render(req, res, 'views/hero/index.html');
	// 加载heroList.json
	fs.readFile(heroPath, 'utf8', function (err, data) {
		if ( err ) {
			throw err;
		}
		// 将json解析成对象
		var heroList = JSON.parse(data);
		render(req, res, 'views/hero/index.html', {
			heroList: heroList,
			heroType: heroType
		});
	});
}

function showDetail (req, res) {
	fs.readFile(heroPath, 'utf8', function (err, data) {
		if ( err ) {
			throw err;
		}
		// 将json解析成对象
		var heroList = JSON.parse(data);
		var pathObj = url.parse(req.url, true);
		var ename = pathObj.query.ename;
		var obj = {};
		
		// 遍历heroList找到和ename相等的对象
		for ( var i = 0; i < heroList.length; i++ ) {
			if ( heroList[i].ename == ename ) {
				obj = heroList[i];
				obj.type = heroType;
			}
		}
		// console.log(obj)
		render(req, res, 'views/hero/detail.html', obj);
	});
}

module.exports = {
	showList: showList,
	showDetail: showDetail
}