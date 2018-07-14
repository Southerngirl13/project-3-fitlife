const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const AssessmentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: String, required: true },
  gender: { type: String, required: true },
  height: { type: String, required: true },
  weight: { type: String, required: true },
  targetWeight: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  date: { type: Date, default: Date.now() }
});


module.exports = mongoose.model('Assessment', AssessmentSchema);