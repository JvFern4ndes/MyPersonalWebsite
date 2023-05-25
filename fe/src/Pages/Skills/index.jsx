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
          </CardContent>
        </TechnologieCard>
      </TechnologiesGrid>
    </Container>
  );
}
