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

  const rightHandle = useCallback(() => {
    setCur((cur + 1) % len);
  }, [cur, len]);

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

  useEffect(() => {
    const interval = setInterval(() => {
      rightHandle();
    }, 4000);

    return () => clearInterval(interval);
  }, [rightHandle]);

  const handleDotClick = (index) => {
    setCur(index);
  };

  return (
    <SectionWrapper onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="contentWrapper">
        <h3>პროექტის პარტნიორები</h3>
        <div className="sliderWrapper">
          {SliderData.map((slide) => (
            <div
              key={slide.id}
              style={{ display: slide.id === cur ? "block" : "none" }}
            >
              <SlideItem slide={slide} />
            </div>
          ))}
        </div>
        <SliderDots cur={cur} len={len} onDotClick={handleDotClick} />
      </div>
      <SlArrowLeft className="leftBtn" onClick={leftHandle} />
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
  @media (max-width: 975px) {
    min-height: 700px;
  }
  .contentWrapper {
    max-width: 1000px;
    width: 100%;
    padding: 0px 20px;
    position: relative;
    h3 {
      position: absolute;
      font-size: 24px;
      font-weight: 300;
      color: #ffff;
      top: -70px;
    }
    .sliderWrapper {
      min-height: 95px;
    }
  }

  @media (max-width: 975px) {
    .leftBtn,
    .rightBtn {
      display: none;
    }
  }

  .leftBtn,
  .rightBtn {
    cursor: pointer;
    color: white;
    font-size: 40px;
    font-weight: 300;
    transform: translateY(-50%);
    transition: 0.3s ease;
    position: absolute;
    top: 50%;
  }

  .leftBtn {
    left: 4%;
  }
  .rightBtn {
    right: 4%;
  }
  .leftBtn:hover,
  .rightBtn:hover {
    color: gray;
  }
`;

export default ProjectPartnerSlider;
