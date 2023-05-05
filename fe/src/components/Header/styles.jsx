import styled from 'styled-components';

export const Container = styled.div`
  background: #ccc;
  height: 4em;

  ${(props) => props.theme.mediaQueries.tablet} {
    height: 80%;
  }
`;

export const Content = styled.div``;
