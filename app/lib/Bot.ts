"use server";

import { Bot } from "../models/Bot";
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

export const getUserBot = async (userId: string) => {
  try {
    await dbConnect();
    const userBot = await Bot.find({ botParent: userId });
    return userBot;
  } catch (error) {
    console.log(error);
    return "error grabbing user";
  }
};
