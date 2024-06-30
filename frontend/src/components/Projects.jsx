import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import gem from "../assets/img/gem.jpg";
import projImg3 from "../assets/img/project-img3.png";
import sparta from '../assets/img/sparta.jpg';
// import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "Gemstone Uruguay",
      description: "This project was developed for Gemstone Uruguay, a jewelry store in Uruguay, with the goal of creating a robust and efficient e-commerce platform.The application was built using modern technologies, focusing on optimal performance and an excellent user experience. Developed using 100% Typescript",
      imgUrl: gem,
      url: "https://github.com/LucasMazzarino/Gemstone",
      labels: ["React","Next.js", "TypeScript", "Payload CMS", "Express.js" , "tRPC", "Mongodb", "Zustand", "Tailwind"]
    },
    {
      title: "Sparta Gym",
      description: "Custom Software for Comprehensive Gym Managemen. This custom software was developed to provide complete administration for a gym, handling various aspects crucial to its operation. The application offers an integrated solution to manage users, courses, schedules, payments, course absences, and pending payments efficiently.",
      url: "https://github.com/LucasMazzarino/Gestion-sparta-gym",
      imgUrl: sparta,
      labels: ["Python", "Django", "Django Rest Framework", "JavaScript", "React", "Redux", "PostgreSQL"]
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Projects</h2>
                <p>Some of the most intriguing projects I've developed, both for clients and personal endeavors.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row className="cont">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}