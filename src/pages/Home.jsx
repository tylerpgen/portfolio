import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameHeader = styled.h1`
  font-family: "Titillium Web", sans-serif;
  font-weight: 600;
  font-size: 3.5rem;
  color: #000;
  letter-spacing: 5px;
  padding: 10px;
  margin-top: 230px;

  -webkit-animation: fadein 3s;
  animation: fadein 3s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (min-width: 800px) {
    font-size: 9rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 3rem;
    margin-top: 200px;
  }

  @media screen and (max-width: 325px) {
    font-size: 2rem;
    margin-top: 150px;
  }
`;

const TagHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  margin-top: 30px;
  -webkit-animation: fadein 3s;
  animation: fadein 3s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const IconLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 75px 50px;
  -webkit-animation: fadein 3s;
  animation: fadein 3s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

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
    <Container>
      <HeaderContainer>
        <NameHeader>TYLER GENER</NameHeader>
        <TagHeader>
          <i>Front End Developer</i>
        </TagHeader>
      </HeaderContainer>
      <IconLinkContainer>
        <IconLink
          href="https://github.com/tylerpgen"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon style={{ fontSize: 55 }} />
        </IconLink>
        <IconLink
          href="https://github.com/tylerpgen"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon style={{ fontSize: 55 }} />
        </IconLink>
      </IconLinkContainer>
    </Container>
  );
};

export default Home;
