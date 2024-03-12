import mongoose, { Document, Schema } from "mongoose";

interface IConversation {
  to: string;
  from: string;
  question: string;
  answer: string;
}

export interface ConversationDocument extends IConversation, Document {}

const ConversationSchema: Schema<ConversationDocument> = new Schema(
  {
    to: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
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
