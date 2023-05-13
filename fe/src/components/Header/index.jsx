import { useState } from 'react';
import {
  ButtonNumber,
  ButtonText,
  Container, LeftSide, LeftText, ResumeButton, RightSide,
} from './styles';

import MyLogo from '../../assets/images/MyLogo.svg';

export default function Header() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <Container>
      <LeftSide
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <img src={MyLogo} alt="React Icon" />
        <LeftText className={isMouseOver ? 'entrada' : 'saida'}>João Victor</LeftText>
      </LeftSide>
      <RightSide>
        <ButtonText>
          <ButtonNumber>01.</ButtonNumber>
          About
        </ButtonText>
        <ButtonText>
          <ButtonNumber>03.</ButtonNumber>
          Experience
        </ButtonText>
        <ButtonText>
          <ButtonNumber>02.</ButtonNumber>
          Portfolio
        </ButtonText>
        <ButtonText>
          <ButtonNumber>04.</ButtonNumber>
          Contact
        </ButtonText>
        <ResumeButton>Resume</ResumeButton>
      </RightSide>
    </Container>
  );
}
