var express = require('express');
var path = require('path')
var mongoose = require('mongoose')
var _ = require('underscore')
var Movie = require('./models/movie')
var port = process.env.PORT || 3000
var app = express()

//链接数据库   film： 起的数据库名
mongoose.connect('mongodb://localhost/film')
app.set('views','./views/pages')
app.set('view engine', 'jade')
app.locals.moment = require('moment')
app.use(express.static(path.join(__dirname,'public')))//将静态资源目录定位到bower_components目录下
//app.use(express.bodyParser())//表单数据格式化
app.use(require('body-parser').urlencoded({extended: true}))
app.listen(port)

console.log('kevin\'s app started on port' + port)



//express route
app.get('/',function(req, res){
	Movie.fetch(function(err, movies){
		if (err) {
			console.log(err)
		}
		//渲染到页面
		res.render('index' ,{title: 'kevin 首页',
			movies: movies
		})
	})
})

//express route
app.get('/movie/:id',function(req, res){
	var id = req.params.id
	Movie.findById(id,function(err, movie){
		res.render('detail' ,{title: 'kevin 详情页',
			movie: movie
		})
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

//管理页更新数据
app.get('/admin/update/:id', function(req, res){
	var id = req.params.id
	if (id) {
		Movie.findById(id, function(err, movie){
			if (err) {
				console.log(err)
			}
			res.render('admin', 
				{
					title: '后台更新 movie',
					movie: movie
				}
			)
		})
	}
})

//admin post movie 提交请求处理
app.post('/admin/movie/new', function(req, res){
	console.log(req.body)
	var id = req.body.movie._id, 
		movieObj = req.body.movie, 
		_movie = null
	if (id !== 'undefined') {
		Movie.findById(id, function(err, movie){
			if (err) {
				console.log(err)
			}
			//underscore 将提交来的对象覆盖数据库中查询到的数据
			_movie = _.extend(movie, movieObj)
			_movie.save(function(err, movie){
			if (err) {
					console.log(err)
				}
				res.redirect('/movie'+ movie._id)
			})
		})
	}else{
		console.log('meiyou id'+ movieObj)
		_movie = new Movie({
			doctor : movieObj.doctor,
			title : movieObj.title,
			language : movieObj.language,
			country : movieObj.country,
			summary : movieObj.summary,
			poster : movieObj.poster,
			flash : movieObj.flash,
			year : movieObj.year,
			createAt: Date.now()
		})
		//将表单数据重新保存到数据库，并且页面重定向到详情页
		_movie.save(function(err, movie){
			if (err) {
				console.log(err)
			}
			res.redirect('/movie/'+ movie._id)
		})
	}
})
 
//express route
app.get('/admin/list',function(req, res){
	Movie.fetch(function(err, movies){
		if (err) {
			console.log(err)
		}
		//渲染到页面
		res.render('list' ,{title: 'kevin 列表页',
			movies: movies
		})
	})
	
})


//list delete movie
app.delete('/admin/list', function(req, res){
	var id= req.query.id
	if (id) {
		Movie.remove({_id: id}, function(err, movie){
			if (err) {
				console.log(err)
			}
			else{
				res.json({success: 1})
			}

		})
	}
})