/* eslint-disable max-len */
import { Link } from 'react-router-dom';

import GithubIcon from '../../assets/images/GithubIcon.svg';
import ProjectLink from '../../assets/images/ProjectLink.svg';
import MyPortfolioImage from '../../assets/images/MyPortfolioImage.jpg';
import WaiterAppImage from '../../assets/images/WaiterAppImage.jpg';
import MyContactsImage from '../../assets/images/MyContactsImage.jpg';
import TailwindSpotifyImage from '../../assets/images/TailwindSpotifyImage.jpg';
import FinancialControlAppImage from '../../assets/images/FinancialControlAppImage.jpg';

import {
  Container,
  ProjectsList, Title,
  ProjectContainer,
  ProjectContent,
  Content,
  Overline,
  ProjectTitle,
  ProjectDescription,
  ProjectTechList,
  TechOfList,
  ProjectLinks,
  Picture,
  Wrapper,
  ImageWrapper,
  ImageContainer,
  Overlay,
  ProjectContent2,
  Content2,
  ProjectDescription2,
  ProjectTechList2,
  ProjectLinks2,
  Picture2,
  Overlay2,
} from './styles';

export default function Portfolio() {
  return (
    <Container id="portfolio">
      <Title>Some Things I&apos;ve Built</Title>
      <ProjectsList>
        <ProjectContainer>
          <Picture>
            <Wrapper>
              <ImageWrapper>
                <ImageContainer>
                  <Link to="/#">
                    <img src={MyPortfolioImage} alt="Me" />
                    <Overlay />
                  </Link>
                </ImageContainer>
              </ImageWrapper>
            </Wrapper>
          </Picture>
          <ProjectContent>
            <Content>
              <Overline>Featured Project</Overline>
              <Link to="/#">
                <ProjectTitle>My Own Portfolio</ProjectTitle>
              </Link>
              <ProjectDescription>
                <p>Development of my personal portfolio through javascript and ReactJs.</p>
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
            </Content>
          </ProjectContent>
        </ProjectContainer>
        <ProjectContainer>
          <Picture2>
            <Wrapper>
              <ImageWrapper>
                <ImageContainer>
                  <Link to="/#">
                    <img src={WaiterAppImage} alt="Me" />
                    <Overlay2 />
                  </Link>
                </ImageContainer>
              </ImageWrapper>
            </Wrapper>
          </Picture2>
          <ProjectContent2>
            <Content2>
              <Overline>Featured Project</Overline>
              <Link to="/#">
                <ProjectTitle>Waiter App</ProjectTitle>
              </Link>
              <ProjectDescription2>
                <p>It is a web and mobile application for restaurants, being responsible for facilitating the work of waiters. The app has, among other features, a list of products on the menu by category, modes, shopping cart and a dashboard with real time through WebSockets.</p>
              </ProjectDescription2>
              <ProjectTechList2>
                <TechOfList>React</TechOfList>
                <TechOfList>Javascript</TechOfList>
                <TechOfList>CSS</TechOfList>
                <TechOfList>HTML</TechOfList>
              </ProjectTechList2>
              <ProjectLinks2>
                <Link to="/#">
                  <img src={GithubIcon} alt="Github Link" />
                </Link>
                <Link to="/#">
                  <img src={ProjectLink} alt="Project Link" />
                </Link>
              </ProjectLinks2>
            </Content2>
          </ProjectContent2>
        </ProjectContainer>
        <ProjectContainer>
          <Picture>
            <Wrapper>
              <ImageWrapper>
                <ImageContainer>
                  <Link to="/#">
                    <img src={MyContactsImage} alt="Me" />
                    <Overlay />
                  </Link>
                </ImageContainer>
              </ImageWrapper>
            </Wrapper>
          </Picture>
          <ProjectContent>
            <Content>
              <Overline>Featured Project</Overline>
              <Link to="/#">
                <ProjectTitle>My Contacts</ProjectTitle>
              </Link>
              <ProjectDescription>
                <p>In this project, I developed a contact management application, from the REST API (contact CRUD) to the interface responsible for communicating with this API.</p>
              </ProjectDescription>
              <ProjectTechList>
                <TechOfList>React</TechOfList>
                <TechOfList>NodeJs</TechOfList>
                <TechOfList>PostgreSQL</TechOfList>
                <TechOfList>Javascript</TechOfList>
              </ProjectTechList>
              <ProjectLinks>
                <Link to="/#">
                  <img src={GithubIcon} alt="Github Link" />
                </Link>
                <Link to="/#">
                  <img src={ProjectLink} alt="Project Link" />
                </Link>
              </ProjectLinks>
            </Content>
          </ProjectContent>
        </ProjectContainer>
        <ProjectContainer>
          <Picture2>
            <Wrapper>
              <ImageWrapper>
                <ImageContainer>
                  <Link to="/#">
                    <img src={TailwindSpotifyImage} alt="Me" />
                    <Overlay2 />
                  </Link>
                </ImageContainer>
              </ImageWrapper>
            </Wrapper>
          </Picture2>
          <ProjectContent2>
            <Content2>
              <Overline>Featured Project</Overline>
              <Link to="/#">
                <ProjectTitle>Tailwind Spotify</ProjectTitle>
              </Link>
              <ProjectDescription2>
                <p>
                  Development of a project that is a version similar to the Spotify interface.
                  The purpose was to use two new tools for me: Tailwind and Next.js.
                </p>
              </ProjectDescription2>
              <ProjectTechList2>
                <TechOfList>React</TechOfList>
                <TechOfList>Javascript</TechOfList>
                <TechOfList>CSS</TechOfList>
                <TechOfList>HTML</TechOfList>
              </ProjectTechList2>
              <ProjectLinks2>
                <Link to="/#">
                  <img src={GithubIcon} alt="Github Link" />
                </Link>
                <Link to="/#">
                  <img src={ProjectLink} alt="Project Link" />
                </Link>
              </ProjectLinks2>
            </Content2>
          </ProjectContent2>
        </ProjectContainer>
        <ProjectContainer>
          <Picture>
            <Wrapper>
              <ImageWrapper>
                <ImageContainer>
                  <Link to="/#">
                    <img src={FinancialControlAppImage} alt="Me" />
                    <Overlay />
                  </Link>
                </ImageContainer>
              </ImageWrapper>
            </Wrapper>
          </Picture>
          <ProjectContent>
            <Content>
              <Overline>Featured Project</Overline>
              <Link to="/#">
                <ProjectTitle>Financial Control App</ProjectTitle>
              </Link>
              <ProjectDescription>
                <p>Development of my personal portfolio through javascript and ReactJs.</p>
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
            </Content>
          </ProjectContent>
        </ProjectContainer>
      </ProjectsList>
    </Container>
  );
}
