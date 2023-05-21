import styled from 'styled-components';

export const Container = styled.div`
  width: 3%;
  position: fixed;
  bottom: 0px;
  left: auto;
  right: 3.5%;
  z-index: 10;
  color: ${({ theme }) => theme.secondaryColor};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: 'Source Code Pro', sans-serif;
    letter-spacing: 0.1em;
    writing-mode: vertical-lr;
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: transform 0.3s ease-in-out;

    :hover {
      color: ${({ theme }) => theme.tertiaryColor};
      transform: translateY(-10px);
    }
  }

  ::after {
    content: "";
    display: block;
    width: 1px;
    height: 120px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;
