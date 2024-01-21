import React, { useState } from "react";
import QnaData from "../data/AccordionData.json";
import styled from "styled-components";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
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
        {QnaData.map((item) => (
          <div key={item.id} className="borderBottom">
            <div
              className="arroowWrapper"
              role="button"
              onClick={() => handleClick(item.id)}
            >
              <h3>{item.question}</h3>
              <MdOutlineKeyboardArrowDown
                className={`${activeAccordion === item.id ? "arrow" : ""}`}
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
      </QnAwrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: rgb(22, 22, 22);
  display: flex;
  justify-content: center;
  align-items: center;
  .arrow {
    display: inline-block;
    transform: rotate(180deg);
  }
`;
const QnAwrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 0px 20px 0px 20px;
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
