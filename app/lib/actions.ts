"use server";

import { getIronSession } from "iron-session";
import { sessionOptions, SessionData, defaultSession } from "../lib/dictionary";
import { cookies } from "next/headers";
import dbConnect from "./db";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { hash } from "bcryptjs";
import { User } from "../models/User";
import { SendContactEmail } from "./schema";
import { sendMail } from "./mail";
import { writeFile } from "fs/promises";
import { getUserProfile } from "./User";
import { Bot } from "../models/Bot";
import { Conversation } from "../models/Conversation";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const login = async (
  state: "error wrong credentials" | "success" | "error" | undefined,
  formData: FormData
) => {
  const session = await getSession();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await dbConnect();

    // Check user in db
    const existingUser = await User.findOne({ email });

    console.log(password);

    if (!existingUser) {
      return "error wrong credentials";
    }

    console.log(existingUser);

    session.userId = existingUser._id.toString();
    session.username = existingUser.username;
    session.email = existingUser.email;
    session.isPro = existingUser.isPro;
    session.role = existingUser.role;

    session.tokens = existingUser.tokens as string;
    session.count = existingUser.count as string;

    session.isLoggedIn = true;

    await session.save();

    // redirect("/dashboard");

    return "success";
  } catch (error) {
    console.log(error);
    return "error";
  }
};

export const Registrar = async (
  state: string | undefined,
  formData: FormData
) => {
  try {
    const { username, email, password, metaAddress, sig } =
      Object.fromEntries(formData);

    await dbConnect();

    const UsrExist = await User.findOne({ username });

    if (UsrExist) {
      return "there is a user";
    }

    const P$P = await hash(password as string, 10);

    const newUser = new User({
      username,
      password: P$P,
      email,
      metaAddress: metaAddress as string | null,
      sig: sig as string | null,
    });

    await newUser.save();

    return "Authentication success";
  } catch (error) {
    console.log(error);

    return "notnoice";
  }
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

export async function ContactEmail(
  id: string,
  prevState: string | object | undefined,
  formData: FormData
) {
  try {
    const data = Object.fromEntries(formData.entries());

    const validatedFields = SendContactEmail.safeParse(data);

    if (!validatedFields.success) {
      return {
        message: "seemed to have not worked properly, try again.",
      };
    }

    const { to, name, subject, content } = validatedFields.data;

    await sendMail({
      to: process.env.SMTP_EMAIL as string,
      name: name, // get user name
      subject,
      content,
    });

    return { message: "i am dead" };
  } catch (error) {
    console.log(error);
    return { message: "I am sorry but the request failed.... you got denied" };
  }
}

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

export const handleUserUpdate = async (
  id: string | undefined,
  prevState: string | object | undefined,
  formData: FormData
) => {
  try {
    await dbConnect();

    const user = await getUserProfile(id as string);
    const sessionUser = await getSession();

    const { username, password, metaAccount, email } =
      Object.fromEntries(formData);

    const updateFields: Record<string, any> = {};

    const imageBan = (formData.get("image") as File) || null;

    let rest;

    if (username && username !== sessionUser.username) {
      sessionUser.username = username as string;
      updateFields.username = username;
    }

    if (email && email !== sessionUser.email) {
      sessionUser.email = email as string;
      updateFields.email = email;
    }

    if (metaAccount && metaAccount !== sessionUser.metaAccount) {
      sessionUser.metaAccount = metaAccount as string;
      updateFields.metaAddress = metaAccount;
    }

    if (imageBan !== null && imageBan.size !== 0) {
      console.log("There is an image");

      // 69 - create buffer
      const fileBuffer = await (imageBan as File).arrayBuffer();
      const buffer = Buffer.from(fileBuffer);
      // set path
      const path = `${process.cwd()}/public/profileImage/${
        crypto.randomUUID() + imageBan.name
      }`;

      // Write image
      await writeFile(path, buffer);
      rest = path.split(`${process.cwd()}/public`)[1];

      sessionUser.image = rest;
      updateFields.image = rest;
    }

    let newPassword;

    if (password && password !== "") {
      newPassword = await hash(password as string, 10);
      updateFields.password = newPassword;
    }

    updateFields.updatedAt = new Date();

    const updatedUser = await User.findByIdAndUpdate(
      id as string,
      updateFields,
      {
        new: true, // Return the modified document rather than the original
        runValidators: true, // Run model validations on update
      }
    );

    console.log(updatedUser);

    await sessionUser.save();

    revalidatePath(`/homepage/profile/${id}`);

    return "success";
  } catch (error) {
    console.log(error);
    return "seems like there was an error updating user";
  }
};

export const handleUserComms = async (
  prevState: string | object | undefined,
  formData: FormData
) => {
  try {
    await dbConnect();
    const user = await getSession();
    let imagepath;

    const { botName, botPurpose, ImageName } = Object.fromEntries(formData);

    // Check if ImageName is a File object
    if (ImageName instanceof File && ImageName.size > 0) {
      const fileBuffer = await ImageName.arrayBuffer();
      const buffer = Buffer.from(fileBuffer);

      const path = `${process.cwd()}/public/botImages/${
        crypto.randomUUID() + ImageName.name
      }`;

      await writeFile(path, buffer);

      const rest = path.split(`${process.cwd()}/public`)[1];

      imagepath = rest;
    }

    const payload = {
      name: botName,
      mainPurpose: botPurpose,
      image: imagepath || null,
      botParent: user.userId,
    };

    const newBot = new Bot(payload);

    await newBot.save();

    return "success";
  } catch (error) {
    console.log(error);
    return "error";
  }
};

export const handleUserComments = async (
  prevState: string | object | undefined,
  formData: FormData
) => {
  try {
    await dbConnect();
    const user = await getSession();

    const { urbanText, botId } = Object.fromEntries(formData);

    const payload = {
      question: urbanText,
      to: botId,
      from: user.userId,
      answer:
        "Biltong chop boudin short loin, flank chislic corned beef venison andouille. Tongue pastrami leberkas kevin, venison sausage hamburger chicken meatball doner tenderloin buffalo bacon shoulder swine. Beef ribs corned beef tongue tail venison beef pork belly ham hock doner bacon tenderloin t-bone. Corned beef strip steak sirloin, pork loin turkey burgdoggen kevin boudin alcatra venison. Tail kielbasa sausage, shoulder meatball ham hock spare ribs pork loin hamburger bresaola tri-tip. Capicola kevin shoulder tail, leberkas andouille flank frankfurter. Jowl prosciutto beef porchetta, flank boudin turkey.",
    };

    const newBot = new Conversation(payload);

    await newBot.save();

    return "success";
  } catch (error) {
    console.log(error);
    return "error";
  }
};

export const handleAiRegisterForm = async (
  prevState: string | object | undefined,
  formData: FormData
) => {
  try {


    
    return "success";
  } catch (error) {
    console.log(error);
    return "error";
  }
};
