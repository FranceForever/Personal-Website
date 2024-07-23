import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled, { ThemeProvider, keyframes } from 'styled-components';

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

// Import FontAwesome Logos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLaptopCode, faBriefcase, faProjectDiagram, faCertificate, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

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
      <PageContainer>
      <Header>
          <HeaderButtonContainer>
            <HeaderButtonWrapper>
              <HeaderButton href="#about">
                <FontAwesomeIcon icon={faUser} size="2x" />
              </HeaderButton>
              <TooltipLeft>About</TooltipLeft>
            </HeaderButtonWrapper>
            <HeaderButtonWrapper>
              <HeaderButton href="#skills">
                <FontAwesomeIcon icon={faLaptopCode} size="2x" />
              </HeaderButton>
              <TooltipLeft>Skills</TooltipLeft>
            </HeaderButtonWrapper>
            <HeaderButtonWrapper>
              <HeaderButton href="#experience">
                <FontAwesomeIcon icon={faBriefcase} size="2x" />
              </HeaderButton>
              <TooltipLeft>Experience</TooltipLeft>
            </HeaderButtonWrapper>
          </HeaderButtonContainer>
          <ToggleSwitch onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </ToggleSwitch>
          <HeaderButtonContainer right>
            <HeaderButtonWrapper>
              <HeaderButton href="#projects">
                <FontAwesomeIcon icon={faProjectDiagram} size="2x" />
              </HeaderButton>
              <TooltipRight>Projects</TooltipRight>
            </HeaderButtonWrapper>
            <HeaderButtonWrapper>
              <HeaderButton href="#certifications">
                <FontAwesomeIcon icon={faCertificate} size="2x" />
              </HeaderButton>
              <TooltipRight>Certifications</TooltipRight>
            </HeaderButtonWrapper>
            <HeaderButtonWrapper>
              <HeaderButton href="#education">
                <FontAwesomeIcon icon={faGraduationCap} size="2x" />
              </HeaderButton>
              <TooltipRight>Education</TooltipRight>
            </HeaderButtonWrapper>
          </HeaderButtonContainer>
        </Header>
        <Main>
          <Section id="about" title="About Me">
            <p>
              Hello! I'm Armaan Ghosh, a first-year Computer Engineering student at the University of Waterloo. I have a passion for technology and love exploring new advancements in the field. I am excited to learn and grow in the world of engineering and look forward to contributing to innovative projects.
            </p>
          </Section>
          <Section id="skills" title="Technical Skills">
            <SkillsGrid>
              <SkillItem logo={javaLogo} alt="Java" name="Java" />
              <SkillItem logo={pythonLogo} alt="Python" name="Python" />
              <SkillItem logo={cLogo} alt="C/C++" name="C/C++" />
              <SkillItem logo={jsLogo} alt="JavaScript" name="JavaScript" />
              <SkillItem logo={reactLogo} alt="React" name="React" />
              <SkillItem logo={htmlCssLogo} alt="HTML/CSS" name="HTML/CSS" />
              <SkillItem logo={kotlinLogo} alt="Kotlin" name="Kotlin" />
              <SkillItem logo={vhdlLogo} alt="VHDL" name="VHDL" />
            </SkillsGrid>
          </Section>
          <Section id="experience" title="Work Experience">
            <ExperienceGrid>
              <ExperienceItem
                logo={hdfcErgoLogo}
                alt="HDFC Ergo"
                title="Frontend Engineer"
                company="HDFC Ergo General Insurance"
                duration="May 2024 – Aug 2024, Mumbai, India"
                responsibilities={[
                  'Developed and optimized user interfaces for the 1UP timesheet app using JavaScript and React, improving usability for over 50,000 customers and boosting user engagement by 35%',
                  'Designed and implemented advanced features for digital timesheet management with Firebase integration, achieving a 30% increase in timely submissions and reducing manual entry errors by 200%',
                ]}
                color="#ff7043" // Example color that matches the logo
              />
              <ExperienceItem
                logo={nowFloatsLogo}
                alt="NowFloats"
                title="Product Manager"
                company="NowFloats Technologies"
                duration="May 2024 – Aug 2024, Remote"
                responsibilities={[
                  'Conducted market research for a new marketing automation product targeting MSMEs, identifying 5 key customer segments and performing SWOT analysis',
                  'Developed go-to-market and pricing strategies using insights from 10+ industry reports and competitor analysis, ensuring competitive product positioning in the market',
                ]}
                color="#FFB900" // Example color that matches the logo
              />
            </ExperienceGrid>
          </Section>
          <Section id="projects" title="Projects">
            <Project
              name="BudgetRoyale"
              description="Developed a gamified personal finance tracking web app tailored for university students, resulting in a 30% increase in user engagement within the first month. Implemented AI-driven financial advice features using React and Firebase, helping users reduce unnecessary expenses by an average of 20% per month."
              date="June 2024 – Present"
            />
            <Project
              name="Byte Bites: Recipe Recommendation App"
              description="Developed the frontend of a recipe recommendation app for vegetarian international students using HTML and CSS, enhancing user experience and engagement. Collaborated with the backend team to integrate the Spoonacular API, contributing to a 25% improvement in user engagement."
              date="Jan 2024"
            />
            <Project
              name="Geesespotter"
              description="Engineered a C++ console-based Minesweeper game with a Waterloo theme, focusing on problem-solving, algorithm efficiency, and enhancing skills in functions and dynamic memory allocation."
              date="Oct 2023"
            />
          </Section>
          <Section id="certifications" title="Certifications">
            <ul>
              <li>
                <strong>IBM AI Developer Professional Certificate:</strong> IBM, Coursera - Acquired expertise in software engineering, AI, generative AI, prompt engineering, HTML, JavaScript, and Python through 20+ hands-on labs and comprehensive coursework.
              </li>
              <li>
                <strong>Meta Frontend Developer Professional Certificate:</strong> Meta, Coursera - Mastered HTML, CSS, JavaScript, and React, creating 3 web applications and 5 projects, including responsive designs and dynamic UIs, demonstrating practical skills.
              </li>
              <li>
                <strong>Algorithms, Part I:</strong> Princeton University, Coursera - Gained in-depth knowledge of algorithms with a focus on data structures and optimization, enhancing problem-solving skills by 20%, and completed comprehensive coursework on sorting, searching, and graph algorithms, improving algorithmic thinking by 25%.
              </li>
            </ul>
          </Section>
          <Section id="education" title="Education">
            <p>
              <strong>University of Waterloo</strong>
              <br />
              Bachelor of Applied Science in Computer Engineering
              <br />
              Expected to graduate in 2028, Waterloo, ON
            </p>
            <ul>
              <li>Courses: Algorithms and Data Structures (C++), Digital Circuits and Systems (VHDL), Object-Oriented Programming (C++), Discrete Math and Logic, Calculus II</li>
              <li>Involvements: Orientation Front-Line Leader, Orientation Director, ECE Society Web Developer, EngSoc First Year Conference, Waterloo Engineering Competition IT, Mentorship and Photography Director</li>
            </ul>
          </Section>
        </Main>
        <Footer />
      </PageContainer>
    </ThemeProvider>
  );
};

const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  animation: ${fadeIn} 1s ease-in-out;
  text-align: center;
  scroll-behavior: smooth; /* Enable smooth scrolling */
`;

const Header = styled.header`
  background-image: url(${({ darkMode }) => darkMode ? '/dark_mode_photo.jpeg' : '/light_mode_photo.png'});
  background-size: cover;
  background-position: center;
  height: 100vh; /* Adjust the height to cover the entire window */
  width: 100wh; /* Adjust the width to cover the entire window */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative; /* Make sure the position is relative to allow overlay */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* Black overlay with 50% transparency */
    z-index: 1;
  }

  /* Ensure the content is above the overlay */
  & > * {
    position: relative;
    z-index: 2;
  }
`;

const HeaderButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: ${({ right }) => (right ? 'auto' : '20px')};
  bottom: ${({ right }) => (right ? '20px' : 'auto')};
  left: ${({ right }) => (right ? 'auto' : '20px')};
  right: ${({ right }) => (right ? '20px' : 'auto')};
  height: auto; /* Adjust as needed */
`;

const HeaderButton = styled.a`
  width: 90px;
  height: 90px;
  background-color: ${({ theme }) => theme.buttonBackground};
  border-radius: 50%;
  margin: 15px 0;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3); /* Add shadow */
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.text}; /* Text color */
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.1) translateY(-5px); /* Add a hover effect */
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.3); /* Enhance the shadow for a 3D effect */
  }
`;

const TooltipLeft = styled.div`
  visibility: hidden;
  width: 120px;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.primary};
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  left: 125%; /* Position to the right of the button */
  top: 50%;
  margin-top: -15px;
  opacity: 0;
  transition: opacity 0.3s;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: -5px;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent ${({ theme }) => theme.text} transparent transparent;
  }
`;

const TooltipRight = styled.div`
  visibility: hidden;
  width: 120px;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.primary};
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  right: 125%; /* Position to the left of the button */
  top: 50%;
  margin-top: -15px;
  opacity: 0;
  transition: opacity 0.3s;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -5px;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent ${({ theme }) => theme.text};
  }
`;

const HeaderButtonWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${TooltipLeft}, &:hover ${TooltipRight} {
    visibility: visible;
    opacity: 1;
  }
`;

const Main = styled.main`
  padding: 20px;
  text-align: center;
`;

const Section = ({ id, title, children }) => (
  <section id={id}>
    <Card>
      <h2>{title}</h2>
      {children}
    </Card>
  </section>
);

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Responsive grid */
  gap: 20px; /* Adjust the gap between items as needed */
  text-align: center;
`;

const SkillItem = ({ logo, alt, name }) => {
  const [flipped, setFlipped] = useState(false);

  const handleMouseEnter = () => setFlipped(true);
  const handleMouseLeave = () => setFlipped(false);

  return (
    <StyledSkillItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} flipped={flipped}>
      <div className="front">
        <img src={logo} alt={alt} />
      </div>
      <div className="back">
        <p>{name}</p>
      </div>
    </StyledSkillItem>
  );
};

const StyledSkillItem = styled.div`
  background-color: ${({ theme }) => theme.buttonBackground}; /* Use theme button background color */
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; /* Adjust the height as needed */
  perspective: 1000px; /* Perspective for 3D effect */
  position: relative;
  animation: ${fadeIn} 1s ease-in-out;

  .front, .back {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    position: absolute;
    transition: transform 0.6s;
    text-align: center;
  }

  .front {
    background-color: ${({ theme }) => theme.light};
    img {
      max-width: 70%; /* Ensure the logo fits within the cell */
      max-height: 70%; /* Ensure the logo fits within the cell */
    }
  }

  .back {
    background-color: ${({ theme }) => theme.buttonBackground}; /* Use theme button background color */
    color: ${({ theme }) => theme.text}; /* Text color */
    font-size: 30px;
    transform: rotateY(180deg);
  }

  ${({ flipped }) => flipped && `
    .front {
      transform: rotateY(180deg);
    }
    .back {
      transform: rotateY(0deg);
    }
  `}
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
  gap: 20px; /* Adjust the gap between items as needed */
`;

const ExperienceItem = ({ logo, alt, title, company, duration, responsibilities, color }) => {
  const [flipped, setFlipped] = useState(false);

  const handleMouseEnter = () => setFlipped(true);
  const handleMouseLeave = () => setFlipped(false);

  return (
    <StyledExperienceItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} flipped={flipped} color={color}>
      <div className="front">
        <img src={logo} alt={alt} />
      </div>
      <div className="back">
        <h3>{title}</h3>
        <p>{company}<br />{duration}</p>
        <ul>
          {responsibilities.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </StyledExperienceItem>
  );
};

const StyledExperienceItem = styled.div`
  background-color: ${({ color }) => color}; /* Use the passed color prop */
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px; /* Adjust the height as needed */
  perspective: 1000px; /* Perspective for 3D effect */
  position: relative;
  animation: ${fadeIn} 1s ease-in-out;
  margin-bottom: 20px;

  .front, .back {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    position: absolute;
    transition: transform 0.6s;
    text-align: center;
  }

  .front {
    background-color: ${({ color }) => color}; /* Use the passed color prop */
    img {
      max-width: 90%; /* Increase the size of the logo */
      max-height: 90%; /* Increase the size of the logo */
      object-fit: cover; /* Ensure the logo covers the entire cell */
    }
  }

  .back {
    background-color: ${({ color }) => color}; /* Use the passed color prop */
    color: ${({ theme }) => theme.text}; /* Text color */
    font-size: 20px;
    padding: 10px;
    transform: rotateY(180deg);
    overflow-y: auto;
  }

  ${({ flipped }) => flipped && `
    .front {
      transform: rotateY(180deg);
    }
    .back {
      transform: rotateY(0deg);
    }
  `}
`;

const Project = ({ name, description, date }) => (
  <Card>
    <p><strong>{name}:</strong> {description}</p>
    <p>{date}</p>
  </Card>
);

const Card = styled.div`
  background-color: ${({ theme }) => theme.primary};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
  margin-bottom: 40px;
  animation: ${fadeIn} 1s ease-in-out;
  text-align: center;
`;

const Footer = () => (
  <footer>
    <p>&copy; 2024 Armaan Ghosh</p>
    <div className="contact-info">
      <p>
        <a href="tel:+15489220973">+1 548-922-0973</a> | 
        <a href="mailto:a65ghosh@uwaterloo.ca">a65ghosh@uwaterloo.ca</a>  |  
        <a href="https://www.linkedin.com/in/armaan-ghosh-741178211/">LinkedIn</a> |  
        <a href="https://github.com/FranceForever">GitHub</a>
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