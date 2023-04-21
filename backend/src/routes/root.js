const express = require('express');
const root = express.Router();

const Article = require('../models/articles.model');

root.get('/articles', async (req, res) => {
    try {
        const allArticles = await Article.find({});
        res.status(200).send(allArticles);
    } catch (e) {
        res.status(500).send(err)
    }
});

root.post('/articles', (req, res) => {
    let newArticles = new Article(req.body);
    try {
        newArticles.save();
        res.status(200).send(newArticles);
    } catch (e) {
        res.status(500).send(e);
    }
})

module.exports = root;