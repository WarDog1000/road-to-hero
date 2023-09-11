import {connect, connection} from "mongoose";

const conn = {
  isConnected: false
}

export async function connectDB() {

  if(conn.isConnected) return;

  const db = await connect("mongodb://localhost:27017/nextmongocrud")
  // conn.isconnected = true
  conn.isConnected = db.connection[0].readySate
  console.log(db.connection.db.databaseName)
}

connection.on("connected", () => {
  console.log("Mongoose is connected");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error", err);
});