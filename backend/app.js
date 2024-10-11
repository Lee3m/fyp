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
      projects.aim, 
      statuses.name AS status, 
      GROUP_CONCAT(technologies.name SEPARATOR ', ') AS technology
    FROM 
      projects
    LEFT JOIN statuses ON projects.status_id = statuses.status_id
    LEFT JOIN project_technologies ON projects.project_id = project_technologies.project_id
    LEFT JOIN technologies ON project_technologies.technology_id = technologies.technology_id
    GROUP BY 
      projects.title, 
      projects.description, 
      projects.aim, 
      statuses.name;
  `;

  pool.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching projects: ", err); // Log the error for debugging
      return res.status(500).send({
        message: "An error occurred while fetching projects",
        error: err,
      });
    }

    res.status(200).json({
      message: "Projects fetched successfully",
      data: results,
    });
  });
});

// Listens to port 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
