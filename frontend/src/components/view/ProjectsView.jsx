import React, { useEffect, useState } from "react";
import ProjectList from "../entity/ProjectList";
import Pagination from "../ui/Pagination";
import API from "../API/API";

const ProjectsView = () => {
  // Initialization --------------------------

  const projectsEndpoint = "/projects";
  // State -----------------------------------
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(9);

  const lastPostIndex = currentPage * projectsPerPage;
  const firstPostIndex = lastPostIndex - projectsPerPage;
  const currentPost = projects.slice(firstPostIndex, lastPostIndex);

  // Handlers --------------------------------

  useEffect(() => {
    const fetchProjects = async () => {
      const endpoint = "projects";
      const { isSuccess, message, result } = await API.get(projectsEndpoint);
      if (isSuccess) {
        setProjects(result);
      } else {
        console.error(message);
      }
    };

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
