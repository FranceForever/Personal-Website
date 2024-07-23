import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import './index.css';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Certifications from './Certifications';
import Education from './Education';
import Involvements from './Involvements';
import Hobbies from './Hobbies';

// Import logos
import javaLogo from './logos/java.png';
import pythonLogo from './logos/python.png';
import cLogo from './logos/c-solid.png';
import jsLogo from './logos/js.png';
import reactLogo from './logos/react.png';
import htmlCssLogo from './logos/html5.png';
import kotlinLogo from './logos/android.png';
import vhdlLogo from './logos/microchip-solid.png';

// Import job images
import hdfcErgoLogo from './logos/hdfcergo_logo.jpeg'; // Placeholder image
import nowFloatsLogo from './logos/nowfloats_logo.png'; // Placeholder image

// Define the theme colors
const theme = {
  light: {
    background: '#e1f5fe', // Light sky blue
    primary: '#ffffff', // White
    text: '#000000', // Black for text
    buttonBackground: '#64b5f6', // Bright blue for buttons
    buttonHover: '#42a5f5', // Darker bright blue for button hover
  },
  dark: {
    background: '#263238', // Dark mode background
    primary: '#000000', // Black for dark mode
    text: '#ffffff', // White for text in dark mode
    buttonBackground: '#455a64', // Dark mode button
    buttonHover: '#37474f', // Dark mode button hover
  },
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
      <Router>
        <PageContainer>
          <Header darkMode={darkMode}>
            <Navbar>
              <NavItem to="/">Home</NavItem>
              <NavItem to="/about">About Me</NavItem>
              <NavItem to="/skills">Technical Skills</NavItem>
              <NavItem to="/experience">Work Experience</NavItem>
              <NavItem to="/projects">Projects</NavItem>
              <NavItem to="/certifications">Certifications</NavItem>
              <NavItem to="/education">Education</NavItem>
              <NavItem to="/involvements">University Involvements</NavItem>
              <NavItem to="/hobbies">Hobbies</NavItem>
            </Navbar>
            <ToggleSwitch onClick={toggleDarkMode}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </ToggleSwitch>
          </Header>
          <Main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Home />} />
              <Route path="/projects" component={Projects} />
              <Route path="/certifications" component={Certifications} />
              <Route path="/education" component={Education} />
              <Route path="/involvements" component={Involvements} />
              <Route path="/hobbies" component={Hobbies} />
            </Routes>
          </Main>
          <Footer />
        </PageContainer>
      </Router>
    </ThemeProvider>
  );
};

const Home = () => (
  <Section>
    <h2>Welcome to My Portfolio</h2>
    <p>Navigate through the sections using the navbar above.</p>
  </Section>
);

const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  width: 100vw;
  animation: ${fadeIn} 1s ease-in-out;
  text-align: center;
`;

const Header = styled.header`
  background-image: url(${({ darkMode }) => darkMode ? '/dark_mode_photo.jpeg' : '/light_mode_photo.png'});
  background-size: cover;
  background-position: center;
  height: 100vh; /* Adjust the height to cover the entire window */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Main = styled.main`
  padding: 20px;
  text-align: center;
`;

const Section = styled.section`
  margin: 20px 0;
  padding: 20px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in-out;
  text-align: center;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: ${({ theme }) => theme.primary};
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.buttonHover};
  }
`;

const Footer = () => (
  <footer>
    <p>&copy; 2024 Armaan Ghosh</p>
    <div className="contact-info">
      <p>
        <a href="tel:+15489220973">+1 548-922-0973</a> | 
        <a href="mailto:a65ghosh@uwaterloo.ca">a65ghosh@uwaterloo.ca</a>  |  
        <a href="#">LinkedIn</a> |  
        <a href="#">GitHub</a>
      </p>
    </div>
  </footer>
);

const ToggleSwitch = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.buttonBackground}; /* Use theme button background color */
  color: ${({ theme }) => theme.text}; /* Text color */
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHover}; /* Use theme button hover color */
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
