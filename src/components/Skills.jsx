import React from "react";
import styled from "styled-components";

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  grid-row-gap: 0.5em;
`;

const SkillsH5 = styled.h5`
  margin: 0.5em 0;
`;

const SkillsLine = styled.div`
  height: 8px;
  position: relative;
  border-radius: 50px;
  background: #f8bbd0;
`;

// const move = keyframes`
//   0% { background-position: 0 0; }
//   100% { background-position: 50px 50px; }
// `;

// &:after {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   background-image: linear-gradient(-45 rgba(255, 255, 255, 0.2) 25%, transparent 25% transparent 50%, rgbs(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75% transparent);
//   z-index: 1;
//   background-size: 50px 50px;
//   animation: ${move} 4s linear infinite;
//   overflow: hidden;
// }

const SkillsSpan = styled.span`
  display: block;
  height: 100%;
  width: ${(props) => props.width};
  border-radius: 8px;
  background-color: #74153a;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(0, 0, 0, 0.4);
`;

const Skills = (props) => (
  <div className="Skills">
    <SkillsContainer>
      {props.data.map((skill, index) => (
        <div className="Skills-item" key={`Skill-${index}`}>
          <SkillsH5>{skill.name}</SkillsH5>
          <SkillsLine>
            <SkillsSpan width={skill.percentage} />
          </SkillsLine>
        </div>
      ))}
    </SkillsContainer>
  </div>
);

export default Skills;