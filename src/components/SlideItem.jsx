import React from "react";
import styled from "styled-components";

const SlideItem = ({ slide, ...rest }) => {
  return (
    <CustomItemWrapper hasMultipleImages={slide.imageUrl.length > 1} {...rest}>
      {slide.imageUrl.map((url, index) => (
        <img key={index} src={url} alt="" />
      ))}
    </CustomItemWrapper>
  );
};

const CustomItemWrapper = styled(({ hasMultipleImages, ...rest }) => (
  <div {...rest} />
))`
  @media (max-width: 975px) {
    flex-direction: column;
    min-height: 490px;
    height: auto;
    justify-content: space-evenly;
  }
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.hasMultipleImages ? "space-between" : "center"};
`;

export default SlideItem;
