import { Container, Content } from './styles';

import GithubIcon from '../../assets/images/GithubIcon.svg';
import LinkedinIcon from '../../assets/images/LinkedinIcon.svg';
import EmailIcon from '../../assets/images/EmailIcon.svg';

export default function StyledSideElement() {
  return (
    <Container>
      <Content>
        <li>
          <a href="https://github.com/JvFern4ndes" aria-label="Github">
            <img src={GithubIcon} alt="Github Icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jo%C3%A3ovictor/" aria-label="Linkedin">
            <img src={LinkedinIcon} alt="Linkedin Icon" />
          </a>
        </li>
        <li>
          <a href="https:/www.gmail.com/" aria-label="Linkedin">
            <img src={EmailIcon} alt="Linkedin Icon" />
          </a>
        </li>
      </Content>
    </Container>
  );
}
