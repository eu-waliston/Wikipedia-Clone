const express = require('express');
const cors = require('cors')
require('dotenv').config();

const rootRouter = require('./routes/root');

const Server = express();

//middlewares
Server.use(express.json());
Server.use(express.urlencoded({ extended: true }));
Server.use(cors());

//DB Connection
require('./config/database');

//Routes
Server.use('/', rootRouter);

//Listen
Server.listen(process.env.PORT, () => {
    console.log(`Server listen on PORT ${process.env.PORT}`)
})