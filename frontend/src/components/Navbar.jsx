import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from '../assets/img/github.svg'



import { useEffect, useState } from 'react';

export const NavBar = () => {
  const [activeLink, setactiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scroll > 50) {
        scrolled(true);
      } else{
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll);

    return() => window.removeEventListener('scroll', onScroll);
  },[])
  
  const onUpdateActiveLink = (value) =>{
    setactiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container className='navContainer'>
        <Navbar.Brand href="#Home" className='logo'> 
        <span>Lucas Mazzarino</span>
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="#Home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Proyects</Nav.Link>
          </Nav>
           <div className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/lucas-mazzarino-594b88229/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/LucasMazzarino"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub" />
              </a>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}