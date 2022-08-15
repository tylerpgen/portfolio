import styled from "styled-components";
import { FaHtml5, FaCss3, FaReact, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  -webkit-animation-delay: 0.7s;
  -moz-animation-delay: 0.7s;
  animation-delay: 0.7s;
  -webkit-animation: fadeIn 1s ease-in 0s 1 normal forwards; /* call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */
  -moz-animation: fadeIn 1s ease-in 0s 1 normal forwards;
  animation: fadeIn 1s ease-in 0s 1 normal forwards;

  @media screen and (max-width: 780px) {
    height: auto;
  }

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (min-width: 780px) {
    height: auto;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;

  @media screen and (min-width: 780px) {
    margin-top: 20px;
  }
`;

const Header = styled.div`
  font-family: "Titillium Web", sans-serif;
  font-weight: 600;
  font-size: 3.2rem;
  text-decoration: underline;
  letter-spacing: 5px;
  color: #000;

  @media screen and (min-width: 780px) {
    font-size: 5rem;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 10px;
  line-height: 1.5;

  @media screen and (min-width: 780px) {
    padding: 0 400px;
    margin-bottom: 50px;
  }
`;

const Info = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.3rem;
  margin-top: 10px;

  @media screen and (min-width: 780px) {
    font-size: 1.7;
    font-weight: 500;
  }
`;

const IconContainer = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 20px;

  @media screen and (min-width: 780px) {
    flex-direction: row;
    margin-top: 40px;
    margin-bottom: 20px;
  }
`;

const Icon = styled.image`
  width: 50%;
  color: #000;
  font-size: 7rem;
  justify-content: space-between;
`;

const About = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header>About Me</Header>
      </HeaderContainer>
      <InfoContainer>
        <Info>
          Hello! <br />
          My name is Tyler Gener and I'm currently looking to become a front-end
          developer. I recently graduated from UC Santa Barbara with a Bachelor
          of Science in Psychology and Brain Sciences. I have been learning
          HTML, CSS, Javascript, React, and more for over a year and have loved
          every step of the learning process.
        </Info>
      </InfoContainer>
      <HeaderContainer>
        <Header>Skills</Header>
        <InfoContainer>
          <Info>
            I have been creating fully responsive front-end projects for over a
            year and always looking to improve my skill set. I have a strong
            passion for learning and great attention to detail. The programming
            tools I currently utilize include HTML, CSS, Javascript, ReactJS,
            and Git. <br />
            I'm always learning and looking to expand my programming arsenal!
          </Info>
        </InfoContainer>
      </HeaderContainer>
      <IconContainer>
        <Icon>
          <FaHtml5 />
        </Icon>
        <Icon>
          <FaCss3 />
        </Icon>
        <Icon>
          <IoLogoJavascript />
        </Icon>
        <Icon>
          <FaReact />
        </Icon>
        <Icon>
          <FaGitAlt />
        </Icon>
      </IconContainer>
    </Container>
  );
};

export default About;
