"use server";

import { User } from "../models/User";
import dbConnect from "./db";

export const getUserProfile = async (userId: string) => {
  try {
    await dbConnect();
    const user = await User.findOne({ _id: userId });

    console.log(user, "in the profile");

    return user;
  } catch (error) {
    console.log(error);
    return "error grabbing user";
  }
};
