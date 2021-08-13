import styled from 'styled-components';

export const Button = styled.a`
  display: flex;
  width: 45%;
  height: 100%;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 8px;
  border: none;
  margin-bottom: 0;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.40);
  font-size: 24px;
  color: white;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  align-self: center;
  margin-top: 5%;
  &:hover {
    margin-bottom: 2.5%;
  }
`;