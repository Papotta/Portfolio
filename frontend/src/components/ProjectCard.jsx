import { Col } from "react-bootstrap";
import github from '../assets/img/github.svg'

export const ProjectCard = ({ title, description, imgUrl, url, labels }) => {
  return (
    <Col size={12} sm={8} md={8}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt='project' />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      {labels ? 
      <div className="labels-container">
        {labels.map((label, index) => (
            <span
              key={index}
              className="label"
            >
              {label}
            </span>
          ))}
      </div>
      : null}
       <div className="project-icon">
        <a href={url}
          target="_blank"
          rel="noopener noreferrer">
          <img src={github} alt="github" />
        </a>
       </div>
    </Col>
  )
}