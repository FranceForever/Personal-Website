import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const TimelineLine = styled.div`
  content: '';
  position: absolute;
  width: 2px;
  background-color: ${({ theme }) => theme.text};
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 50px;
  &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.text};
    border-radius: 50%;
    top: 0;
    left: 50%;
    margin-left: -10px;
  }
  &.left .timeline-content {
    left: 55%;
    max-width: 70%;
  }
  &.right .timeline-content {
    left: -25%;
    max-width: 70%;
  }
`;

const TimelineContent = styled.div`
  position: relative;
  font-size: 1.1em;
  left: 30px;
`;

const TimelineDate = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
  position: absolute;
  top: 0;
  white-space: nowrap;
  ${({ isEven }) => (isEven ? 'left: calc(100% + 80px);' : 'right: calc(100% + 80px);')}
`;

const TimelineTitle = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 10px;
  ${({ isEven }) => (isEven ? 'text-align: right;' : 'text-align: left;')}
`;

const TimelineDescription = styled.div`
  margin-bottom: 10px;
  text-align: justify;
`;

const Timeline = () => {
  const events = [
    {
      date: 'June 2024 – Present',
      title: 'BudgetRoyale | Buildspace',
      description: [
        'Developed a gamified personal finance tracking web app tailored for university students, resulting in a 30% increase in user engagement within the first month',
        'Implemented AI-driven financial advice features using React and Firebase, which helped users reduce unnecessary expenses by an average of 20% per month',
        'Designed an interactive user interface that enhanced user experience, leading to a 40% improvement in daily active users and 50% increase in budget tracking accuracy',
      ],
      position: 'right',
    },
    {
      date: 'Jan 2024',
      title: 'Byte Bites: Recipe Recommendation App | NwHacks 2024',
      description: [
        'Developed the frontend of a recipe recommendation app for vegetarian international students using HTML and CSS, enhancing user experience and engagement',
        'Collaborated with the backend team to integrate the Spoonacular API, contributing to a 25% improvement in user engagement',
      ],
      position: 'left',
    },
    {
      date: 'Oct 2023',
      title: 'Geesespotter | University of Waterloo',
      description: [
        'Engineered a C++ console-based Minesweeper game with a Waterloo theme, focusing on problem-solving, algorithm efficiency, and enhancing skills in functions and dynamic memory allocation',
        'Applied functions, bitwise operations, arrays, and dynamic memory allocation to develop a robust game logic',
      ],
      position: 'right',
    },
  ];

  return (
    <TimelineContainer>
      <TimelineLine />
      {events.map((event, index) => (
        <TimelineItem key={index} className={event.position}>
          <TimelineContent className="timeline-content">
            <TimelineDate isEven={index % 2 === 0}>{event.date}</TimelineDate>
            <TimelineTitle isEven={index % 2 === 0}>{event.title}</TimelineTitle>
            {event.description.map((desc, idx) => (
              <TimelineDescription key={idx}>{desc}</TimelineDescription>
            ))}
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;