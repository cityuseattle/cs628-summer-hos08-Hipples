import { MongoClient } from 'mongodb';

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

const connectToDB = async () => {
  try {
    const conn = await client.connect();
    return conn.db("hos08");
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const db = connectToDB();

export default db;
