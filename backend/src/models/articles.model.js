const mongoose = require('mongoose');

const Articles = mongoose.Schema({
    title: {type: String, required: true},
    article: {type: String, required: true},
})

module.exports = mongoose.model('articles', Articles);