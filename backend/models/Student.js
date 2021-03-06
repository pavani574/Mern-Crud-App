const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  fullName: {
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  email: {
    type: String
  },
  rollno: {
    type: String
  }
}, {
  collection: 'students'
})

module.exports = mongoose.model('Student', studentSchema)