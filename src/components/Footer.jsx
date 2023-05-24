import styled from "styled-components";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";

const currentyear = new Date().getFullYear();

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #1e212d;
`;

const FooterContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const IconLinkContainer = styled.div``;

const IconLink = styled.a`
  color: #fff;
  &:visited {
    color: #fff;
  }
  font-size: 1.5rem;
  margin: 90px 30px;

  @media screen and (min-width: 800px) {
    margin: 90px 20px;
  }
`;

const CopyrightContainer = styled.div`
  margin-top: 15px;
`;

const Copyright = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 0.6rem;
  color: #fff;
`;

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <IconLinkContainer>
          <IconLink href="https://github.com/tylerpgen" target="_blank" rel="noreferrer">
            <FaGithubAlt />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/tylergener13/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </IconLink>
        </IconLinkContainer>
        <CopyrightContainer>
          <Copyright>TG ©{currentyear}</Copyright>
        </CopyrightContainer>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
