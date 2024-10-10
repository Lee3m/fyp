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
        select title, description, statuses.name as status, GROUP_CONCAT(technologies.name SEPARATOR ', ') as technology
from projects
left join statuses on projects.status_id = statuses.status_id
left join project_technologies on projects.project_id = project_technologies.project_id
left join technologies on project_technologies.technology_id = technologies.technology_id
group by projects.title, projects.description
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
