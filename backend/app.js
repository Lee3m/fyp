// Imports
import express from "express";
import database from "./database.js";
// Configure express app
const app = express();
// Configure middleware
// Controllers
const projectsController = async (req, res) => {
  const id = req.params.id;
  const table = "projects";
  const idField = "project_id";
  const fields = ["title", "description", "aim", "status_id"];

  const extendedTable = `${table} LEFT JOIN statuses ON ${table}.status_id = statuses.status_id
        LEFT JOIN project_technologies ON ${table}.project_id = project_technologies.project_id
        LEFT JOIN technologies ON project_technologies.technology_id = technologies.technology_id`;
  const extendedFields = [
    `${fields} , statuses.name AS status, GROUP_CONCAT(technologies.name SEPARATOR ', ') AS technology`,
  ];
  let sql = `SELECT ${extendedFields} FROM ${extendedTable} GROUP BY ${fields}`;
  if (id) {
    sql += ` WHERE ${idField} = ${id}`;
  }
  let isSuccsess = false;
  let message = "";
  let result = null;
  try {
    [result] = await database.query(sql);
    if (result.length === 0) {
      message = "No projects found";
    } else {
      isSuccsess = true;
      message = "Projects found";
    }
    isSuccsess ? res.status(200).json(result) : res.status(404).json(message);
  } catch (err) {
    message = `Failed to query projects: ${err.message}`;
  }
};
// Endpoints
app.get("/api/projects", projectsController);
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
