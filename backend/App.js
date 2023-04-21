const express = require('express');
const cors = require('cors')
require('dotenv').config();

const Server = express();

//middlewares
Server.use(express.json());
Server.use(express.urlencoded({ extended: true }));
Server.use(cors());

//DB Connection


//Routes


//Listen
Server.listen(process.env.PORT, () => {
    console.log(`Server listen on PORT ${process.env.PORT}`)
})