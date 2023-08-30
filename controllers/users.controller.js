const User = require("../model/user.model");
const { v4: uuid } = require("uuid");

//get all users
const getAllUsers = async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).json({ status: true, data: result });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

// Get user by id
const getOneUser = async (req, res) => {
  try {
    const result = await User.find({ id: req.params.id });
    res.status(200).send({ status: true, data: result });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

//create new user
const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuid(),
      name: req.body.name,
      age: Number(req.body.age),
    });
    const result = await newUser.save();
    res
      .status(201)
      .json({ status: true, message: "Added new user", data: result });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

//update user
const updateUser = async (req, res) => {
  try {
    const updateDoc = {
      name: req.body.name,
      age: Number(req.body.age),
    };
    const result = await User.findByIdAndUpdate(req.params.id, updateDoc, {
      new: true,
    });
    res
      .status(200)
      .json({ status: true, message: "User is updated", data: result });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

//delete user
const deleteUser = async (req, res) => {
  try {
    const result = await User.deleteOne({ _id: req.params.id });
    res
      .status(200)
      .json({ status: true, message: "User is deleted", data: result });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
