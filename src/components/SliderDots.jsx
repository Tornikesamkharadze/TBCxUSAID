import React from "react";
import styled from "styled-components";

const SliderDots = ({ cur, len, onDotClick }) => {
  return (
    <DotsWrapper>
      {Array.from({ length: len }).map((_, id) => {
        return (
          <Dot key={id} onClick={() => onDotClick(id)} active={cur === id} />
        );
      })}
    </DotsWrapper>
  );
};

const DotsWrapper = styled.div`
  @media (max-width: 975px) {
    bottom: 5%;
  }
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

const Dot = styled.div`
  width: 7px;
  height: 7px;
  background-color: ${(props) =>
    props.active ? "rgb(43, 43, 43)" : "rgb(232, 230, 230)"};
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
`;

export default SliderDots;
