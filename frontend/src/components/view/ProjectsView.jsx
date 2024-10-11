import React from "react";
import Card from "../ui/Card";

const ProjectsView = () => {
  return (
    <div className="bg-slate-300">
      <h1 className="text-7xl p-5 flex justify-center items-center mb-5">
        Projects
      </h1>
      <div className=" h-screen grid grid-cols-3 gap-3">
        <Card title="Project 1" />
        <Card title="Project 2" />
        <Card title="Project 3" />
      </div>
    </div>
  );
};

export default ProjectsView;
