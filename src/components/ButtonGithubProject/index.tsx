import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import * as Styled from './styles';
import { DiGithubAlt } from 'react-icons/di'

interface Props {
  link: string
}

const ButtonGithub: React.FC<Props> = ({ link }) => {
  const theme = useContext(ThemeContext);

  return (
    <Styled.Button
        color={theme.colors.primary}
        target="_blank"
        rel="noreferrer"
        href={link}
      >
        Github
        <DiGithubAlt color='white' size={60} />
      </Styled.Button>
  );
};

export default ButtonGithub;