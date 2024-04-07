import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import youtube from "../assets/projects/youtube.png";
import chat from "../assets/projects/chat.png";
import social_media from "../assets/projects/social_media.png";
import book_store from "../assets/projects/book_store.png";
import task from "../assets/projects/task.png";
import tictactoe from "../assets/projects/tictactoe.png";

const Projects = () => {
  return (
    <Container fluid className="project-section" id="Projects">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={social_media}
              isBlog={false}
              title="social media"
              description="A social media platform built with MERN stack. It allows users to create an account, post updates, follow other users, and like/comment on posts."
              ghLink="https://social-media-nithin3q.vercel.app/"
              demoLink="https://social-media-nithin3q.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book_store}
              isBlog={false}
              title="Book store"
              description="This platform features a responsive interface built with Reactjs and CSS, allowing users to easily manage their profiles and posts through CRUD activities."
              ghLink="https://github.com/nithin3q/book_store"
              demoLink="https://book-store-frontend-kappa-seven.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic tac toe"
              description="tic tac toe build with react two users can simuntanously play the game and win.works on both mobile and desktop." 
              ghLink="https://github.com/nithin3q/code-casa-task2-Tic-tac-toe"
              demoLink="https://64bd71533be6e34b3f4cc113--steady-narwhal-227149.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat application"
              description="This is a real-time chat website that allows users to connect with each other and chat in real-time. It was built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), Socket.io, Redux Toolkit, and Tailwind CSS."
              ghLink="https://github.com/nithin3q/chat_application"
              demoLink="https://chat-application-qd00.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Task manager"
              description="This is a Task Manager application built with React for the frontend. It allows users to manage their tasks efficiently by providing features such as task creation, editing, and deletion."
              ghLink="https://github.com/nithin3q/task-manager"
              demoLink="https://task-manager-uu4q.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="Youtube Clone"
              description="Developed and implemented a robust video content retrieval system utilizing the RapidAPI platform, delivering video titles, descriptions, and thumbnails in real-time.
              Technologies Used: React.js, RapidAPI, JavaScript,Material-UI.
              "
              ghLink="https://github.com/nithin3q/Youtube-clone"
              demoLink="https://utubeclone-nithins.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects