import styled from 'styled-components';

export const Container = styled.div`
  background: #ccc;
  height: 4em;

  ${(props) => props.isMobile && `
    @media (max-width: 768px) {
      font-size: 8px;
    }
  `}
`;

export const Content = styled.div``;
