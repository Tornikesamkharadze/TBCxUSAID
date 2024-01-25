import React from "react";
import styled from "styled-components";

const SliderDots = ({ cur, len, onDotClick }) => {
  return (
    <DotsWrapper>
      {Array.from({ length: len }).map((_, index) => {
        return (
          <Dot
            key={index}
            onClick={() => onDotClick(index)}
            active={cur === index}
          />
        );
      })}
    </DotsWrapper>
  );
};

const DotsWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

const Dot = styled(({ active, ...rest }) => <div {...rest} />)`
  width: 7px;
  height: 7px;
  background-color: ${(props) =>
    props.active ? "rgb(232, 230, 230)" : "rgba(177, 157, 157, 0.63)"};
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
`;

export default SliderDots;
