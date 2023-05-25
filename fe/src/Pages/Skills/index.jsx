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
                  JavaScript é uma linguagem de programação para web que adiciona interatividade e funcionalidade a páginas. É usado para criar animações, validar dados, interagir com o usuário e construir aplicativos da web complexos.
                </p>
              </TechnologieDescription>
            </CardContentHeader>
            <CardFooter><p>Não disponível</p></CardFooter>
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
                  Biblioteca JavaScript para construir interfaces de usuário interativas e reutilizáveis.
                </p>
              </TechnologieDescription>
            </CardContentHeader>
            <CardFooter><p>Não disponível</p></CardFooter>
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
                  Framework JavaScript para desenvolvimento de aplicativos móveis multiplataforma, permitindo criar apps nativos para iOS e Android com uma base de código compartilhada.
                </p>
              </TechnologieDescription>
            </CardContentHeader>
            <CardFooter><p>Não disponível</p></CardFooter>
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
                  Ambiente de execução JavaScript do lado do servidor, permitindo a construção de aplicativos escaláveis e de alta performance com JavaScript no backend.
                </p>
              </TechnologieDescription>
            </CardContentHeader>
            <CardFooter><p>Não disponível</p></CardFooter>
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
                  Banco de dados NoSQL orientado a documentos, altamente escalável e flexível, adequado para armazenar grandes volumes de dados não estruturados.
                </p>
              </TechnologieDescription>
            </CardContentHeader>
            <CardFooter><p>Não disponível</p></CardFooter>
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
                  Plataforma de gerenciamento de conteúdo (CMS) baseada em PHP, amplamente utilizada para criar sites e blogs, com uma interface amigável e uma ampla variedade de temas e plugins disponíveis.
                </p>
              </TechnologieDescription>
            </CardContentHeader>
            <CardFooter><p>Não disponível</p></CardFooter>
          </CardContent>
        </TechnologieCard>
      </TechnologiesGrid>
    </Container>
  );
}
