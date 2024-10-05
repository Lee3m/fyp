import { Card, Button } from "react-bootstrap";
import "./ProjectCard.scss";

const ProjectCard = ({ project }) => {
  return (
    <Card className="project-card">
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="fs-3">{project.title}</Card.Title>
        <Card.Subtitle className="pc-subtitle">{project.status}</Card.Subtitle>
        <Card.Text className="project-text">
          <span className="fw-bold">Description:</span> {project.description}
        </Card.Text>
        <Card.Text className="project-text">
          <span className="fw-bold">Technologies:</span> {project.technology}
        </Card.Text>
        <Button variant="primary">View</Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
