import mysql from "mysql2/promise";

const dbConfig = {
  database: process.env.DB_NAME || "projectsdb",
  port: process.env.DB_PORT || 3306,
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PSWD || "",
  namedPlaceholders: true,
};

let database = null;

try {
  database = await mysql.createConnection(dbConfig);
} catch (err) {
  console.log("Error connecting to database connection" + err.message);
  process.exit();
}

export default database;
