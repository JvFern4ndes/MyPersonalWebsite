import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: block;
`;

export const Pages = styled.main`
  padding: 0px 150px;
  counter-reset: section 0;
  margin: 0px auto;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  display: block;
`;
