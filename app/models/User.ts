import mongoose, { Schema, Types } from "mongoose";
import { BotDocument } from "./Bot";

interface IUser {
  username: string;
  email: string;
  password: string;
  image: string;
  role: string;
  isPro: boolean;
  metaAddress: string;
  membership: boolean;
  tokens: String;
  count: String;
  signature: string;
  mainBot: Types.ObjectId | BotDocument;
}

// TODO: Make it better......
export interface UserDocument extends IUser, Document {}

const UserSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      min: 4,
      max: 24,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    membership: {
      type: Boolean,
      default: false
    },
    tokens: {
      type: String,
      default: "12"
    },
    count: {
      type: String,
      default: "24"
    },
    image: {
      type: String,
    },
    metaAddress: {
      type: String,
    },
    signature: {
      type: String,
    },
    mainBot: {
      type: Schema.Types.ObjectId,
      ref: "Bot",
    },
    role: {
      type: String,
      default: "USER",
      enum: ["USER", "ADMIN", "CAPTAIN"],
    },
  },
  { timestamps: true }
);

let UserModel: mongoose.Model<IUser>;

try {
  // Try to retrieve an existing model
  UserModel = mongoose.model<IUser>("User");
} catch (e) {
  // If the model doesn't exist, define it
  UserModel = mongoose.model<IUser>("User", UserSchema);
}

export const User = UserModel;
