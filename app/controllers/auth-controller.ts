import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model";
import dotenv from 'dotenv';
dotenv.config();


const secretKey = process.env.JWT_SECRET as string; 

if (!secretKey) {
    throw new Error("JWT_SECRET is not defined in the environment variables.");
}


const register = async (req: Request, res: Response) => {
  const { username, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ username, password: hashedPassword, role });
  await user.save();

  res.status(201).json({ message: "User registered successfully" });
};

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user._id , role: user.role }, secretKey, { expiresIn: '1h' });

  res.json({ token });
};

export default { register, login };
