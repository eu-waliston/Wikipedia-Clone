const mongoose = require("mongoose");

const Articles = mongoose.Schema({
  article_title: { type: String, required: true },
  article_article: { type: String, required: true },
  article_imgUrl: { type: String, required: true },
  article_author: { type: String, required: true },
  article_date: { type: Date, required: true, default: new Date() },
});

module.exports = mongoose.model("articles", Articles);
