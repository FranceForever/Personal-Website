import React from 'react';
import styled, { keyframes } from 'styled-components';

const Projects = () => (
  <Section>
    <h2>Projects</h2>
    <Project
      name="Dijsktra’s Algorithm Implementation and Design Project"
      description="Designed and implemented a C++ program for dynamic graph manipulation and shortest path calculation using Dijkstra’s Algorithm, improving algorithm efficiency by 15%. Utilized OOP principles and advanced data structures to create efficient, maintainable code, reducing runtime by 20%."
      date="Dec 2024"
    />
    <Project
      name="Byte Bites: Recipe Recommendation App"
      description="Developed a recipe recommendation app for vegetarian international students, suggesting meals with minimal additional ingredient purchases. Integrated Spoonacular API using Python, Flask, and Jinja, designing a user-friendly interface with HTML and CSS, which improved user engagement by 25%."
      date="Jan 2024"
    />
    <Project
      name="Geesespotter"
      description="Created a C++ console-based game replicating Minesweeper with a Waterloo theme, enhancing programming skills in functions and dynamic memory allocation. Applied functions, bitwise operations, arrays, and dynamic memory allocation to develop a robust game logic. Engineered a text-based, single-player game on a 2D board, focusing on problem-solving and algorithm implementation."
      date="Oct 2023"
    />
    <Project
      name="Java Basics Bootcamp"
      description="Launched a free Java course on Udemy, educating over 2,800 students with a 4.3/5-star rating, enhancing Java programming skills globally."
      date="Aug 2020 – Present"
    />
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

export default Projects;
