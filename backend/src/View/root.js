const express = require('express');
const root = express.Router();

const Article = require('../models/articles.model');
const { default: mongoose } = require('mongoose');


root.get('/articles', async (req, res) => {
    try {
        const allArticles = await Article.find({});
        res.status(200).send(allArticles);
    } catch (e) {
        res.status(500).send(err)
    }
});

root.get('/articles/:id', async (req,res) => {
    let id = req.params.id; 
    try {
        let article = await Article.findById(id);
        res.status(200).send(article);
        
    } catch (error) {
        res.status(500).send('Article Not Found')
    }
})

root.post('/articles', (req, res) => {
    let newArticles = new Article(req.body);
    try {
        newArticles.save();
        res.status(200).send(newArticles);
    } catch (e) {
        res.status(500).send(e);
    }
})

root.delete('/articles/:id', async (req,res) => {
    let _id = req.params.id;
    try {
        await Article.findByIdAndDelete(_id);
        res.status(200).send('Article Delected');
    } catch (error) {
        res.status(500).send('Article Not Found')
    }
})

module.exports = root;