import styled from 'styled-components';

interface ButtonProps {
  isActive: boolean
}

export const Container = styled.div`
  margin-top: 3%;
  display: flex;
  width: 50%;
  padding: 3% 5% 3% 5%;
  background-color: ${props => props.theme.colors.foreground};
  border-radius: 12px;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.40);
  flex-direction: column;

  @media(max-width: 1080px) {
    width: 70%;
  }

  @media(max-width: 800px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 250px;
  height: 70px;
  background-color: ${(props:ButtonProps) => props.isActive ? props => props.theme.colors.primary : "#999999"};
  border-radius: 8px;
  border: none;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.40);
  color: white;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  align-self: center;
  margin-top: 50px;

  @media(max-width: 1080px) {
    width: 200px;
    height: 65px;
    margin-top: 25px;
  }

  @media(max-width: 800px) {
    width: 150px;
    height: 60px;
  }
`;