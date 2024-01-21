import React from "react";
import styled from "styled-components";
import tbsTeamImage from "../assets/images/tbcTeam.webp";

const TbcTeam = () => {
  return (
    <TeamWrapper>
      <TextWrapper>
        <Heading3>TBC x USAID</Heading3>
        <Span>ᲢᲔᲥᲜᲝᲚᲝᲒᲘᲣᲠᲘ ᲒᲐᲜᲐᲗᲚᲔᲑᲘᲡᲗᲕᲘᲡ</Span>
      </TextWrapper>
      <TeamImage src={tbsTeamImage} alt="TBC team logo" />
    </TeamWrapper>
  );
};

const TeamWrapper = styled.article`
  position: relative;
  text-align: center;
  background-color: rgb(43, 43, 43);
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1000px;
  width: 100%;
  padding: 0 20px;
  text-align: left;

  @media screen and (max-width: 768px) {
    top: 50%;
  }
`;

const Heading3 = styled.h3`
  font-size: 42px;
  line-height: 1.9em;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

const Span = styled.span`
  font-size: 36px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const TeamImage = styled.img`
  width: 100%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    height: 250px;
  }
`;

export default TbcTeam;
