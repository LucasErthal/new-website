import styled from "styled-components";
import { Link } from 'react-scroll';

export const Container = styled.div`
  height: 60px;
  width: 100%;
  background: ${props => props.theme.colors.background};
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: center;
  top: 0;
  position: fixed;

  @media(max-width: 1080px) {
    padding: 0;
  }
`
export const SectionsContainer = styled.div`
  display: flex;
  width: 50%;
  background-color: transparent;
  justify-content: space-between;
  height: 100%;

  @media(max-width: 700px) {
    width: 100%;
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  width: 50px;
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  position: absolute;
  right: 0;
  margin-right: 10px;

  @media(max-width: 700px) {
    position: relative;
  }
`;

export const SectionButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
  background-color: ${props => props.theme.colors.background};
  border: none;
  color: ${props => props.theme.colors.title};
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;

  @media(max-width: 780px) {
    font-size: 18px;
  }

  @media(max-width: 410px) {
    font-size: 14px;
  }
  
  &:hover {
    background-color: ${props => props.theme.colors.foreground};
  }
`;