import styled from 'styled-components';

export const Container = styled.div`
  width: 3%;
  position: fixed;
  bottom: 0px;
  left: 3.5%;
  right: auto;
  z-index: 10;
  color: ${({ theme }) => theme.secondaryColor};
`;

export const Content = styled.ul`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

  li:last-of-type {
    margin-bottom: 1.5%;
  }

  li, a {
    padding: 10px;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
  }

  img {
    width: 1.5rem;
    transition: transform 0.3s ease-in-out;

    :hover {
      transform: translateY(-10px);
    }
  }

  ::after {
    content: '';
    display: block;
    width: 1px;
    height: 120px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;
