import styled from "styled-components";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
const Container = styled.div`
  width: 100%;
  height: 100%;
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
    padding: 0 100px;
    margin-top: 25px;
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
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  margin-left: 90px;

  @media screen and (min-width: 780px) {
    flex-direction: row;
    margin-top: 80px;
  }
`;

const Icon = styled.svg`
  color: #000;
  font-size: 7rem;
`;

const About = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header>About Me</Header>
      </HeaderContainer>
      <InfoContainer>
        <Info>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto
          distinctio ratione ut nulla placeat, repudiandae quam debitis
          architecto, modi blanditiis consequuntur aspernatur facere dolor porro
          sit soluta accusamus beatae? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Dicta iusto distinctio ratione ut nulla placeat,
          repudiandae quam debitis architecto, modi blanditiis consequuntur
          aspernatur facere dolor porro sit soluta accusamus beatae? Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto
          distinctio ratione ut nulla placeat, repudiandae quam debitis
          architecto, modi blanditiis consequuntur aspernatur facere dolor porro
          sit soluta accusamus beatae?
        </Info>
      </InfoContainer>
      <HeaderContainer>
        <Header>Skills</Header>
        <InfoContainer>
          <Info>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            iusto distinctio ratione ut nulla placeat, repudiandae quam debitis
            architecto, modi blanditiis consequuntur aspernatur facere dolor
            porro sit soluta accusamus beatae? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Dicta iusto distinctio ratione ut
            nulla placeat, repudiandae quam debitis architecto, modi blanditiis
            consequuntur aspernatur facere dolor porro sit soluta accusamus
            beatae? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dicta iusto distinctio ratione ut nulla placeat, repudiandae quam
            debitis architecto, modi blanditiis consequuntur aspernatur facere
            dolor porro sit soluta accusamus beatae?
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
      </IconContainer>
    </Container>
  );
};

export default About;