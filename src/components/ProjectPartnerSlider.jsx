import React, { useCallback, useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import SliderData from "../data/SliderData";
import SlideItem from "./SlideItem";
import SliderDots from "./SliderDots";
import styled from "styled-components";

const ProjectPartnerSlider = () => {
  const [cur, setCur] = useState(0);
  const len = SliderData.length;
  const [touchStartX, setTouchStartX] = useState(0);

  const leftHandle = () => {
    setCur((cur - 1 + len) % len);
  };

  const rightHandle = () => {
    setCur((cur + 1) % len);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
      leftHandle();
    } else if (deltaX < -50) {
      rightHandle();
    }
  };

  const handleDotClick = (id) => {
    setCur(id);
  };

  return (
    <SectionWrapper
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <SlArrowLeft className="leftBtn" onClick={leftHandle} />
      <div className="sliderWrapper">
        {SliderData.map((slide, index) => (
          <div key={slide.id} style={{ display: index === cur ? "block" : "none" }}>
            <SlideItem slide={slide} />
          </div>
        ))}
      </div>
      <SliderDots cur={cur} len={len} onDotClick={handleDotClick} />
      <SlArrowRight className="rightBtn" onClick={rightHandle} />
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: rgb(43, 43, 43);
  min-height: 364px;
  .leftBtn,
  .rightBtn {
    cursor: pointer;
    color: white;
    font-size: 40px;
    font-weight: 300;
    transform: translateY(-50%);
    transition: color 0.3s ease;
  }
  .leftBtn {
    position: absolute;
    left: 4%;
    top: 50%;
  }
  .rightBtn {
    position: absolute;
    right: 4%;
    top: 50%;
  }
  .leftBtn:hover,
  .rightBtn:hover {
    color: gray;
  }
  .sliderWrapper {
    max-width: 1000px;
    width: 100%;
    padding: 0px 20px;
  }
`;

export default ProjectPartnerSlider;
