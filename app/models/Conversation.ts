import mongoose, { Document, Schema } from "mongoose";

interface IConversation {
  to: any;
  from: any;
  question: string;
  answer: string;
}

export interface ConversationDocument extends IConversation, Document {}

const ConversationSchema: Schema<ConversationDocument> = new Schema(
  {
    // user
    to: {
      type: Schema.Types.ObjectId,
      ref: "BotBaby",
    },
    // 
    from:  {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

let ConversationModel: mongoose.Model<IConversation>;

try {
  // Try to retrieve an existing model
  ConversationModel = mongoose.model<IConversation>("Conversation");
} catch (e) {
  // If the model doesn't exist, define it
  ConversationModel = mongoose.model<IConversation>(
    "Conversation",
    ConversationSchema
  );
}

export const Conversation = ConversationModel;
