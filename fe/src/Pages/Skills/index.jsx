import JavascriptIcon from '../../assets/images/Javascript.svg';
import ReactIcon from '../../assets/images/React.svg';
import ReactNativeIcon from '../../assets/images/React Native.svg';
import NodeJsIcon from '../../assets/images/NodeJs.svg';
import MongoDBIcon from '../../assets/images/MongoDB.svg';
import WordpressIcon from '../../assets/images/Wordpress.svg';

import {
  CardContent,
  CardContentHeader,
  Container,
  HeaderTop,
  Icon,
  SkillsPageTitle,
  TechnologieCard,
  TechnologiesGrid,
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
                <Icon>
                  <img src={JavascriptIcon} alt="Technologie Icon" />
                </Icon>
              </HeaderTop>
            </CardContentHeader>
          </CardContent>
        </TechnologieCard>
        <TechnologieCard>
          <CardContent>
            <CardContentHeader>
              <HeaderTop>
                <Icon>
                  <img src={ReactIcon} alt="Technologie Icon" />
                </Icon>
              </HeaderTop>
            </CardContentHeader>
          </CardContent>
        </TechnologieCard>
        <TechnologieCard>
          <CardContent>
            <CardContentHeader>
              <HeaderTop>
                <Icon>
                  <img src={ReactNativeIcon} alt="Technologie Icon" />
                </Icon>
              </HeaderTop>
            </CardContentHeader>
          </CardContent>
        </TechnologieCard>
        <TechnologieCard>
          <CardContent>
            <CardContentHeader>
              <HeaderTop>
                <Icon>
                  <img src={NodeJsIcon} alt="Technologie Icon" />
                </Icon>
              </HeaderTop>
            </CardContentHeader>
          </CardContent>
        </TechnologieCard>
        <TechnologieCard>
          <CardContent>
            <CardContentHeader>
              <HeaderTop>
                <Icon>
                  <img src={MongoDBIcon} alt="Technologie Icon" />
                </Icon>
              </HeaderTop>
            </CardContentHeader>
          </CardContent>
        </TechnologieCard>
        <TechnologieCard>
          <CardContent>
            <CardContentHeader>
              <HeaderTop>
                <Icon>
                  <img src={WordpressIcon} alt="Technologie Icon" />
                </Icon>
              </HeaderTop>
            </CardContentHeader>
          </CardContent>
        </TechnologieCard>
      </TechnologiesGrid>
    </Container>
  );
}
