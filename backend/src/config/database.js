const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DB_URL, { useNewUrlPArser: true });
const db = mongoose.connection();

db.on('error', () => {
    console.log('Connection Failed');
})

db.once('open', () => {
    console.log('Connection Successfully!!!');
})
