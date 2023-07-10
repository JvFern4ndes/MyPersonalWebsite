/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import JavascriptIcon from '../../assets/images/Javascript.svg';
import ReactIcon from '../../assets/images/React.svg';
import ReactNativeIcon from '../../assets/images/React Native.svg';
import NodeJsIcon from '../../assets/images/NodeJs.svg';
import MongoDBIcon from '../../assets/images/MongoDB.svg';
import WordpressIcon from '../../assets/images/Wordpress.svg';
// import StartIcon from '../../assets/images/PlayIcon.svg';

import {
  CardContent,
  CardContentHeader,
  Container,
  HeaderTop,
  TechnologieIcon,
  SkillsPageTitle,
  TechnologieCard,
  TechnologiesGrid,
  // PlayIcon,
  CardTitle,
  TechnologieDescription,
  CardFooter,
} from './styles';

export default function Skills() {
  return (
    <Container id="skills">
      <SkillsPageTitle>Some Technologies I Use To Develop</SkillsPageTitle>
      <TechnologiesGrid>
        <TechnologieCard>
          <CardContent>
            <CardContentHeader>
              <HeaderTop>
                <TechnologieIcon>
                  <img src={JavascriptIcon} alt="Technologie Icon" />
                </TechnologieIcon>
                {/* <PlayIcon>
                  <Link to="/JavascriptLearn">
                    <img src={StartIcon} alt="Play Icon" />
                  </Link>
                </PlayIcon> */}
              </HeaderTop>
              <CardTitle>
                <Link to="/JavascriptLearn">Javascript</Link>
              </CardTitle>
              <TechnologieDescription>
                <p>
                  JavaScript is a web programming language that adds interactivity and functionality to pages. It is used to create animations, validate data, interact with the user and build complex web applications.
                </p>
              </TechnologieDescription>
            </CardContentHeader>
            <CardFooter><p>Not available</p></CardFooter>
          </CardContent>
        </TechnologieCard>
        <TechnologieCard>
          <CardContent>
            <CardContentHeader>
              <HeaderTop>
                <TechnologieIcon>
                  <img src={ReactIcon} alt="Technologie Icon" />
                </TechnologieIcon>
                {/* <PlayIcon>
                  <Link to="/ReactLearn">
                    <img src={StartIcon} alt="Play Icon" />
                  </Link>
                </PlayIcon> */}
              </HeaderTop>
              <CardTitle>
                <Link to="/ReactLearn">React</Link>
              </CardTitle>
              <TechnologieDescription>
                <p>
                  JavaScript library for building interactive and reusable user interfaces.
                </p>
              </TechnologieDescription>
            </CardContentHeader>
            <CardFooter><p>Not available</p></CardFooter>
          </CardContent>
        </TechnologieCard>
        <TechnologieCard>
          <CardContent>
            <CardContentHeader>
              <HeaderTop>
                <TechnologieIcon>
                  <img src={ReactNativeIcon} alt="Technologie Icon" />
                </TechnologieIcon>
                {/* <PlayIcon>
                  <Link to="/ReactNativeLearn">
                    <img src={StartIcon} alt="Play Icon" />
                  </Link>
                </PlayIcon> */}
              </HeaderTop>
              <CardTitle>
                <Link to="/ReactNativeLearn">React Native</Link>
              </CardTitle>
              <TechnologieDescription>
                <p>
                  JavaScript framework for cross-platform mobile app development, allowing you to create native apps for iOS and Android with a shared code base.
                </p>
              </TechnologieDescription>
            </CardContentHeader>
            <CardFooter><p>Not available</p></CardFooter>
          </CardContent>
        </TechnologieCard>
        <TechnologieCard>
          <CardContent>
            <CardContentHeader>
              <HeaderTop>
                <TechnologieIcon>
                  <img src={NodeJsIcon} alt="Technologie Icon" />
                </TechnologieIcon>
                {/* <PlayIcon>
                  <Link to="/NodejsLearn">
                    <img src={StartIcon} alt="Play Icon" />
                  </Link>
                </PlayIcon> */}
              </HeaderTop>
              <CardTitle>
                <Link to="/NodejsLearn">Node.js</Link>
              </CardTitle>
              <TechnologieDescription>
                <p>
                  Server-side JavaScript runtime, allowing you to build scalable, high-performance applications with JavaScript on the backend.
                </p>
              </TechnologieDescription>
            </CardContentHeader>
            <CardFooter><p>Not available</p></CardFooter>
          </CardContent>
        </TechnologieCard>
        <TechnologieCard>
          <CardContent>
            <CardContentHeader>
              <HeaderTop>
                <TechnologieIcon>
                  <img src={MongoDBIcon} alt="Technologie Icon" />
                </TechnologieIcon>
                {/* <PlayIcon>
                  <Link to="/MongodbLearn">
                    <img src={StartIcon} alt="Play Icon" />
                  </Link>
                </PlayIcon> */}
              </HeaderTop>
              <CardTitle>
                <Link to="/MongodbLearn">MongoDB</Link>
              </CardTitle>
              <TechnologieDescription>
                <p>
                  Document-oriented NoSQL database, highly scalable and flexible, suitable for storing large volumes of unstructured data.
                </p>
              </TechnologieDescription>
            </CardContentHeader>
            <CardFooter><p>Not available</p></CardFooter>
          </CardContent>
        </TechnologieCard>
        <TechnologieCard>
          <CardContent>
            <CardContentHeader>
              <HeaderTop>
                <TechnologieIcon>
                  <img src={WordpressIcon} alt="Technologie Icon" />
                </TechnologieIcon>
                {/* <PlayIcon>
                  <Link to="/WordpressLearn">
                    <img src={StartIcon} alt="Play Icon" />
                  </Link>
                </PlayIcon> */}
              </HeaderTop>
              <CardTitle>
                <Link to="/WordpressLearn">WordPress</Link>
              </CardTitle>
              <TechnologieDescription>
                <p>
                  PHP-based content management platform (CMS), widely used to create websites and blogs, with a user-friendly interface and a wide range of themes and plugins available.
                </p>
              </TechnologieDescription>
            </CardContentHeader>
            <CardFooter><p>Not available</p></CardFooter>
          </CardContent>
        </TechnologieCard>
      </TechnologiesGrid>
    </Container>
  );
}
