import styled, { keyframes } from 'styled-components';

export const Container = styled.header`
  background: transparent;
  padding: 8px;
  display: flex;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  font-size: 24px;
  font-weight: bold;
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: transform 1s ease-in-out;
  cursor: pointer;

  img {
    width: 80px;
    height: 80px;
  }

  :hover {
    transform: scale(1.2);
  }
`;

const enterText = keyframes`
  from {
    transform: translateX(-60px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const textLeave = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-60px);
    opacity: 0;
  }
`;

export const LeftText = styled.div`
  opacity: 0;

  &.entrada {
    animation: ${enterText} 1s ease-out forwards;
  }

  &.saida {
    animation: ${textLeave} 1s ease-in forwards;
  }
`;

export const RightSide = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const ButtonNumber = styled.div`
  color: ${({ theme }) => theme.secondaryColor};
  margin-right: 4px;
`;

export const HeaderButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.color};
  font-weight: 700;
  border: none;
  margin: 8px 32px;
  display: flex;
  transition: color 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.secondaryColor};
    transform: scale(1.2);
  }
`;

export const ResumeButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.secondaryColor};
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  margin: 8px 16px;
  padding: 16px 32px;
  border-radius: 8px;
  transition: color 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.secondaryColor};
    border: 1px solid ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.backgroundColor};
    transform: scale(1.2);
  }
`;
