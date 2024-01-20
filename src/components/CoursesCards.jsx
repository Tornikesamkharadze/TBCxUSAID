import React from "react";
import styled from "styled-components";

const CoursesCards = () => {
  return (
    <CardsWrapper>
      <CardWrapper>
        <h6 className="heading6">სასწავლო კურსები</h6>
      </CardWrapper>
    </CardsWrapper>
  );
};

const CardsWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgb(22, 22, 22);
`;
const CardWrapper = styled.div`
  max-width: 952px;
  width: 100%;
  padding: 0px 20px;
  .heading6 {
    font-size: 24px;
    color: rgb(219,219,219);
    font-weight: 300;
    padding: 50px 0px 80px 0px;
  }
`;

export default CoursesCards;
