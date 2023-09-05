//  import mongoose from "mongoose";
import mongoose, { connect, connection } from "mongoose";

const conn = {
  isConnected: false
};

export async function connectionDb() {

  // si esta conectado, ya no vuelve a establecer una coneccion
  if(connection.isConnected) return;

  // se conecta por primera vez
  const db = await mongoose.connect(`mongodb://localhost/nextmongocrud`);
  console.log(db.connection.db.databaseName);
  // conn.isConnected = true;
  conn.isConnected = db.connections[0].readyState;
}

// maneja la coneccion exitosa
connection.on('connected', () => {
  console.log("Mongoose is conected");
});

// maneja la coneccion erronea
connection.on('error', (err) => {
  console.log("Mongoose is not conected " + err);
});