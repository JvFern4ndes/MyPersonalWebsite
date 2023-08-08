import styled from 'styled-components';

export default styled.button`
  width: max-content;
  font-family: 'Source Code Pro', sans-serif;
  font-weight: bold;
  background: transparent;
  color: ${({ theme }) => theme.tertiaryColor};
  border: 1px solid ${({ theme }) => theme.tertiaryColor};
  border-radius: 4px;
  padding: 12px 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  transition: color 0.5s ease-in-out;
  transition: transform 0.5s ease-in-out;

  :active {
    background: ${({ theme }) => theme.tertiaryColorActive};
  }

  &[disabled] {
    background: #ccc;
    border: 1px solid ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.backgroundColor};
    cursor: default;

    :hover {
      transform: scale(1);
    }
  }
`;
