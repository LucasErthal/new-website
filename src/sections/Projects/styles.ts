import styled from "styled-components";

interface ButtonProps {
  bgColor: string;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 5% 10% 5% 10%;
  justify-content: space-between;
  flex-direction: column;

  @media(max-width: 1080px) {
    padding: 5% 0;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 5%;

  @media(max-width: 700px) {
    flex-direction: column;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
	flex-wrap: nowrap;
	overflow-x: auto;
  margin: 0 5% 0 0;
  padding: 5px 0;
  flex-direction: column;

  @media(max-width: 700px) {
    flex-direction: row;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 250px;
  min-width: 250px;
  height: 70px;
  background-color: ${(props:ButtonProps) => props.bgColor};
  border-radius: 8px;
  border: none;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.40);
  color: white;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 5px 5px;
  text-align: center;

  @media(max-width: 1080px) {
    width: 200px;
    min-width: 200px;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 5% 5% 5% 5%;
  background-color: ${props => props.theme.colors.foreground};
  border-radius: 12px;
  justify-self: center;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.40);
`;