import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import stackoverflow from '../../Assets/Projects/1.png'
import pokemon from '../../Assets/Projects/2.png'
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stackoverflow}
              isBlog={false}
              title="Stack-OverFlow"
              description="Create a Stack Overflow replica with React.js frontend, Node.js backend, and Material-UI. Incorporate MongoDB for data storage, enabling full CRUD operations for questions, answers, and user profiles. Ensure scalability and user-friendly interaction while maintaining code efficiency in both frontend and backend implementations."
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
                     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokemon}
              isBlog={false}
              title="Pokemon-App"
              description="
              A Pokemon API built with C#, .NET Core, and Entity Framework offers CRUD functionality for managing Pokemon entities in a SQL Server database. Utilizing unique identifiers, it allows seamless retrieval, creation, updating, and deletion of Pokemon records, providing comprehensive data management capabilities for Pokemon entities."
            
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
