import React, { useEffect, useState } from "react";
import Card from "../ui/Card";
import axios from "axios";

const ProjectsView = () => {
  // Initialization --------------------------
  // State -----------------------------------
  const [projects, setProjects] = useState([]);
  // Handlers --------------------------------

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:5000/projects");
      if (Array.isArray(response.data.data)) {
        setProjects(response.data.data);
      } else {
        console.error("API response data is not an array");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  // View ------------------------------------

  return (
    <div className="bg-slate-300">
      <h1 className="text-7xl p-5 flex justify-center items-center mb-5">
        Projects
      </h1>
      <div className="h-screen grid grid-cols-3 gap-3">
        {projects.map((project, index) => (
          <Card key={index} title={project.title} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsView;
