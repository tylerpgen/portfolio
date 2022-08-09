import {
  Container,
  ImageLink,
  ProjectContainer,
  ProjectImage,
  ProjectTitle,
  ProjectTitleContainer,
} from "../styles/ProjectCard.style";

const Projects = (props) => {
  return (
    <Container>
      <ProjectContainer>
        <ImageLink
          href="https://ln-training.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectImage src={props.img} />
        </ImageLink>
        <ProjectTitleContainer>
          <ProjectTitle>LN Personal Training</ProjectTitle>
        </ProjectTitleContainer>
      </ProjectContainer>
    </Container>
  );
};

export default Projects;
