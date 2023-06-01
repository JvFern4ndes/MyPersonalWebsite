import { Link } from 'react-router-dom';

import GithubIcon from '../../assets/images/GithubIcon.svg';
import ProjectLink from '../../assets/images/ProjectLink.svg';

import {
  Container,
  ProjectsList, Title,
  ProjectContainer,
  ProjectContent,
  Overline,
  ProjectTitle,
  ProjectDescription,
  ProjectTechList,
  TechOfList,
  ProjectLinks,
  ProjectImage,
} from './styles';

export default function Portfolio() {
  return (
    <Container id="portfolio">
      <Title>Some Things I&apos;ve Built</Title>
      <ProjectsList>
        <ProjectContainer>
          <ProjectContent>
            <>
              <Overline>Featured Project</Overline>
              <Link to="/#">
                <ProjectTitle>Project 1</ProjectTitle>
              </Link>
              <ProjectDescription>
                <p>Realização do projeto 1</p>
              </ProjectDescription>
              <ProjectTechList>
                <TechOfList>React</TechOfList>
                <TechOfList>Javascript</TechOfList>
                <TechOfList>CSS</TechOfList>
                <TechOfList>HTML</TechOfList>
              </ProjectTechList>
              <ProjectLinks>
                <Link to="/#">
                  <img src={GithubIcon} alt="Github Link" />
                </Link>
                <Link to="/#">
                  <img src={ProjectLink} alt="Project Link" />
                </Link>
              </ProjectLinks>
            </>
          </ProjectContent>
          <ProjectImage>
            <Link to="/#">
              Image
            </Link>
          </ProjectImage>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectContent>
            <>
              <Overline>Featured Project</Overline>
              <Link to="/#">
                <ProjectTitle>Project 2</ProjectTitle>
              </Link>
              <ProjectDescription>
                <p>Realização do projeto 2</p>
              </ProjectDescription>
              <ProjectTechList>
                <TechOfList>React</TechOfList>
                <TechOfList>Javascript</TechOfList>
                <TechOfList>CSS</TechOfList>
                <TechOfList>HTML</TechOfList>
              </ProjectTechList>
              <ProjectLinks>
                <Link to="/#">
                  <img src={GithubIcon} alt="Github Link" />
                </Link>
                <Link to="/#">
                  <img src={ProjectLink} alt="Project Link" />
                </Link>
              </ProjectLinks>
            </>
          </ProjectContent>
          <ProjectImage>
            <Link to="/#">
              Image
            </Link>
          </ProjectImage>
        </ProjectContainer>
      </ProjectsList>
    </Container>
  );
}
