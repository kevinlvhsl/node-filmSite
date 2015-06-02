var mongoose = require('mongoose')
var MovieSchema = require('../schemas/movie.js')
//将模式编译成 movie模型 model
var Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie