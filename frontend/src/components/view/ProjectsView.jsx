import React, { useEffect, useState } from "react";
import ProjectList from "../entity/ProjectList";
import axios from "axios";
import Pagination from "../ui/Pagination";

const ProjectsView = () => {
  // Initialization --------------------------
  // State -----------------------------------
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(9);

  const lastPostIndex = currentPage * projectsPerPage;
  const firstPostIndex = lastPostIndex - projectsPerPage;
  const currentPost = projects.slice(firstPostIndex, lastPostIndex);

  // Handlers --------------------------------
  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:5000/projects");
      if (Array.isArray(response.data)) {
        setProjects(response.data);
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
    <div className="bg-slate-300 projects flex flex-col">
      <h1 className="bg-slate-300 text-5xl p-5 flex justify-center items-center">
        Projects
      </h1>

      <ProjectList projects={currentPost} />

      <Pagination
        totalPosts={projects.length}
        postsPerPage={projectsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage} // Pass currentPage so pagination knows which page is active
      />
    </div>
  );
};

export default ProjectsView;
