import React, { useEffect, useState } from "react";
import routes from "../routes";
import { Link } from "react-router-dom";
import headerLogo from "../assets/images/headerLogo.png";
import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <Nav isScrolling={isScrolling}>
          <div className="navbar-logo">
            <Link to="/">
              <img src={headerLogo} alt="tbcx" />
            </Link>
          </div>
          <ul
            id="navbar"
            className={isBurgerOpen ? "#navbar " : "#navbar active"}
          >
            {routes.map((route) => (
              <li key={route.routId} className="routes">
                <StyledLink
                  to={route.route}
                  routid={route.routId}
                  onClick={toggleBurgerMenu}
                >
                  {route.name}
                </StyledLink>
              </li>
            ))}
          </ul>
          <div className="mobile">
            {isBurgerOpen ? (
              <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} />
            ) : (
              <GrClose
                onClick={toggleBurgerMenu}
                style={{ color: "#ffff", fontSize: "30px" }}
              />
            )}
          </div>
        </Nav>
      </header>
    </>
  );
};

const Nav = styled(({ isScrolling, ...rest }) => <nav {...rest} />)`
  @media (max-width: 975px) {
    justify-content: space-between;
    padding: 5%;
  }
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  height: 84px;
  padding: 0px 16%;
  background-color: ${(props) =>
    props.isScrolling ? "rgba(26, 30, 31, 0.925)" : "rgb(26, 30, 31)"};
  #navbar {
    @media (max-width: 975px) {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: flex-end;
      position: fixed;
      top: 0px;
      right: -55%;
      width: 55%;
      height: 100vh;
      background-color: rgb(34, 34, 34);
      transition: 0.3s ease-in-out;
      z-index: 40;
      li {
        margin-top: 50px;
      }
      li:first-child {
        margin-top: 100px;
      }
    }
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      list-style-type: none;
      position: relative;
      font-size: 1rem;
    }
  }
  #navbar.active {
    right: 0px;
  }
  .mobile {
    display: none;
    @media (max-width: 975px) {
      display: block;
      z-index: 40;
    }
  }
`;

const StyledLink = styled(Link)`
  @media (max-width: 975px) {
    padding: 40px;
  }
  padding: 0px 20px;
  text-decoration: none;
  color: ${(props) => (props.routid === 3 ? "rgb(0,163,224)" : "whitesmoke")};
  &:hover {
    color: rgb(0, 163, 224);
    transition: 1s;
  }
`;
export default Navbar;
