// Imports
import express from "express";
import connectToDatabase from "./database.js";
import cors from "cors";
// Configure express app
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: false,
};

app.use(cors(corsOptions));
const db = await connectToDatabase();

// Configure middleware
// Controllers

const projectsController = async (req, res) => {
  const id = req.params.id;
  const table = "projects";
  const idField = "project_id";
  const fields = [
    "projects.title",
    "projects.description",
    "projects.status_id",
    "projects.aim",
  ];

  const extendedTable = `${table} LEFT JOIN statuses ON ${table}.status_id = statuses.status_id
      LEFT JOIN project_technologies ON ${table}.project_id = project_technologies.project_id
      LEFT JOIN technologies ON project_technologies.technology_id = technologies.technology_id`;
  const extendedFields = [
    `${fields.join(
      ", "
    )}, statuses.name AS status, GROUP_CONCAT(technologies.name SEPARATOR ', ') AS technology`,
  ];
  let sql = `SELECT ${extendedFields.join(", ")} FROM ${extendedTable}`;
  if (id) {
    sql += ` WHERE ${table}.${idField} = ${id}`;
  }
  sql += ` GROUP BY ${fields.join(", ")}`;

  let isSuccess = false;
  let message = "";
  let result = null;
  try {
    [result] = await db.query(sql);
    if (result.length === 0) {
      message = "No projects found";
    } else {
      isSuccess = true;
      message = "Projects found";
    }
    isSuccess
      ? res.status(200).json(result)
      : res.status(404).json({ message });
  } catch (err) {
    message = `Failed to query projects: ${err.message}`;
    res.status(500).json({ message });
  }
};

// Endpoints
app.get("/api/projects", projectsController);
app.get("/api/projects/:id", projectsController);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
