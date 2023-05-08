import feedback from "../../db/models/feedback";
import dbConnect from "../../db/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";

type FeedbackData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { message }: FeedbackData = req.body;

    if (!message) {
      res.status(400).json({ error: "Message field is required." });
      return;
    }

    // Create and store new feedback to db.

    await dbConnect(); // connect to db
    const newFeedback = new feedback({feedback: message});
    await newFeedback.save();

    res.status(200).json({ message: "Feedback submitted successfully." });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}
