import { Link } from 'react-router-dom';

import {
  Container,
  NavMenu,
  Content,
  Logo,
  OrderedList,
  ListElement,
} from './styles';

import MyLogo from '../../assets/images/MyLogo.svg';
import Button from '../Button';

export default function Header() {
  return (
    <Container>
      <Content>
        <Logo tabIndex={-1}>
          <a href="/" aria-label="Home">
            <img src={MyLogo} alt="My logo" />
          </a>
        </Logo>
        <NavMenu>
          <OrderedList>
            <ListElement>
              <a href="/#about">
                About
              </a>
            </ListElement>
            <ListElement>
              <a href="/#skills">
                Skills
              </a>
            </ListElement>
            <ListElement>
              <a href="/#portfolio">
                Portfolio
              </a>
            </ListElement>
            <ListElement>
              <a href="/#contact">
                Contact
              </a>
            </ListElement>
            <Link to="resume" style={{ textDecoration: 'none' }}>
              <Button style={{ marginLeft: 16 }}>Resume</Button>
            </Link>
          </OrderedList>
        </NavMenu>
      </Content>
    </Container>
  );
}
