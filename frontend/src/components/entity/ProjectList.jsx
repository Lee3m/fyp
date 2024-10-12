import Card from "../ui/Card";
import "./ProjectsList.scss";
const ProjectList = ({ projects }) => {
  return (
    <div className="projects">
      {projects.map((project, index) => (
        <Card key={index} title={project.title} />
      ))}
    </div>
  );
};

export default ProjectList;
