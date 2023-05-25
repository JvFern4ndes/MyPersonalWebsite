import { Link } from 'react-router-dom';
import JavascriptIcon from '../../assets/images/Javascript.svg';
import ReactIcon from '../../assets/images/React.svg';
import ReactNativeIcon from '../../assets/images/React Native.svg';
import NodeJsIcon from '../../assets/images/NodeJs.svg';
import MongoDBIcon from '../../assets/images/MongoDB.svg';
import WordpressIcon from '../../assets/images/Wordpress.svg';
import StartIcon from '../../assets/images/PlayIcon.svg';

import {
  CardContent,
  CardContentHeader,
  Container,
  HeaderTop,
  TechnologieIcon,
  SkillsPageTitle,
  TechnologieCard,
  TechnologiesGrid,
  PlayIcon,
  CardTitle,
} from './styles';

export default function Skills() {
  return (
    <Container id="skills">
      <SkillsPageTitle>Technologies I Use To Develop</SkillsPageTitle>
      <TechnologiesGrid>
        <TechnologieCard>
          <CardContent>
            <CardContentHeader>
              <HeaderTop>
                <TechnologieIcon>
                  <img src={JavascriptIcon} alt="Technologie Icon" />
                </TechnologieIcon>
                <PlayIcon>
                  <Link to="/JavascriptLearn">
                    <img src={StartIcon} alt="Play Icon" />
                  </Link>
                </PlayIcon>
              </HeaderTop>
            </CardContentHeader>
            <CardTitle>
              <Link to="/JavascriptLearn">Javascript</Link>
            </CardTitle>
          </CardContent>
        </TechnologieCard>
        <TechnologieCard>
          <CardContent>
            <CardContentHeader>
              <HeaderTop>
                <TechnologieIcon>
                  <img src={ReactIcon} alt="Technologie Icon" />
                </TechnologieIcon>
                <PlayIcon>
                  <Link to="/ReactLearn">
                    <img src={StartIcon} alt="Play Icon" />
                  </Link>
                </PlayIcon>
              </HeaderTop>
            </CardContentHeader>
            <CardTitle>
              <Link to="/ReactLearn">React</Link>
            </CardTitle>
          </CardContent>
        </TechnologieCard>
        <TechnologieCard>
          <CardContent>
            <CardContentHeader>
              <HeaderTop>
                <TechnologieIcon>
                  <img src={ReactNativeIcon} alt="Technologie Icon" />
                </TechnologieIcon>
                <PlayIcon>
                  <Link to="/ReactNativeLearn">
                    <img src={StartIcon} alt="Play Icon" />
                  </Link>
                </PlayIcon>
              </HeaderTop>
            </CardContentHeader>
            <CardTitle>
              <Link to="/ReactNativeLearn">React Native</Link>
            </CardTitle>
          </CardContent>
        </TechnologieCard>
        <TechnologieCard>
          <CardContent>
            <CardContentHeader>
              <HeaderTop>
                <TechnologieIcon>
                  <img src={NodeJsIcon} alt="Technologie Icon" />
                </TechnologieIcon>
                <PlayIcon>
                  <Link to="/NodejsLearn">
                    <img src={StartIcon} alt="Play Icon" />
                  </Link>
                </PlayIcon>
              </HeaderTop>
            </CardContentHeader>
            <CardTitle>
              <Link to="/NodejsLearn">Node.js</Link>
            </CardTitle>
          </CardContent>
        </TechnologieCard>
        <TechnologieCard>
          <CardContent>
            <CardContentHeader>
              <HeaderTop>
                <TechnologieIcon>
                  <img src={MongoDBIcon} alt="Technologie Icon" />
                </TechnologieIcon>
                <PlayIcon>
                  <Link to="/MongodbLearn">
                    <img src={StartIcon} alt="Play Icon" />
                  </Link>
                </PlayIcon>
              </HeaderTop>
            </CardContentHeader>
            <CardTitle>
              <Link to="/MongodbLearn">MongoDB</Link>
            </CardTitle>
          </CardContent>
        </TechnologieCard>
        <TechnologieCard>
          <CardContent>
            <CardContentHeader>
              <HeaderTop>
                <TechnologieIcon>
                  <img src={WordpressIcon} alt="Technologie Icon" />
                </TechnologieIcon>
                <PlayIcon>
                  <Link to="/WordpressLearn">
                    <img src={StartIcon} alt="Play Icon" />
                  </Link>
                </PlayIcon>
              </HeaderTop>
            </CardContentHeader>
            <CardTitle>
              <Link to="/WordpressLearn">WordPress</Link>
            </CardTitle>
          </CardContent>
        </TechnologieCard>
      </TechnologiesGrid>
    </Container>
  );
}
