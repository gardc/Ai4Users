import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, "provide the datetime this feedback was submitted"],
    default: Date.now(),
  },
  feedback: {
    type: String,
    required: [true, "provide feedback text"],
    maxlength: [9999, "must not be longer than 9999 characters"],
  },
}, {
    collection: "feedback",
    
});

export default mongoose.models.FeedbackSchema ||
  mongoose.model("FeedbackSchema", FeedbackSchema);
