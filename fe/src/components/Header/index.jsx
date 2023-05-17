import { useState } from 'react';

import { Link } from 'react-router-dom';

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
      >
        <Link to="/">
          <img src={MyLogo} alt="React Icon" />
        </Link>
        <LeftText className={isMouseOver ? 'entrada' : 'saida'}>João Victor</LeftText>
      </LeftSide>
      <RightSide>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <HeaderButton type="button">
            <ButtonNumber>01.</ButtonNumber>
            About
          </HeaderButton>
        </Link>
        <Link to="/experience" style={{ textDecoration: 'none' }}>
          <HeaderButton type="button">
            <ButtonNumber>02.</ButtonNumber>
            Experience
          </HeaderButton>
        </Link>
        <Link to="portfolio" style={{ textDecoration: 'none' }}>
          <HeaderButton type="button">
            <ButtonNumber>03.</ButtonNumber>
            Portfolio
          </HeaderButton>
        </Link>
        <Link to="contact" style={{ textDecoration: 'none' }}>
          <HeaderButton type="button">
            <ButtonNumber>04.</ButtonNumber>
            Contact
          </HeaderButton>
        </Link>
        <Link to="resume" style={{ textDecoration: 'none' }}>
          <ResumeButton type="button">Resume</ResumeButton>
        </Link>
      </RightSide>
    </Container>
  );
}
