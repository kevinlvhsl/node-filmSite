var express = require('express');
var path = require('path')
var port = process.env.PORT || 3000
var app = express()


app.set('views','./views/pages')
app.set('view engine', 'jade')
//app.use(express.bodyParser())//表单数据格式化
app.use(express.static(path.join(__dirname,'bower_components')))//将静态资源目录定位到bower_components目录下
app.listen(port)

console.log('kevin\'s app started on port' + port)



//express route
app.get('/',function(req, res){
	res.render('index' ,{title: 'kevin 首页',
		movies:[
			{
				title: '机械战警',
				_id: 1,
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			},{
				title: '机械战警',
				_id: 2,
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			},{
				title: '机械战警',
				_id: 3,
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			},{
				title: '机械战警',
				_id: 4,
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			},{
				title: '机械战警',
				_id: 5,
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			},{
				title: '机械战警',
				_id: 6,
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			}
		]
	})
})

//express route
app.get('/movie/:id',function(req, res){
	res.render('detail' ,{title: 'kevin 详情页',
		movie:{
			doctor: '梁小军',
			country: '中国',
			title: '机械战警',
			year: 2015,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			language: '中文',
			flash: 'http://player.youku.com/player.php/sid/XNjA1NJC0NTUy/v.swf',
			summary: '翻拍自1987年同名科幻经典、由《精英部队》导演 梁小军执导的新版《机械战警》发布首款预告片。大热美剧《谋杀》男星乔尔·金纳曼化身新‘机械战警’酷黑战甲亮相。。。。此处省略一百字。'
		}
	})
})


//express route
app.get('/admin/movie',function(req, res){
	res.render('admin' ,{title: 'kevin 管理页',
		movie: {
			title: '',
			doctor: '',
			country: '',
			year: '',
			poster: '',
			flash: '',
			summary: '',
			language: ''
		}
	})
})


//express route
app.get('/admin/list',function(req, res){
	res.render('list' ,{title: 'kevin 列表页',
		movies: [
			{
				title: '机械战警',
				_id: 1,
				doctor: '梁小军',
				country: '中国',
				year: 2015,
				language: '中文',
				flash: 'http://player.youku.com/player.php/sid/XNjA1NJC0NTUy/v.swf'
			},{
				title: '机械战警',
				_id: 2,
				doctor: '梁小军',
				country: '中国',
				year: 2015,
				language: '中文',
				flash: 'http://player.youku.com/player.php/sid/XNjA1NJC0NTUy/v.swf'
			},{
				title: '机械战警',
				_id: 3,
				doctor: '梁小军',
				country: '中国',
				year: 2015,
				language: '中文',
				flash: 'http://player.youku.com/player.php/sid/XNjA1NJC0NTUy/v.swf'
			},{
				title: '机械战警',
				_id: 4,
				doctor: '梁小军',
				country: '中国',
				year: 2015,
				language: '中文',
				flash: 'http://player.youku.com/player.php/sid/XNjA1NJC0NTUy/v.swf'
			},{
				title: '机械战警',
				_id: 5,
				doctor: '梁小军',
				country: '中国',
				year: 2015,
				language: '中文',
				flash: 'http://player.youku.com/player.php/sid/XNjA1NJC0NTUy/v.swf'
			},{
				title: '机械战警',
				_id: 6,
				doctor: '梁小军',
				country: '中国',
				year: 2015,
				language: '中文',
				flash: 'http://player.youku.com/player.php/sid/XNjA1NJC0NTUy/v.swf'
			}
		]
	})
})