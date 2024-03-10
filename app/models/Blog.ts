import mongoose from "mongoose";

interface IBlog {
  title: string;
  description: string;
  content: string;
  image: string;
  category: string;
  featured: boolean
}

const BlogSchema = new mongoose.Schema<IBlog>(
  {
    title: {
      type: String,
      require,
    },
    description: {
      type: String,
      require,
    },
    content: {
      type: String,
      require,
    },
    image: {
      type: String,
      require,
    },
    category: {
      type: String,
      require,
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

let BlogModel: mongoose.Model<IBlog>;

try {
  // Try to retrieve an existing model
  BlogModel = mongoose.model<IBlog>("Blog");
} catch (e) {
  // If the model doesn't exist, define it
  BlogModel = mongoose.model<IBlog>("Blog", BlogSchema);
}

export const Blog = BlogModel;
