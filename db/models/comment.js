const mongoose = require("mongoose");
// سكيما الكومنت  ومرتبط مع البوست واليوزر
const comment = new mongoose.Schema({
  desc: { type: String, require: true },
  time: { type: Date },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
});

module.exports = mongoose.model("Comment", comment);
