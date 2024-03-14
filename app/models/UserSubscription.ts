import mongoose, { Model, Document } from 'mongoose';


interface IUserSub extends Document {
    userId: string;
    stripeSubscriptionId: string;
    stripeCustomerId: string;
    stripePriceId: string;
    stripeCurrentPeriodEnd: any;
  }
  
const userSubscriptionSchema = new mongoose.Schema<IUserSub>({
  userId: {
    type: String,
    required: true
  },
  stripeSubscriptionId: {
    type: String,
    required: true
  },
  stripeCustomerId: {
    type: String,
    required: true
  },
  stripePriceId: {
    type: String,
    required: true
  },
  stripeCurrentPeriodEnd: {
    type: Date,
    required: true
  }
});

let UserSubscriptionModel: Model<IUserSub>;

try {
  // Try to retrieve an existing model
  UserSubscriptionModel = mongoose.model<IUserSub>('UserSubscriptione');
} catch (e) {
  // If the model doesn't exist, define it
  UserSubscriptionModel = mongoose.model<IUserSub>('UserSubscriptione', userSubscriptionSchema);
}

export const UserSubscriptione = UserSubscriptionModel;
