import { useState, useEffect } from 'react';

import {
  ButtonText,
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
      <LeftSide
        className={`header ${isMobile ? 'header--mobile' : ''}`}
        isMobile={isMobile}
      >
        <img src={ReactIcon} alt="React Icon" />
        João Victor
      </LeftSide>
      <RightSide>
        <RightSideContent>
          <ButtonText>About</ButtonText>
        </RightSideContent>
        <RightSideContent>
          <ButtonText>Portfolio</ButtonText>
        </RightSideContent>
        <RightSideContent>
          <ButtonText>Skills</ButtonText>
        </RightSideContent>
        <RightSideContent>
          <ButtonText>Experience</ButtonText>
        </RightSideContent>
        <RightSideContent>
          <ButtonText>Contact</ButtonText>
        </RightSideContent>
      </RightSide>
    </Container>
  );
}
