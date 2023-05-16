import { useState } from 'react';
import {
  ButtonNumber,
  HeaderButton,
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
        <HeaderButton type="button">
          <ButtonNumber>01.</ButtonNumber>
          About
        </HeaderButton>
        <HeaderButton type="button">
          <ButtonNumber>03.</ButtonNumber>
          Experience
        </HeaderButton>
        <HeaderButton type="button">
          <ButtonNumber>02.</ButtonNumber>
          Portfolio
        </HeaderButton>
        <HeaderButton type="button">
          <ButtonNumber>04.</ButtonNumber>
          Contact
        </HeaderButton>
        <ResumeButton type="button">Resume</ResumeButton>
      </RightSide>
    </Container>
  );
}
