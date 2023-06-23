import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: -100px;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: 100px;
  background-color: #080b18CC;
  backdrop-filter: blur(10px);
  filter: none;
  pointer-events: auto !important;
  user-select: auto !important;
`;

export const Content = styled.nav`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.color};
  font-family: 'Source Code Pro', sans-serif;
  font-size: 16px;
  counter-reset: item 0;
  z-index: 12;
  box-sizing: inherit;
`;

export const Logo = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  a {
    width: 64px;
    height: 64px;
    position: relative;
    z-index: 1;

    img {
      width: 64px;
      height: 64px;
      transition: transform 0.5s ease-in-out;

      :hover {
        transform: scale(1.2);
      }
    }
  }
`;

export const NavMenu = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const OrderedList = styled.ol`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  list-style: none;
`;

export const ListElement = styled.li`
  margin: 0px 5px;
  position: relative;
  counter-increment: item 1;
  display: list-item;
  text-align: -webkit-match-parent;

  a {
    font-family: 'Source Code Pro', sans-serif;
    padding: 10px;
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);

    ::before {
      content: "0" counter(item) ".";
      margin-right: 5px;
      color: ${({ theme }) => theme.tertiaryColor};
      text-align: right;
    }

    :hover {
      color: ${({ theme }) => theme.tertiaryColor};
    }
  }
`;
