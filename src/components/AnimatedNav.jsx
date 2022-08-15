import { useState } from "react";

import Hamburger from "hamburger-react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Navbar = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;

  @media screen and (max-width: 770px) {
    display: flex;
    justify-content: center;
  }
`;

const NavbarLinkContainer = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  position: relative;

  @media screen and (max-width: 770px) {
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    margin-right: 80px;
    max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
    transition: max-height 0.5s ease-in;
    top: 20px;
  } ;
`;
const NavbarLink = styled(Link)`
  color: #000;
  font-family: "Inter", sans-serif;
  font-size: 1.9rem;
  font-weight: 500;
  text-decoration: none;
  margin: 25px 30px;
  cursor: pointer;
  transition: all 0.1s ease-in;

  &:hover {
    text-decoration: underline;
    transform: scale(1.1);
  }

  @media screen and (max-width: 330px) {
    font-size: 1.2rem;
  }
`;

const HamburgerBtn = styled.button`
  padding: 20px;
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #000;
  font-size: 2.5rem;
  cursor: pointer;

  @media screen and (min-width: 770px) {
    display: none;
  }
`;

const AnimatedNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <HamburgerBtn onClick={() => setIsOpen(!isOpen)}>
        <Hamburger size={44} color="#000" direction="right" rounded />
      </HamburgerBtn>
      <Navbar>
        <NavbarLinkContainer isOpen={isOpen}>
          <NavbarLink onClick="window.location.reload();" to="/">
            Home
          </NavbarLink>
          <NavbarLink onClick="window.location.reload();" to="/about">
            About
          </NavbarLink>
          <NavbarLink onClick="window.location.reload();" to="/projects">
            Work
          </NavbarLink>
        </NavbarLinkContainer>
      </Navbar>
    </Container>
  );
};

export default AnimatedNav;
