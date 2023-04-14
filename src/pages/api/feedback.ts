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

    // TODO: Add implementation for storing the data in our mongoDB database.

    console.log("Testing: received", message, "as a feedback message.");
    res.status(200).json({ message: "Feedback submitted successfully." });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}
