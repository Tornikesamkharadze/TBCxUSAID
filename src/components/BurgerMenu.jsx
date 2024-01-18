import React from "react";
import styled from "styled-components";

const BurgerMenu = () => {
  return (
    <StyledBurgerMenu>
      <StyledLine className="isleft" />
      <StyledLine className="ismiddle" />
      <StyledLine className="isright" />
    </StyledBurgerMenu>
  );
};

const StyledBurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const StyledLine = styled.div`
  height: 5px;
  background-color: #fff;
  margin: 5px 0;
  transition: 0.3s;
  border-radius: 2px;
  &.isleft {
    width: 20px;
  }
  &.ismiddle {
    width: 40px;
    margin-right: 20px;
  }
  &.isright {
    width: 20px;
    margin-left: 20px;
  }
`;

export default BurgerMenu;
