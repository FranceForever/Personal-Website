import React from 'react';
import styled, { keyframes } from 'styled-components';

// Import job images
import hdfcErgoLogo from './logos/hdfcergo_logo.jpeg'; // Placeholder image
import nowFloatsLogo from './logos/nowfloats_logo.png'; // Placeholder image

const Experience = () => (
  <Section>
    <h2>Work Experience</h2>
    <ExperienceGrid>
      <ExperienceItem
        logo={hdfcErgoLogo}
        alt="HDFC Ergo"
        title="Frontend Engineer"
        company="HDFC Ergo General Insurance"
        duration="May 2024 – Aug 2024, Mumbai, India"
        responsibilities={[
          'Engineered user interfaces for the 1UP app using JavaScript, React, HTML, and CSS, enhancing usability for over 50,000 customers and increasing user engagement by 35%',
          'Designed and implemented features for digital policy management with Firebase integration, resulting in a 30% increase in policy renewal rates and reducing manual tracking errors by 25%',
        ]}
        color="#E21F25" // Example color that matches the logo
      />
      <ExperienceItem
        logo={nowFloatsLogo}
        alt="NowFloats"
        title="Product Manager"
        company="NowFloats Technologies"
        duration="May 2024 – Aug 2024, Remote"
        responsibilities={[
          'Analyzed market size, growth trends, and digital adoption patterns within SMB and MSME sectors, identifying 5 key customer segments and industry-specific needs',
          'Defined feature sets and minimum viable product, conducted SWOT analysis, ensuring alignment with market demands, and addressing pain points of 3 key SMB sectors',
          'Developed go-to-market and pricing strategies, leveraging insights from 10+ industry reports and competitor analysis, positioning the product competitively in the market',
        ]}
        color="#FFB900" // Example color that matches the logo
      />
    </ExperienceGrid>
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

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columns */
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

export default Experience;
