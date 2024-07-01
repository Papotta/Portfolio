import { Container, Row, Col } from "react-bootstrap";
import { Icon } from '@iconify/react';   

export const Skills = () => {

  document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.skill .item');
  
    const isInView = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    const runAnimation = () => {
      items.forEach((item) => {
        if (isInView(item)) {
          item.classList.add('in-view');
        } else {
          item.classList.remove('in-view');
        }
      });
    };
  
    window.addEventListener('scroll', runAnimation);
    runAnimation();
  });
  
  return (
    <section className="skill" id="skills">
      <Container>
      <div className="skill-bx">
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={3} className="text-center mb-4">
            
              <h2>Skills</h2>
              <p>Languages and technologies I use and master the most.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {skills.map((skill, index) => (
            <Col key={index} xs={6} md={4} lg={2} className="text-center mb-4">
              <div className="item">
                <span className="items">
                  <Icon icon={skill.icon} width="80px" height="60" />
                  <h5>{skill.name}</h5>
                </span>
              </div>
            </Col>
          ))}
        </Row>
        </div>
      </Container>
    </section>
  )
}

const skills = [
  { icon: "logos:javascript", name: "JavaScript" },
  { icon: "logos:react", name: "React" },
  { icon: "logos:redux", name: "Redux" },
  { icon: "cib:next-js", name: "Next.js" },
  { icon: "devicon:vuejs", name: "Vue.js" },
  { icon: "logos:python", name: "Python" },
  { icon: "skill-icons:django", name: "Django" },
  { icon: "devicon-plain:djangorest-wordmark", name: "DRF" },
  { icon: "vscode-icons:file-type-html", name: "HTML" },
  { icon: "vscode-icons:file-type-css", name: "CSS" },
  { icon: "devicon:typescript", name: "Typescript" },
  { icon: "skill-icons:expressjs-light", name: "Express" },
  { icon: "simple-icons:payloadcms", name: "Payload CMS" },
  { icon: "vscode-icons:file-type-mongo", name: "MongoDB" },
  { icon: "skill-icons:aws-light", name: "AWS" },
  { icon: "logos:bootstrap", name: "Bootstrap" },
  { icon: "skill-icons:tailwindcss-dark", name: "Tailwind CSS" },
  { icon: "skill-icons:git", name: "Git" },
  { icon: "logos:postgresql", name: "PostgreSQL" },
  { icon: "devicon:java", name: "Java" }
];