import React, { useState } from "react";
import QnaData from "../data/AccordionData.json";
import styled from "styled-components";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";

const TbcQnA = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleClick = (accordionNumber) => {
    if (activeAccordion === accordionNumber) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(accordionNumber);
    }
  };

  return (
    <Wrapper>
      <QnAwrapper>
        <div className="title">
          <h2>ხშირად დასმული კითხვები</h2>
          <Link className="desctop" to="#">
            ყველა კითხვა
          </Link>
        </div>
        {QnaData.map((item) => (
          <div key={item.id} className="borderBottom">
            <div
              className="arroowWrapper"
              role="button"
              onClick={() => handleClick(item.id)}
            >
              <h3>{item.question}</h3>
              <SlArrowDown
                className={`${
                  activeAccordion === item.id ? "arrowRotate" : ""
                }`}
              />
            </div>
            {activeAccordion === item.id ? (
              <>
                <p className="answer">{item.answer}</p>
                <ul className="stages">
                  {item.stages &&
                    item.stages.map((stage, index) => (
                      <li key={index}>{stage}</li>
                    ))}
                </ul>
                <p className="note">{item.note}</p>
              </>
            ) : null}
          </div>
        ))}
        <Link className="mobileLink" to="#">
          ყველა კითხვა
        </Link>
      </QnAwrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .mobileLink {
    display: none;
    color: rgb(0, 174, 243);
    font-size: 25px;
    padding: 20px 0px 40px 0px;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    .desctop {
      display: none;
    }
    .mobileLink {
      display: block;
    }
  }
  background-color: rgb(22, 22, 22);
  display: flex;
  justify-content: center;
  align-items: center;
  .arrowRotate {
    display: inline-block;
    transform: rotate(180deg);
  }
`;
const QnAwrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 0px 20px 70px 20px;
  .borderBottom {
    border-bottom: 1px solid rgb(53, 49, 49);
    padding: 30px 0px 30px 0px;
  }
  .answer {
    margin-top: 30px;
    color: rgb(244, 244, 244);
  }
  .stages {
    color: rgb(244, 244, 244);
    margin: 30px 0px 30px 30px;
    line-height: 1.5;
  }
  .note {
    color: rgb(244, 244, 244);
    line-height: 1.5;
  }
  .title {
    display: flex;
    justify-content: space-between;
    color: rgb(244, 244, 244);
    padding-bottom: 20px;
    a {
      color: rgb(0, 174, 243);
      font-size: 25px;
    }
    h2 {
      font-size: 25px;
      font-weight: 300;
    }
  }
  .arroowWrapper {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    color: rgb(244, 244, 244);
    h3 {
      font-size: 20px;
      font-weight: 300;
    }
  }
`;
export default TbcQnA;
