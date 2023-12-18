import { Container, Row, Col } from "react-bootstrap";
import { Icon } from '@iconify/react';   

export const Skills = () => {

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
              </h2>
              <p>Languages and technologies I use and master the most .</p>
              <section className="skill-icons">
                <div className="item">
                  <span className="items">
                  <Icon icon="logos:javascript" width="80px" height="60"  />
                    <h5>JavaScript</h5>
                  </span>
                  <span className="items">
                    <Icon width="80px" height="60" icon="logos:react" />
                    <h5>React</h5>
                  </span>
                  <span className="items">
                    <Icon width="80px" height="60" icon="logos:redux" />
                    <h5> Redux</h5>
                  </span>
                  <span className="items">
                    <Icon icon="cib:next-js" width="80px" height="60" />
                    <h5> Next</h5>
                  </span>
                  <span className="items">
                      <Icon icon="devicon:vuejs" width="80px" height="60" />
                      <h5>Vue.js</h5>
                  </span>
                </div>
              <div className="item">
                <span className="items">
                <Icon icon="logos:python" width="80px" height="60"  />
                  <h5>Python</h5>
                </span>
                <span className="items">
                  <Icon width="80px" height="60"  icon="skill-icons:django" />
                  <h5>Django</h5>
                  </span>
                <span className="items">
                  <Icon width="100px" height="150" icon="devicon-plain:djangorest-wordmark" />
                </span>
                <span className="items">
                  <Icon width="80px" height="60" icon="vscode-icons:file-type-html"  />
                  <h5>HTML</h5>
                </span>
                <span className="items">
                  <Icon width="80px" height="60" icon="vscode-icons:file-type-css" />
                  <h5>CSS</h5>
                </span>
              </div>
              <div className="item">
                  <span className="items">
                  <Icon icon="logos:bootstrap" width="80px" height="60"  />
                    <h5>Bootstrap</h5>
                  </span>
                  <span className="items">
                  <Icon icon="skill-icons:tailwindcss-dark" width="80px" height="60"  />
                    <h5>Bootstrap</h5>
                  </span>
                  <span className="items">
                  <Icon icon="skill-icons:git" width="80px" height="60"  />
                    <h5>Git</h5>
                  </span>
                  <span className="items">
                  <Icon icon="logos:postgresql" width="80px" height="60"  />
                    <h5>PostgresSQL</h5>
                  </span>
                  <span className="items">
                  <Icon icon="devicon:java" width="80px" height="60"  />
                    <h5>Java</h5>
                  </span>
              </div>
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}