import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";

type EnterData = {
  email: string;
  text: string;
};

type Comment = {
  email: string;
  text: string;
  id?: ObjectId;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await MongoClient.connect(
    "mongodb+srv://saylar:WRsU64ChToWSL2nc@cluster0.kc77b.mongodb.net/forms?retryWrites=true&w=majority"
  );

  if (req.method === "POST") {
    const { email, text } = req.body as EnterData;

    if (!email || !email.includes("@") || !text || text.trim() === "") {
      res.status(422).json({ message: "Invald input" });
      return;
    }

    const newComment: Comment = {
      email,
      text,
    };

    const db = client.db();

    const result = await db.collection("contactUs").insertOne(newComment);

    newComment.id = result.insertedId;

    client.close();

    res.status(201).json({ message: "comment added", comment: newComment });
  }

  if (req.method === "GET") {
    const db = client.db();

    const documents = await db
      .collection("contactUs")
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ comment: documents });
  }

  client.close();
}

export default handler;
