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
    }
  `}
`;

export const LeftSide = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const RightSide = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 32px;
`;
export const RightSideContent = styled.button`
  background: transparent;
  padding: 8px;
`;
