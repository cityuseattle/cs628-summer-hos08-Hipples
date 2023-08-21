import { MongoClient } from 'mongodb';

const connectionString = process.env.ATLAS_URL || "";

const client = new MongoClient(connectionString);

let conn;
try { conn = await client.connect(); } 
catch (error) { console.error(error); }

let db = conn.db("hos08");

export default db;
