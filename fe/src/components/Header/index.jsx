import { useState } from 'react';

import { Link } from 'react-router-dom';

import {
  ButtonNumber,
  HeaderButton,
  Container,
  LeftSide,
  LeftText,
  RightSide,
} from './styles';

import MyLogo from '../../assets/images/MyLogo.svg';
import Button from '../Button';

export default function Header() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <Container>
      <LeftSide
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <Link to="/">
          <img src={MyLogo} alt="React Icon" />
        </Link>
        <LeftText className={isMouseOver ? 'entrada' : 'saida'}>João Victor</LeftText>
      </LeftSide>
      <RightSide>
        <Link to="#about">
          <HeaderButton type="button">
            <ButtonNumber>01.</ButtonNumber>
            About
          </HeaderButton>
        </Link>
        <HeaderButton type="button">
          <ButtonNumber>02.</ButtonNumber>
          Experience
        </HeaderButton>
        <HeaderButton type="button">
          <ButtonNumber>03.</ButtonNumber>
          Portfolio
        </HeaderButton>
        <HeaderButton type="button">
          <ButtonNumber>04.</ButtonNumber>
          Contact
        </HeaderButton>
        <Link to="resume" style={{ textDecoration: 'none' }}>
          <Button>Resume</Button>
        </Link>
      </RightSide>
    </Container>
  );
}
