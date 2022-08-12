import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "40px")};
  background: ${(props) =>
    props.extendNavbar
      ? "linear-gradient(to bottom, #E4E5E6, #00416A);"
      : "none"};
  background: ${(props) =>
    props.extendNavbar
      ? "-webkit-linear-gradient(to bottom, #00416a, #e4e5e6);"
      : "none"};

  display: flex;
  position: fixed;
  flex-direction: column;
  z-index: 3;

  @media screen and (min-width: 730px) {
    height: 80px;
  }
`;

const LeftContainer = styled.div`
  flex: 70%;
  display: flex;

  align-items: center;
  padding: 10px 20px;
`;

const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

const OpenLinksBtn = styled.button`
  display: flex;
  padding: 20px;
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #000;
  font-size: 2.5rem;

  cursor: pointer;

  @media screen and (min-width: 730px) {
    display: none;
  }
`;

const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 730px) {
    display: none;
  }
`;

const NavbarLinkContainer = styled.div`
  display: flex;
`;

const NavbarLink = styled(Link)`
  color: #000;
  font-family: "Inter", sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  margin: 10px 25px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 730px) {
    display: none;
  }
`;

const NavbarLinkExtended = styled(Link)`
  color: #000;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 2rem;
  text-decoration: none;
  margin: 40px 0;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/about">About Me</NavbarLink>
            <NavbarLink to="/projects">Projects</NavbarLink>
            <NavbarLink to="/contact">Contact</NavbarLink>
            <OpenLinksBtn
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              <Hamburger size={44} color="#000" direction="right" rounded />
            </OpenLinksBtn>
          </NavbarLinkContainer>
        </LeftContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended onClick="window.location.reload();" to="/">
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick="window.location.reload();" to="/about">
            About Me
          </NavbarLinkExtended>
          <NavbarLinkExtended
            onClick="window.location.reload();"
            to="/projects"
          >
            Projects
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick="window.location.reload();" to="/contact">
            Contact
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
