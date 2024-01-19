import React from "react";
import styled from "styled-components";

const TbcInfo = () => {
  const handleLinkClick = (e) => {
    e.preventDefault();
  };
  return (
    <TbcWrapper>
      <TextWrapper>
        <h1>
          „TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა საინფორმაციო
          ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად დაფინანსებულ
          ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს სხვადასხვა ICT მიმართულებით.
          წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა დასაქმდნენ თიბისა
          და მის პარტნიორ კომპანიებში.
        </h1>
        <CustomLink href="#" onClick={handleLinkClick}>
          გაიგე მეტი
        </CustomLink>
      </TextWrapper>
    </TbcWrapper>
  );
};

const TbcWrapper = styled.section`
  width: 100%;
  min-height: 465px;
  background-color: rgb(43, 43, 43);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  max-width: 952px;
  padding: 0 20px;
  h1 {
    font-weight: bolder;
    font-size: 28px;
    line-height: 1.6em;
    color: #f4f4f4;
    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

const CustomLink = styled.a`
  display: inline-block;
  color: rgb(0, 174, 243);
  margin-top: 30px;
  font-size: 23px;
  transition: color 0.3s ease;
  &:hover {
    color: #ffff;
  }
`;

export default TbcInfo;
