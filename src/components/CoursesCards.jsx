import React from "react";
import styled from "styled-components";
import CoursesData from "../data/CoursesData";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const CoursesCards = () => {
  return (
    <>
      <HeadingWapper>
        <div>
          <h6 className="heading6">სასწავლო კურსები</h6>
        </div>
      </HeadingWapper>
      <CardsWrapper>
        <CardGrid>
          {CoursesData.map((course) => (
            <Card key={course.id}>
              <img src={course.imageUrl} alt={course.courseTitle} />
              <span className="span">{course.courseTitle}</span>
              <p>{course.courseStatus}</p>
              <div>
                <IoIosArrowRoundForward
                  style={{
                    height: "40px",
                    width: "40px",
                    color: " rgb(0, 173, 237)",
                  }}
                />
                <StyledLink to={course.courseDetailsLink}>
                  კურსის დეტალები
                </StyledLink>
              </div>
            </Card>
          ))}
        </CardGrid>
      </CardsWrapper>
    </>
  );
};

const HeadingWapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgb(22, 22, 22);
  div {
    max-width: 962px;
    width: 100%;
  }
  .heading6 {
    color: #ffff;
    font-weight: 300;
    font-size: 24px;
    padding: 50px 0px 80px 20px;
  }
`;

const CardsWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgb(22, 22, 22);
`;

const CardGrid = styled.div`
  padding: 0px 0px 0px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 962px;
  width: 100%;
  cursor: default;
  padding-bottom: 50px;
`;

const Card = styled.div`
  max-width: 300px;
  width: 100%;
  min-height: 414px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 2px rgb(85, 85, 85);

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
  }

  .span {
    font-size: 18px;
    color: rgb(22, 22, 22);
    font-weight: 500;
    margin: 15px 0 10px;
  }

  p {
    color: #777;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  color: rgb(0, 173, 237);
  font-size: 17px;
  font-weight: 700;
  &:hover {
  }
`;

export default CoursesCards;
