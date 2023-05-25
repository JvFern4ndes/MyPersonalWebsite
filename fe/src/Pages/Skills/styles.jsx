import styled from 'styled-components';

export const Container = styled.section`
  margin: 0px auto;
  padding: 100px 0px;
  max-width: 1000px;
  display: block;
`;

export const SkillsPageTitle = styled.h2`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin: 10px 0px 40px;
  width: 100%;
  font-size: 32px;
  white-space: nowrap;
  font-weight: 600;
  line-height: 1.1;

  ::before {
    position: relative;
    counter-increment: section 1;
    content: "0" counter(section) ".";
    margin-right: 10px;
    color: ${({ theme }) => theme.tertiaryColor};
    font-family: 'Source Code Pro', sans-serif;
    font-size: 32px;
    font-weight: 400;
    white-space: nowrap;
    line-height: 1.1;
  }

  ::after {
    content: "";
    display: block;
    position: relative;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: ${({ theme }) => theme.tertiaryColor};
  }
`;

export const TechnologiesGrid = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 50px 0px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  position: relative;
`;

export const TechnologieCard = styled.li`
  position: relative;
  cursor: default;
  display: list-item;
  text-align: -webkit-match-parent;
  list-style: none;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    transform: translateY(-5px);

    a {
      color: ${({ theme }) => theme.tertiaryColor};
    }
  }
`;

export const CardContent = styled.div`
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  padding: 2rem 1.75rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.backgroundColorLight};
  overflow: auto;
`;

export const CardContentHeader = styled.header`
  display: block;
  width: 100%;
`;

export const HeaderTop = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 35px;
`;

export const TechnologieIcon = styled.div`
  display: block;
`;

export const PlayIcon = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: -10px;

  img {
    width: 32px;
  }
`;

export const CardTitle = styled.h3`
  margin: 0px 0px 10px;
  font-size: 22px;
  font-weight: 600;
  display: block;

  a {
    position: static;
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: ${({ theme }) => theme.color};
    line-height: 1.1;

    ::before {
      content: "";
      display: block;
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
    }
  }
`;

export const TechnologieDescription = styled.div`
  color: ${({ theme }) => theme.secondaryColor};
  display: block;

  p {
    margin: 0px;
    font-size: 18px;
  }
`;
