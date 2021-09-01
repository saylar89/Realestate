import { hashPassword } from "helpers/auth";
import { connectDatabase } from "helpers/db-util";
import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

type UserType = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
  password: string;
  _id?: ObjectId;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return;
  }

  const { firstName, lastName, age, email, phone, password } = req.body;

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
    res.status(422).json({
      message: "Invalid input",
    });
    return;
  }

  const client = await connectDatabase();

  const db = client.db();

  const existingUser = await db.collection("signup").findOne({ email: email });

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

  const result = await db.collection("signup").insertOne(newUser);
  newUser._id = result.insertedId;
  res.status(201).json({ message: "Created user!", newUser: newUser });
  client.close();
}

export default handler;
