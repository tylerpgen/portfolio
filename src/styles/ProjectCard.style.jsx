import styled from "styled-components";

export const Container = styled.div``;

export const ProjectContainer = styled.div`
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

export const ProjectImage = styled.img`
  width: 180px;
  height: 180px;
  background-color: white;
  border-radius: 50%;
  transition: all 0.3s ease-in;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProjectTitleContainer = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  display: block;
  margin: auto;
  cursor: pointer;

  &:hover {
    display: none;
  }
`;

export const ProjectTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  text-shadow: 2px 2px black;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const ImageLink = styled.a`
  width: 200px;
  height: 200px;
  color: #fff;
  text-decoration: none;

  &:visited {
    color: #fff;
  }
`;
