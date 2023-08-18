const express = require('express');
const root = express.Router();

root.get('/', async (req, res) => {
    try {
        res.status(200).send("<h1>Welcome</h1>");
    } catch (e) {
        res.status(500).send(err)
    }
});
module.exports = root;