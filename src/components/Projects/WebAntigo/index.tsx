import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import SubTitle from '../../SubTitle';
import TextImageSection from '../../TextImageSection';
import WebLandingScreen from '../../../assets/gifs/WebLandingScreen.gif';
import WebProjectsScreen from '../../../assets/gifs/WebProjectsScreen.gif';
import WebCoursesScreen from '../../../assets/gifs/WebCoursesScreen.gif';
import * as Styled from './styles';
import ImageTextSection from '../../ImageTextSection';
import ButtonGithub from '../../ButtonGithubProject';

function WebAntigo() {
  const theme = useContext(ThemeContext)
  return (
    <Styled.Container>
      <SubTitle
        underlineColor={theme.colors.tertiary}
      >
        Primeiro Web
      </SubTitle>

      <TextImageSection 
        text={`Foi o primeiro website pessoal que fiz, com o intuito de servir como portfólio, apresentando os projetos de
        forma mais amigavel para quem não tem costume de acessar o github, além de servir como estudo em desenvolvimento web.`}
        image={WebLandingScreen}
      />

      <ImageTextSection 
        text="A estrutura do site antigo era a mesma do atual, uma parte de com informações pessoais(Sobre mim),
        uma com os projetos do github(Projetos), e uma com os cursos que já fiz(Cursos)."
        image={WebProjectsScreen}
      />

      <TextImageSection 
        text="Foi feito em ReactJS com Typescript, não fazia uso de backend."
        image={WebCoursesScreen}
      />

      <ButtonGithub
        link='https://github.com/LucasErthal/Personal-Page'
      />
    </Styled.Container>
  );
}

export default WebAntigo;