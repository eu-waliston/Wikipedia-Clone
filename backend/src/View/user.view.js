const express = require("express");
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../Model/user.model");

const UserRouter = express.Router();

UserRouter.get("wikipedia/user", getAllUsers);
UserRouter.get("wikipedia/user/:id", getUser);
UserRouter.post("wikipedia/user/:id", createUser);
UserRouter.put("wikipedia/user/:id", updateUser);
UserRouter.delete("wikipedia/user/:id", deleteUser);

module.exports = UserRouter;
