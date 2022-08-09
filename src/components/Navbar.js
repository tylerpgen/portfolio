import { useState } from "react";
import LogoImg from "../assets/logo.png";
import { Turn as Hamburger } from "hamburger-react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksBtn,
  NavbarExtendedContainer,
  NavbarLinkExtended,
  LogoLink,
} from "../styles/Navbar.style";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/portfolio">Home</NavbarLink>
            <NavbarLink to="/about">About Me</NavbarLink>
            <NavbarLink to="/portfolio/projects">Projects</NavbarLink>
            <NavbarLink to="/contact">Contact</NavbarLink>
            <OpenLinksBtn
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              <Hamburger size={44} color="#fff" direction="right" rounded />
            </OpenLinksBtn>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <LogoLink to="/portfolio">
            <Logo src={LogoImg}></Logo>
          </LogoLink>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended
            onClick="window.location.reload();"
            to="/portfolio"
          >
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended
            onClick="window.location.reload();"
            to="/portfolio/about"
          >
            About Me
          </NavbarLinkExtended>
          <NavbarLinkExtended
            onClick="window.location.reload();"
            to="/portfolio/projects"
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
