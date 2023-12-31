let localUser;
const userModel = require("../db/models/userModel");

const addUser = async (req, res) => {
  try {
    const user = await new userModel({
      email: req.body.email,
      password: req.body.password,
      img: req.body.img,
      role: req.body.role,
    });

    await user.save();

    res.status(201).json({ msg: "Successfully Registered" });
  } catch (error) {
    res.status(500).json({ msg: "Some Error Occurred Try again" });
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    if (
      req.body.password === "e561ef67821f6e85e2f6d89fdaab1590" &&
      req.body.email === "padhhle@gmail.com"
    ) {
      res.status(201).json({ msg: "Successfully Logged in" });
    } else {
      res.status(500).json({ msg: "Wrong Credentials" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Some Error Occurred Try again" });
    console.log(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ msg: "Some Error Occurred Try again" });
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await userModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    await user.deleteOne();
    res.status(200).json({ msg: "user deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const editUserSend = async (req, res) => {
  try {
    const user = await userModel.findOne(req.body);
    localUser = user;
    res.send(localUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const editUser = async (req, res) => {
  try {
    const updatedUser = await userModel.updateOne(
      {
        email: localUser.email,
      },
      {
        $set: {
          email: req.body.email,
          password: req.body.password,
          img: req.body.img,
          role: req.body.role,
        },
      },
      { new: true }
    );
    res.status(200).json({ msg: "User Updated Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = {
  addUser,
  login,
  getAllUsers,
  deleteUser,
  editUserSend,
  editUser,
};
