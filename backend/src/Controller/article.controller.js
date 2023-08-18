const Article = require("../Model/articles.model");

async function getAllArticles(req, res) {
  try {
    let articles = Article.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function getArticle(req, res) {
  let id = req.params.id;
  try {
    let article = await Article.findById(id);
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function createArticle(req, res) {
  let newArticle = new Article({
    article_title: req.body.article_title,
    article_article: req.body.article_article,
    article_imgUrl: req.body.article_imgUrl,
    article_author: req.body.article_author,
    article_date: req.body.article_date,
  });

  try {
    let createdUser = await newArticle.save();
    res.status(200).json(createArticle);
  } catch (error) {
    res.tatus(500).json({ message: error });
  }
}

async function updateArticle(req, res) {
  let id = req.params.id;
  try {
    let updatedArticle = await Article.findByIdAndUpdate(id, {
      article_title: req.body.article_title,
      article_article: req.body.article_article,
      article_imgUrl: req.body.article_imgUrl,
      article_author: req.body.article_author,
      article_date: req.body.article_date,
    });
    res.tatus(200).json(updatedArticle);
  } catch (error) {
    res.tatus(500).json({ message: error });
  }
}

async function delteArticle(req, res) {
  let id = req.params.id;
  try {
    await Article.findByIdAndDelete(id);
    res.tatus(200).json("Article Delected!");
  } catch (error) {
    res.tatus(500).json({ message: error });
  }
}

module.exports = {
  getAllArticles,
  getArticle,
  createArticle,
  updateArticle,
  delteArticle,
};
