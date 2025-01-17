const {Schema, model} = require('mongoose')
const usrSchema = new Schema({
		email: {
				type: String,
				unique: true,
				required: true
		},
		password: {
				type: String,
				required: true
		}
}, {
		timestamps: true,
		versionKey: false
})

module.exports = model('User', usrSchema)