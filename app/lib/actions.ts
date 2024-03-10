"use server";

import { getIronSession } from "iron-session";
import { sessionOptions, SessionData, defaultSession } from "../lib/dictionary";
import { cookies } from "next/headers";
import dbConnect from "./db";
import { User } from "../models/User";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const login = async (state: "error wrong credentials" | "success" | "error" | undefined, formData: FormData) => {
  const session = await getSession();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await dbConnect();

    // Check user in db
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return "error wrong credentials";
    }

    console.log(existingUser);
    session.userId = existingUser._id.toString();
    session.username = existingUser.username;
    session.isPro = existingUser.isPro;
    session.role = existingUser.role;
    session.isLoggedIn = true;

    await session.save();

    // redirect("/dashboard");

    return "success";
  } catch (error) {
    console.log(error);
    return "error";
  }
};




export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

export const changePremium = async (
  id: string,
  prevState: string | object | undefined,
  formData: FormData
) => {
  await dbConnect();

  const session = await getSession();

  console.log("de session of the user", session.isPro);

  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { $set: { isPro: !session.isPro } }, // XOR the isPro field with 1
      { new: true }
    );

    console.log("User updated:", updatedUser);

    session.isPro = updatedUser?.isPro;
    await session.save();

    revalidatePath("/profile");

    // You can return any relevant data or message
    return "success";
  } catch (error) {
    console.error("Error updating user:", error);
    return { error: "An error occurred" };
  }
};
