import { MongoClient, ObjectId, Sort } from "mongodb";

type Comment = {
  email: string;
  text: string;
  id?: ObjectId;
};

export const connectDatabase = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://saylar:WRsU64ChToWSL2nc@cluster0.kc77b.mongodb.net/forms?retryWrites=true&w=majority"
  );
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
