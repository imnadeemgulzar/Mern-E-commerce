import { comparePassword, hashPassword } from "../helpers/hashPassword.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";
export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // validation
    if (!name) {
      return res.send({
        message: "name is required",
      });
    }
    if (!email) {
      return res.send({
        message: "email is required",
      });
    }
    if (!password) {
      return res.send({
        message: "password is required",
      });
    }
    // check user
    const existingUser = await userModel.findOne({ email });

    // existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "user already registered, please login",
      });
    }
    // hashed password
    const hashedPassword = await hashPassword(password);

    // register user
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "user registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in registration",
      error,
    });
  }
};
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "invalid email or password",
      });
    }
    // check user
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(200).send({
        success: false,
        message: "user is not registered",
      });
    }
    // check for password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "password is wrong",
      });
    }
    // create jwt-token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in login",
      error,
    });
  }
};
// test controller
export const testController = (req, res) => {
  res.send("protected route");
};
