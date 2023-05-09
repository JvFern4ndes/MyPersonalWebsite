import {
  ButtonNumber,
  ButtonText,
  Container, LeftSide, ResumeButton, RightSide,
} from './styles';

import MyLogo from '../../assets/images/MyLogo.svg';

export default function Header() {
  return (
    <Container>
      <LeftSide>
        <img src={MyLogo} alt="React Icon" />
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
