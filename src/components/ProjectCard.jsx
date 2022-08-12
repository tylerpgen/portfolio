import styled from "styled-components";

const Container = styled.div``;

const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 20px;
  padding: 10px 0;
  flex-direction: column;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    margin: 20px 20px;
  }
`;

const ProjectImage = styled.img`
  width: 180px;
  height: 180px;
  background-color: white;
  border-radius: 50%;
  transition: all 0.3s ease-in;

  &:hover {
    transform: scale(1.1);
  }
`;

const ImageLink = styled.a`
  width: 200px;
  height: 200px;
  color: #fff;
  text-decoration: none;

  &:visited {
    color: #fff;
  }
`;

const Projects = (props) => {
  return (
    <Container>
      <ProjectContainer>
        <ImageLink href={props.link} target="_blank" rel="noopener noreferrer">
          <ProjectImage src={props.img} />
        </ImageLink>
      </ProjectContainer>
    </Container>
  );
};

export default Projects;
