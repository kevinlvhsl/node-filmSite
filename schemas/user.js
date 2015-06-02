var mongoose = require('mongoose');
//new sechema object
var UserSchema = new mongoose.Schema({
	name : {
		unipue: true,
		type: String
	},
	password : String,
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
});

// before insert exec
MovieSchema.pre('save', function(next){
	if (this.isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now()
	}else {
		this.meta.updateAt = Date.now()
	}
	next()
})
//给 这个模式添加静态方法，编译后的模型将拥有这些方法
MovieSchema.statics = {
	fetch: function(cb){
		return this
		.find({})
		.sort('meta.updateAt')
		.exec(cb)
	},
	findById: function(id, cb){
		return this
		.findOne({_id: id})
		.exec(cb)
	}
}

module.exports = MovieSchema