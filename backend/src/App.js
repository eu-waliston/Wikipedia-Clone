const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const Server = express();

//middlewares
Server.use(express.json());
Server.use(express.urlencoded({ extended: true }));
Server.use(cors());
Server.use(helmet());

//DB Connection
require("./config/database");

//Routes
const UserRouter = require("./View/user.view");
const ArticleRouter = require("./View/article.view");

Server.use("/", UserRouter);
Server.use("/", ArticleRouter);

//Listen
Server.listen(process.env.PORT, () => {
  console.log(`Server listen on PORT ${process.env.PORT}`);
});
