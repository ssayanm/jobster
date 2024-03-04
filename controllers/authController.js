import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;

  req.body.role = isFirstAccount ? "admin" : "user";
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "User created" });
};

export const login = async (req, res) => {
  res.send("login");
  //   const user = await User.findById(req.params.id);
  //   res.status(StatusCodes.CREATED).json({ user });
};
