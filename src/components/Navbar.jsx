import React, { useState } from "react";
import routes from "../routes";
import { Link } from "react-router-dom";
import headerLogo from "../assets/images/headerLogo.png";
import styled from "styled-components";

const Navbar = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <>
      <header>
        <Nav>
          <div className="navbar-logo">
            <Link to="/">
              <img src={headerLogo} alt="tbcx" />
            </Link>
          </div>
          <ul className="navbar">
            {routes.map((route) => (
              <li key={route.routId} className="routes">
                <StyledLink to={route.route} routid={route.routId}>
                  {route.name}
                </StyledLink>
              </li>
            ))}
          </ul>
        </Nav>
      </header>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 84px;
  padding: 0px 12%;
  background-color: rgb(26, 30, 31);
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      list-style-type: none;
      position: relative;
      font-size: 1rem;
    }
  }
`;

const StyledLink = styled(Link)`
  padding: 0px 20px;
  text-decoration: none;
  color: ${(props) => (props.routid === 3 ? "rgb(0, 163, 193)" : "#ffff")};

  &:hover {
    color: rgb(0, 163, 193);
    transition: 1s;
  }
`;
export default Navbar;
