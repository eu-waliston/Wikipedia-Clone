const User = require("../Model/user.model");

async function getAllUsers(req, res) {
  try {
    let users = User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function getUser(req, res) {
  let id = req.params.id;
  try {
    let user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function createUser(req, res) {
  let newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    date_nasc: req.body.date_nasc,
  });
  try {
    let user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function updateUser(req, res) {
  let id = req.params.id;
  try {
    let user = await User.findByIdAndUpdate(id, {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      date_nasc: req.body.date_nasc,
    });

    res.status(200).json(user);
  } catch (error) {
    res.tatus(500).json({ message: error });
  }
}

async function deleteUser(req, res) {
  let id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json("User delected!");
  } catch (error) {
    res.tatus(500).json({ message: error });
  }
}

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
