import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled, { ThemeProvider, keyframes, css } from 'styled-components';
import Timeline from './Timeline'; // Import the Timeline component
import { useInView } from 'react-intersection-observer'; // Import useInView

// Import logos
import javaLogo from './logos/java.png';
import pythonLogo from './logos/python.png';
import cLogo from './logos/c-solid.png';
import jsLogo from './logos/js.png';
import reactLogo from './logos/react.png';
import htmlCssLogo from './logos/html5.png';
import kotlinLogo from './logos/android.png';
import vhdlLogo from './logos/microchip-solid.png';
import uwaterlooLogo from './logos/uwaterloo.png'; // Adjust the path to your logo
import profilePhoto from './logos/profile_photo.png';

// Import job images
import hdfcErgoLogo from './logos/hdfcergo_logo.jpeg';
import nowFloatsLogo from './logos/nowfloats_logo.png';

// Import FontAwesome Logos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faCopyright, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUser, faLaptopCode, faBriefcase, faProjectDiagram, faCertificate, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100ch }
`;

const blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: ${({ theme }) => theme.text} }
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const ProfileImage = styled.img`
  width: 400px; /* Adjust size as needed */
  height: 400px; /* Adjust size as needed */
  border-radius: 50%;
  border: 3px solid white;
  margin-bottom: 50px;
  z-index: 3;
`;

const Main = styled.main`
  padding: 20px;
  text-align: center;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Section = styled.section`
  margin: 10px 0;
  padding: 20px;
  animation: ${fadeIn} 1s ease-in-out;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  h2 {
    margin-bottom: 50px;
    font-size: 40px;
    color: ${({ theme }) => theme.text};
  }

  p, ul, li {
    color: ${({ theme }) => theme.text};
    font-size: 22px;
    line-height: 1.6;
    margin: 0px 70px;
    text-align: justify;
  }

  @media (max-width: 768px) {
    padding: 10px;
    h2 {
      font-size: 22px;
    }
    p, ul {
      font-size: 16px;
    }
  }
`;

const AboutSection = styled(Section)`
  p {
    margin: 0px 140px; /* Adjust this value to your desired margin */
  }
`;

const SkillsSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100wh;
  height: 70vh;
`;

const CenterHeading = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.buttonBackground};
  border-radius: 50%;
  border: 2px dotted white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.3em;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  &:hover {
    &::after {
      content: 'Click to see proficiency of skills';
      position: absolute;
      bottom: -40px;
      left: 50%;
      transform: translateX(-50%);
      background: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.primary};
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 0.8em;
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 100px; /* Increased gap for more spacing */
  width: 500px; /* Increased width for more spacing */
  height: 500px; /* Increased height for more spacing */
  position: absolute;
  align-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SkillItem = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.text};
  border-radius: 50%;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ flipped }) => (flipped ? 'rotateY(180deg)' : 'rotateY(0)')};
  cursor: pointer;

  &:hover {
    ${({ flipped }) => !flipped && css`
      &::after {
        content: 'Click to see proficiency of skill';
        position: absolute;
        bottom: -50px;
        left: 50%;
        transform: translateX(-50%);
        background: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.primary};
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 0.8em;
      }
    `}
  }

  .front, .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .back {
    background-color: lightgrey;
    color: black;
    transform: rotateY(180deg);
  }

  img {
    max-width: 50%;
    max-height: 50%;
  }

  &:nth-child(1) {
    grid-area: 1 / 2;
  }
  &:nth-child(2) {
    grid-area: 2 / 3;
  }
  &:nth-child(3) {
    grid-area: 3 / 2;
  }
  &:nth-child(4) {
    grid-area: 2 / 1;
  }
  &:nth-child(5) {
    grid-area: 1 / 1;
  }
  &:nth-child(6) {
    grid-area: 1 / 3;
  }
  &:nth-child(7) {
    grid-area: 3 / 1;
  }
  &:nth-child(8) {
    grid-area: 3 / 3;
  }
`;

const skills = [
  { logo: javaLogo, alt: 'Java', name: 'Java', level: 'Advanced' },
  { logo: pythonLogo, alt: 'Python', name: 'Python', level: 'Advanced' },
  { logo: cLogo, alt: 'C++', name: 'C++', level: 'Intermediate' },
  { logo: jsLogo, alt: 'JavaScript', name: 'JavaScript', level: 'Advanced' },
  { logo: reactLogo, alt: 'React', name: 'React', level: 'Advanced' },
  { logo: htmlCssLogo, alt: 'HTML/CSS', name: 'HTML/CSS', level: 'Advanced' },
  { logo: kotlinLogo, alt: 'Kotlin', name: 'Kotlin', level: 'Intermediate' },
  { logo: vhdlLogo, alt: 'VHDL', name: 'VHDL', level: 'Basic' },
];

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
  text-align: left;
`;

const ExperienceItem = ({ logo, alt, title, company, duration, responsibilities, color, flipped, onClick, textColor, cardType }) => {
  return (
    <StyledExperienceItem color={color} flipped={flipped} onClick={onClick} textColor={textColor} cardType={cardType}>
      <div className="front">
        <LogoContainer>
          <img src={logo} alt={alt} />
        </LogoContainer>
        <HoverPrompt>Click to see details of the experience</HoverPrompt>
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

const HoverPrompt = styled.div`
  visibility: hidden;
  color: ${({ theme }) => theme.text};
  text-align: center;
  font-size: 14px;
  padding: 5px 0;
  position: absolute;
  z-index: 2; /* Ensure it is above the background */
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
`;

const LogoContainer = styled.div`
  position: relative;
  z-index: 2; /* Ensure the logo is above the background blur */
`;

const StyledExperienceItem = styled.div`
  background-color: ${({ color }) => color};
  padding: 20px;
  border-radius: 10px;
  border: 2px solid white;
  animation: ${fadeIn} 1s ease-in-out;
  transition: transform 0.3s, filter 0.3s;
  perspective: 1000px; /* Perspective for 3D effect */
  position: relative;
  cursor: pointer;
  height: 300px; /* Increased height */
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ cardType }) =>
    cardType === 'nowfloats' &&
    css`
      color: black; /* Apply black text color for nowfloats card */
      .back h3,
      .back p,
      .back li {
        color: black; /* Apply black text color for h3, p, ul inside back class */
      }
    `}

  &:hover ${HoverPrompt} {
    visibility: visible;
  }

  &:hover .background-blur {
    filter: blur(4px);
  }

  .front, .back {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    position: absolute;
    transition: transform 0.6s, filter 0.3s;
    text-align: center; /* Center the text */
    color: ${({ textColor }) => textColor};
  }

  .front {
    background-color: ${({ color }) => color};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .background-blur {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${({ color }) => color};
      z-index: 1;
    }

    img {
      max-width: 200px;
      max-height: 200px;
      position: relative;
      z-index: 2;
    }
  }

  .back {
    background-color: ${({ color }) => color}; /* Same background color as the front */
    color: ${({ textColor }) => textColor};
    transform: rotateY(180deg);
    text-align: center; /* Center the text */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px; /* Add padding for better spacing */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
    overflow: hidden; /* Ensure content doesn't overflow */

    h3 {
      margin-bottom: 10px;
      font-size: 24px; /* Adjust font size */
      text-shadow: 0.5px 0.5px 1px rgba(255, 255, 255, 0.2); /* Add text shadow */
      padding: 5px 10px;
      border-radius: 5px;
    }

    p {
      margin-bottom: 20px;
      text-shadow: 0.5px 0.5px 1px rgba(255, 255, 255, 0.2); /* Add text shadow */
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 16px; /* Adjust font size */
      line-height: 1.4; /* Adjust line height */
    }

    ul {
      text-align: justify;
      margin: 0px 10px; /* Adjust margin for better spacing */
      list-style-type: none;
      padding: 0;

      li {
        text-shadow: 0.5px 0.5px 1px rgba(255, 255, 255, 0.2); /* Add text shadow */
        padding: 5px 10px;
        border-radius: 5px;
        margin-bottom: 5px; /* Space between list items */
        font-size: 14px; /* Adjust font size */
        line-height: 1.2; /* Adjust line height */
      }
    }
  }

  ${({ flipped }) => flipped && css`
    .front {
      transform: rotateY(180deg);
    }
    .back {
      transform: rotateY(360deg);
    }
  `}
`;

const CertificationsList = styled.ul`
  list-style-type: none;
  padding: 0;
  color: ${({ theme }) => theme.text};
  
  animation: ${fadeIn} 1s ease-in-out;

  li {
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const EducationDetails = styled.div`
  list-style-type: none;
  padding: 0;
  color: ${({ theme }) => theme.text};
  
  animation: ${fadeIn} 1s ease-in-out;

  p {
    margin: 10px 130px; /* Ensure margin consistency */
    padding: 0; /* Reset padding */
    line-height: 1.6; /* Improve readability */
  }

  img {
    width: 5%;
    height: 5%;
  }

  li {
    list-style-type: none;
    margin-bottom: 30px;
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;

const theme = {
  dark: {
    background: '#0D47A1', // Dark Blue
    primary: '#1A237E', // Deep Blue
    text: '#FFFFFF', // White
    buttonBackground: '#42A5F5', // Light Blue
    buttonHover: '#1976D2', // Medium Blue
  },
};

const TypingContainer = styled.div`
  font-family: monospace;
  font-size: 2rem;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.15em solid ${({ theme }) => theme.text};
  animation: ${typing} 6s steps(100) 1s normal both, ${blink} 0.75s step-end infinite;
  color: white;
  text-align: center;
  z-index: 3;
  margin-bottom: 20px; /* Add margin to separate from the image */
`;

const Header = styled.header`
  background: linear-gradient(45deg, #0D47A1, #1A237E, #42A5F5);
  background-size: 600% 600%;
  animation: ${gradientAnimation} 8s ease infinite;
  height: 100vh; /* Adjust the height to cover the entire window */
  width: 100wh; /* Adjust the width to cover the entire window */
  display: flex;
  flex-direction: column;
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
    background-color: rgba(0, 0, 0, 0.3); /* Adjust transparency */
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

const Footer = styled.footer`
  padding: 20px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  text-align: center;

  .contact-info a, span {
    color: ${({ theme }) => theme.text};
    margin: 0 20px;
    text-decoration: none;
    font-size: 1em; /* Increase the font size for larger icons */

    &:hover {
      color: ${({ theme }) => theme.buttonHover};
    }
  }

  a {
    color: ${({ theme }) => theme.text};
    margin: 0 20px;
    text-decoration: none;
    font-size: 2em; /* Increase the font size for larger icons */

    &:hover {
      color: ${({ theme }) => theme.buttonHover};
    }
  }

  .contact-info {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const App = () => {
  const [flippedSkills, setFlippedSkills] = useState(Array(skills.length).fill(false));
  const [flippedExperience, setFlippedExperience] = useState(Array(2).fill(false));
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleFlipSkills = (index) => {
    setFlippedSkills((prevFlipped) =>
      prevFlipped.map((flipped, i) => (i === index ? !flipped : flipped))
    );
  };

  const handleFlipExperience = (index) => {
    setFlippedExperience((prevFlipped) =>
      prevFlipped.map((flipped, i) => (i === index ? !flipped : flipped))
    );
  };

  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true });
  const { ref: experienceRef, inView: experienceInView } = useInView({ triggerOnce: true });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true });
  const { ref: certificationsRef, inView: certificationsInView } = useInView({ triggerOnce: true });
  const { ref: educationRef, inView: educationInView } = useInView({ triggerOnce: true });

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={theme.dark}>
      <PageContainer>
        <Header>
          <ProfileImage src={profilePhoto} alt="Armaan Ghosh" />
          <TypingContainer>Hi! I'm <h1>Armaan,</h1> a Computer Engineering student <br />at the <u>University of Waterloo</u></TypingContainer>
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
          <AboutSection id="about" ref={aboutRef} isVisible={aboutInView}>
            <h2>About Me</h2>
            <p>
              Hello! I'm Armaan Ghosh, a first-year Computer Engineering student at the University of Waterloo. I have a deep passion for technology and a keen interest in exploring the latest advancements in the field. My journey in tech has equipped me with a diverse skill set, including various programming languages and frameworks. I'm always eager to learn and grow, both academically and personally. Outside of academics, I enjoy taking on leadership roles and contributing to the community. I look forward to leveraging my skills and experiences to drive innovation and make meaningful contributions to the world of engineering.
            </p>
          </AboutSection>
          <Section id="skills" ref={skillsRef} isVisible={skillsInView}>
            <SkillsSection theme={theme.dark}>
              <SkillsGrid>
                {skills.map((skill, index) => (
                  <SkillItem key={index} theme={theme.dark} flipped={flippedSkills[index]} onClick={() => handleFlipSkills(index)}>
                    <div className="front">
                      <img src={skill.logo} alt={skill.alt} />
                    </div>
                    <div className="back">
                      {skill.name}<br />{skill.level}
                    </div>
                  </SkillItem>
                ))}
                <CenterHeading theme={theme.dark} onClick={() => setFlippedSkills(Array(skills.length).fill(!flippedSkills[0]))}>
                  Technical Skills
                </CenterHeading>
              </SkillsGrid>
            </SkillsSection>
          </Section>
          <Section id="experience" ref={experienceRef} isVisible={experienceInView}>
            <h2>Work Experience</h2>
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
                color="#e41c24"
                flipped={flippedExperience[0]}
                onClick={() => handleFlipExperience(0)}
                textColor="white" // Text color for HDFC
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
                color="#FFB900"
                flipped={flippedExperience[1]}
                onClick={() => handleFlipExperience(1)}
                textColor="black" // Text color for NowFloats
                cardType="nowfloats" // Specify the card type
              />
            </ExperienceGrid>
          </Section>
          <Section id="projects" ref={projectsRef} isVisible={projectsInView}>
            <h2>Projects</h2>
            <Timeline />
          </Section>
          <Section id="certifications" ref={certificationsRef} isVisible={certificationsInView}>
            <h2>Certifications</h2>
            <CertificationsList>
              <li>
                <strong>IBM AI Developer Professional Certificate:</strong> IBM, Coursera - Acquired expertise in software engineering, AI, generative AI, prompt engineering, HTML, JavaScript, and Python through 20+ hands-on labs and comprehensive coursework.
              </li>
              <li>
                <strong>Meta Frontend Developer Professional Certificate:</strong> Meta, Coursera - Mastered HTML, CSS, JavaScript, and React, creating 3 web applications and 5 projects, including responsive designs and dynamic UIs, demonstrating practical skills.
              </li>
              <li>
                <strong>Algorithms, Part I:</strong> Princeton University, Coursera - Gained in-depth knowledge of algorithms with a focus on data structures and optimization, enhancing problem-solving skills by 20%, and completed comprehensive coursework on sorting, searching, and graph algorithms, improving algorithmic thinking by 25%.
              </li>
            </CertificationsList>
          </Section>
          <Section id="education" ref={educationRef} isVisible={educationInView}>
            <h2>Education</h2>
            <EducationDetails>
              <p>
                <strong>University of Waterloo</strong>
                <br />
                Bachelor of Applied Science in Computer Engineering
                <br />
                Expected to graduate in 2028
              </p>
              <ul>
                <li>Courses: Algorithms and Data Structures (C++), Digital Circuits and Systems (VHDL), Object-Oriented Programming (C++), Discrete Math and Logic, Calculus II</li>
                <li>Involvements: Orientation Front-Line Leader, Orientation Director, ECE Society Web Developer, EngSoc First Year Conference, Waterloo Engineering Competition IT, Mentorship and Photography Director</li>
              </ul>
            </EducationDetails>
          </Section>
        </Main>
        <Footer>
          <p>
            <FontAwesomeIcon icon={faCopyright} /> 2024 Armaan Ghosh
          </p>
          <div className="contact-info">
            <a href="mailto:a65ghosh@uwaterloo.ca">
              <FontAwesomeIcon icon={faEnvelope} /> a65ghosh@uwaterloo.ca
            </a>
            <span>
              <FontAwesomeIcon icon={faPhone} /> +1 548-922-0973
            </span>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/armaan-ghosh-741178211/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/FranceForever" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </Footer>
        <ScrollToTopButton isVisible={showScrollToTop} onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </ScrollToTopButton>
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

ReactDOM.render(<App />, document.getElementById('root'));