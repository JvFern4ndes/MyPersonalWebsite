import { useState, useEffect } from 'react';

import {
  Container, LeftSide, RightSide, RightSideContent,
} from './styles';

import ReactIcon from '../../assets/images/ReactIcon.svg';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container
      className={`header ${isMobile ? 'header--mobile' : ''}`}
      isMobile={isMobile}
    >
      <LeftSide>
        <img src={ReactIcon} alt="React Icon" style={{ width: '64px', height: '64px' }} />
        João Victor
      </LeftSide>
      <RightSide>
        <RightSideContent>Sobre</RightSideContent>
        <RightSideContent>Portfólio</RightSideContent>
        <RightSideContent>Habilidades</RightSideContent>
        <RightSideContent>Experiência</RightSideContent>
        <RightSideContent>Contato</RightSideContent>
      </RightSide>
    </Container>
  );
}
