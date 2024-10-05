import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../ui/ProjectCard";

const ProjectsView = () => {
  // State ------------------------------------------
  const [projects, setProjects] = useState([]);

  // Handlers ---------------------------------------
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // View -------------------------------------------
  return (
    <>
      <h1 className="text-center p-2 fs-1 fw-bold">Projects</h1>
      <Container className="container-fluid grid">
        <Row>
          {projects.map((project, index) => (
            <Col key={index} lg={6} className="columns mb-1">
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProjectsView;
