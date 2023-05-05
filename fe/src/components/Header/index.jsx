import { useState, useEffect } from 'react';

import { Container } from './styles';

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
      Olá Mundo!
    </Container>
  );
}
