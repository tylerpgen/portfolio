import React from "react";
import styled from "styled-components";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { Fade } from "@mui/material";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 2000px) {
    margin-top: 150px;
  }
`;

const NameHeader = styled.h1`
  font-family: "Titillium Web", sans-serif;
  font-weight: 600;
  font-size: 3.5rem;
  color: #000;
  letter-spacing: 5px;
  padding: 10px;
  margin-top: 180px;

  @media screen and (min-width: 800px) {
    font-size: 7.5rem;
    margin-top: 200px;
  }

  @media screen and (max-width: 400px) {
    font-size: 3rem;
    margin-top: 150px;
  }

  @media screen and (max-width: 325px) {
    font-size: 2rem;
    margin-top: 80px;
  }
`;

const TagHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  margin-top: 30px;
`;

const IconLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 75px 50px;

  @media screen and (min-width: 800px) {
    justify-content: center;
  }
`;
const IconLink = styled.a`
  color: #000;

  &:visited {
    color: black;
  }

  @media screen and (min-width: 800px) {
    margin: 90px 100px;
  }
`;

const Home = () => {
  return (
    <Fade in={true} timeout={2000}>
      <Container>
        <HeaderContainer>
          <NameHeader>TYLER GENER</NameHeader>
          <TagHeader>
            <i>Web Developer</i>
          </TagHeader>
        </HeaderContainer>
        <IconLinkContainer>
          <IconLink href="https://github.com/tylerpgen" target="_blank" rel="noreferrer">
            <FaGithubAlt style={{ fontSize: 55 }} />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/tylergener13/" target="_blank" rel="noreferrer">
            <FaLinkedin style={{ fontSize: 55 }} />
          </IconLink>
        </IconLinkContainer>
      </Container>
    </Fade>
  );
};

export default Home;
