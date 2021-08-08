import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type Data = {
  message: string;
  feedback?: {
    email: string;
    text: string;
  };
};

type enterData = {
  id: string;
  email: string;
  feedback: string;
}[];

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.text;

    console.log("emailIn", email);
    console.log("feedbackText", feedbackText);

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };
    //and store it in a database or file
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileData);
    data.push(newFeedback);

    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Sucess!", feedback: newFeedback });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "a1", email: "a@gmail.com", text: "Hello ,your page is wonderful" },
      {
        id: "a2",
        email: "b@gmail.com",
        text: "Hello ,your page is wonderful2",
      },
    ];

    res.status(200).json({ comment: dummyList });
  }
}

export default handler;
