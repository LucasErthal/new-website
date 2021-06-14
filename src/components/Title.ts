import styled  from 'styled-components';

interface TitleProps {
  underlineColor: string
}

const Title = styled.text`
  font-size: 42px;
  color: ${props => props.theme.colors.title};
  align-self: center;
  font-weight: 600;
  box-shadow: 0px 2px 0px 0px ${(props:TitleProps) => props.underlineColor};
`;

export default Title;