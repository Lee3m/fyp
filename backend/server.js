const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173"],
};

const port = 5000;

app.use(cors(corsOptions));
app.use(express.json());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "projectsdb",
});

// QUERIES

app.get("/projects", (req, res) => {
  const sql = `
        SELECT 
            projects.title, 
            projects.description, 
            statuses.name AS status, 
            GROUP_CONCAT(technologies.name SEPARATOR ', ') AS technology
        FROM projects
        JOIN statuses ON projects.status_id = statuses.status_id
        JOIN project_technologies ON projects.project_id = project_technologies.project_id
        JOIN technologies ON project_technologies.technology_id = technologies.technology_id
        GROUP BY projects.title, projects.description, statuses.name
    `;

  pool.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Listens to port 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
