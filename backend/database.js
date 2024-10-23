import mysql from "mysql2/promise";

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PSWD || "",
  database: process.env.DB_NAME || "projectsdb",
  port: process.env.DB_PORT || 3306,
  namedPlaceholders: true,
};

let database = null;

async function connectToDatabase() {
  try {
    database = await mysql.createConnection(dbConfig);
    console.log("Database connection successful!");
  } catch (err) {
    console.error("Error connecting to the database:", err.message);
    process.exit();
  }

  return database;
}

export default connectToDatabase;
