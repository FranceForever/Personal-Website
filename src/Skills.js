import React from 'react';
import styled, { keyframes } from 'styled-components';

// Import logos
import javaLogo from './logos/java.png';
import pythonLogo from './logos/python.png';
import cLogo from './logos/c-solid.png';
import jsLogo from './logos/js.png';
import reactLogo from './logos/react.png';
import htmlCssLogo from './logos/html5.png';
import kotlinLogo from './logos/android.png';
import vhdlLogo from './logos/microchip-solid.png';

const Skills = () => (
  <Section>
    <h2>Technical Skills</h2>
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
);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns */
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

export default Skills;
