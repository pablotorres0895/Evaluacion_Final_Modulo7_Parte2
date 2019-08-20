const mongoose = require('mongoose')

const Schema = mongoose.Schema

let UserSchema = new Schema({
  userId: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  name: { type: String, required: true},
  birthday: { type: Date, required: true}
})


  
let UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel