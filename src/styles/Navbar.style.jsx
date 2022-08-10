import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
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

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;

  align-items: center;
  padding: 10px 20px;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const OpenLinksBtn = styled.button`
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

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 730px) {
    display: none;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
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

export const LogoLink = styled(Link)``;

export const NavbarLinkExtended = styled(Link)`
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

export const Logo = styled.img`
  margin: 10px 0;
  max-width: 60px;
  height: auto;
`;
