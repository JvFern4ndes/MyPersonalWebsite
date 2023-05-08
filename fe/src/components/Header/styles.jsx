import styled from 'styled-components';

export const Container = styled.header`
  background: transparent;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #343a49;

  ${(props) => props.isMobile && `
    @media (max-width: 768px) {
      height: 6em;
      font-size: 8px;
      gap: 16px;
    }
  `}
`;

export const LeftSide = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  img {
    width: 64px;
    height: 64px;
  }

  :hover {
    transform: scale(1.2);
  }

  ${(props) => props.isMobile && `
    @media (max-width: 768px) {
      font-size: 16px;

      img {
        width: 48px;
        height: 48px;
      }
    }
  `}
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

export const RightSideContent = styled.div`
  :not(:last-child) {
    border-right: 1px solid #343a49;
  }


`;

export const ButtonText = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.color};
  font-weight: 500;
  border: none;
  margin: 8px 32px;
  transition: color 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;

  :hover {
    color: #5ed3f3;
    transform: scale(1.2);
  }

  // Falta passar essa prop para o index;
  ${(props) => props.isMobile && `
    @media (max-width: 768px) {
      font-size: 12px;
      margin: 8px;
      font-weight: 400;
    }
  `}
`;
