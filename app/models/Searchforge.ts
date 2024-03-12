import mongoose, { Document, Schema, Types } from "mongoose";
import { ConversationDocument } from "./Conversation";

interface ISearchForge {
  search: string;
  answer: string;
}

export interface BotSearchDocument extends ISearchForge, Document {}

const BotForgeSchema: Schema<BotSearchDocument> = new Schema(
  {
    search: {
      type: String,
    },
    answer: {
      type: String,
    },
  },
  { timestamps: true }
);

let BotForgeModel: mongoose.Model<BotSearchDocument>;

try {
  // Try to retrieve an existing model
  BotForgeModel = mongoose.model<BotSearchDocument>("BotForgeSearch");
} catch (e) {
  // If the model doesn't exist, define it
  BotForgeModel = mongoose.model<BotSearchDocument>(
    "BotForgeSearch",
    BotForgeSchema
  );
}

export const BotForgeSearch = BotForgeModel;
