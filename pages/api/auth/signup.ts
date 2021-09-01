import { hashPassword } from "helpers/auth";
import { getAllDocuments, insertDocument } from "helpers/db-util";
import { MongoClient, ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

type EnterData = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
  password: string;
};

type UserType = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
  password: string;
  _id?: ObjectId;
};

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.kc77b.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

async function handler(req: NextApiRequest, res: NextApiResponse) {
  let client: MongoClient;

  try {
    client = await MongoClient.connect(connectionString);
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  if (req.method === "POST") {
    const { firstName, lastName, age, email, phone, password } =
      req.body as EnterData;

    if (
      !email ||
      !email.includes("@") ||
      !firstName ||
      firstName.trim() === "" ||
      !lastName ||
      lastName.trim() === "" ||
      !phone ||
      phone.trim() === "" ||
      !password ||
      password.trim() === "" ||
      password.trim().length < 8 ||
      !age ||
      isNaN(age) ||
      !phone ||
      phone.trim() === "" ||
      phone.trim().length > 11
    ) {
      res.status(422).json({ message: "Invald input" });
      client.close();
      return;
    }

    const db = client.db("forms-dev");

    const existingUser = await db
      .collection("signUp")
      .findOne({ email: email });

    if (existingUser) {
      res.status(422).json({ message: "User exists already!" });
      client.close();
      return;
    }

    const hashedPassword = await hashPassword(password);

    const newUser: UserType = {
      firstName,
      lastName,
      age,
      email,
      phone,
      password: hashedPassword,
    };

    let result;

    try {
      result = await insertDocument(client, "signUp", newUser);
      newUser._id = result.insertedId;
      res.status(201).json({ message: "Created User", comment: newUser });
    } catch (error) {
      res.status(500).json({ message: "Register failed" });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, "signUp", { _id: -1 });
      res.status(200).json({ comment: documents });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed!" });
    }
  }

  client.close();
}

export default handler;
