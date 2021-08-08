import {
  connectDatabase,
  getAllDocuments,
  insertDocument,
} from "../../helpers/db-util";
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";

type EnterData = {
  email: string;
  text: string;
};

type Comment = {
  email: string;
  text: string;
  _id?: ObjectId;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  let client: MongoClient;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  if (req.method === "POST") {
    const { email, text } = req.body as EnterData;

    if (!email || !email.includes("@") || !text || text.trim() === "") {
      res.status(422).json({ message: "Invald input" });
      client.close();
      return;
    }

    const newComment: Comment = {
      email,
      text,
    };

    let result;

    try {
      result = await insertDocument(client, "contactUs", newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ message: "comment added", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Inserting comment failed!" });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, "contactUs", { _id: -1 });
      res.status(200).json({ comment: documents });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed!" });
    }
  }

  client.close();
}

export default handler;
