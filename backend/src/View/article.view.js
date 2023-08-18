const express = require("express");

const {
  getAllArticles,
  getArticle,
  createArticle,
  updateArticle,
  delteArticle,
} = require("../Model/articles.model");

const ArticleRouter = express.Router();

ArticleRouter.get("wikipedia/articles/", getAllArticles);
ArticleRouter.get("wikipedia/articles/:id", getArticle);
ArticleRouter.post("wikipedia/articles/:id", createArticle);
ArticleRouter.put("wikipedia/articles/:id", updateArticle);
ArticleRouter.delete("wikipedia/articles/:id", delteArticle);

module.exports = ArticleRouter;
