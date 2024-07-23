import React from 'react';
import styled, { keyframes } from 'styled-components';

const About = () => (
  <Section>
    <h2>About Me</h2>
    <p>
      Hello! I'm Armaan Ghosh, a first-year Computer Engineering student at the University of Waterloo. I have a passion for technology and love exploring new advancements in the field. I am excited to learn and grow in the world of engineering and look forward to contributing to innovative projects.
    </p>
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

export default About;
