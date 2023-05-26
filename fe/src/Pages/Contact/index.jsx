/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import {
  Container, NumberedTitle, Text, Title,
} from './styles';
import Button from '../../components/Button';

export default function Contact() {
  return (
    <Container id="contact">
      <NumberedTitle>What&apos;s Next?</NumberedTitle>
      <Title>Get In Touch</Title>
      <Text>
        I&apos;m always willing to help you in any way, my inbox is always open. If you have a question or just want to say hi, I&apos;ll do my best to get back to you as soon as possible!
      </Text>
      <Link to="/#">
        <Button style={{
          marginTop: 50,
          paddingBottom: 25,
          paddingTop: 25,
          paddingLeft: 50,
          paddingRight: 50,
          fontSize: 20,
        }}
        >
          Say Hello
        </Button>
      </Link>
    </Container>
  );
}
