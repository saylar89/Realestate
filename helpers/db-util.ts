import { MongoClient, ObjectId, Sort } from "mongodb";

type Comment = {
  email: string;
  text: string;
  id?: ObjectId;
};

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.kc77b.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
  const client = await MongoClient.connect(connectionString);
  return client;
};

export const insertDocument = async (
  client: MongoClient,
  collection: string,
  document: Comment
) => {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
};

export const getAllDocuments = async (
  client: MongoClient,
  collection: string,
  sort: Sort
) => {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
};
