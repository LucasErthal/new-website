import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import * as Styled from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Styled.Container>
      <Styled.SectionsContainer>
        <Styled.SectionButton to="inicio" smooth duration={700} >
          Início
        </Styled.SectionButton>

        <Styled.SectionButton to="sobre" smooth duration={700} >
          Sobre Mim
        </Styled.SectionButton>

        <Styled.SectionButton to="projetos" smooth duration={700} >
          Projetos
        </Styled.SectionButton>

        <Styled.SectionButton to="cursos" smooth duration={700} >
          Cursos
        </Styled.SectionButton>
      </Styled.SectionsContainer>

      <Styled.SwitchContainer>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={colors.secondary}
          onColor={colors.primary}
          offHandleColor={colors.title}
        />
      </Styled.SwitchContainer>
      
    </Styled.Container>
  );
}

export default Header;