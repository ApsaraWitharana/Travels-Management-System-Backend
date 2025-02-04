import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "Tour",
    },
    username: {
      type: String,
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
    },
      rating: {
          type: Number,
          required: true
      },
      userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User', // Make sure this points to the User model
          required: true
      },
      tour: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Tour', // Make sure this points to the Tour model
          required: true
      }
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);
