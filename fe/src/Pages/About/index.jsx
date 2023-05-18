import ColorSourceCodeProTexts from '../../components/ColorSourceCodeProTexts';
import { Container, Content, Title } from './styles';

export default function About() {
  return (
    <Container>
      <Content>
        <Title>
          <ColorSourceCodeProTexts>01.</ColorSourceCodeProTexts>
          {' '}
          About Me
        </Title>
      </Content>
    </Container>
  );
}
