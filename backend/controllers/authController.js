import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import prisma from "../prisma/index.js";
import { generateToken } from "../utils/generateToken.js";
import { sendVerificationEmail } from "../mailtrap/emails.js";

// @description  Register a new User
// @route  POST /auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, username } = req.body;
  //
  if (!email || !password || !name) {
    res.status(404);
    throw new Error("Please fill in the neccessary credentails");
  }
  // check if the user exist
  const userExist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (userExist) {
    res.status(404);
    throw new Error("The user does exist");
  }

  const verificationToken = Math.floor(9000 * Math.random() + 1000).toString();
  const verifiedTokenExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
  // console.log(verifiedTokenExpiresAt);

  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);
  const Tempuser = {
    email,
    password: hashedpassword,
    name,
    username,
    verifiedTokenExpiresAt,
    verifiedToken: verificationToken,
  };
  const user = await prisma.user.create({
    data: Tempuser,
  });
  // sendVerificationEmail(email, verificationToken);

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  const { password: _, ...userWithoutPassword } = user;
  res.status(200).json({
    user: userWithoutPassword,
  });
});

// @description  Login a new User
// @route  POST /auth/login
// @access  Public
const LoginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(404);
    throw new Error("Please fill in the valid credentails");
  }
  // Find the user in the database

  const userExist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!userExist) {
    res.status(404);
    throw new Error("You do not have any record with us!!!");
  }
  const verifyPassword = await bcrypt.compare(password, userExist.password);
  if (!verifyPassword) {
    res.status(404);
    throw new Error("Please provide a valid Password!!");
  }

  if (userExist) {
    generateToken(res, userExist?.id);
  }
  // sendVerificationEmail(email, verificationToken);

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  const { password: _, ...userWithoutPassword } = userExist;
  res.status(200).json({
    user: userWithoutPassword,
  });
});

// @description  Verify a new User's email
// @route  POST /auth/verify/email
// @access  Public
const VerifyEmail = asyncHandler(async (req, res) => {
  // get the code
  const { code } = req.body;
  // find the user with the code
  const user = await prisma.user.findUnique({
    where: {
      verifiedToken: code,
      verifiedTokenExpiresAt: { gte: Date.now() },
    },
  });

  // check if the code has not been expired
  if (!user) {
    res.status(404);
    throw new Error("The verfication code has been expired");
  }
  // update the user
  const updatedUser = await prisma.user.update({
    where: {
      id: user?.id,
      emailVerified: true,
      verifiedToken: null,
      verifiedTokenExpiresAt: null,
    },
  });

  res.status(200).json({ user: updatedUser });
});
// @description  Reset a new User's Password
// @route  POST /auth/reset/password
// @access  Public
const ResetPassword = asyncHandler(async (req, res) => {});
const LogOutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
});

export { registerUser, LoginUser, ResetPassword, VerifyEmail, LogOutUser };
