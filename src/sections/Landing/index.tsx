import LandingImage from '../../assets/landing_image.svg';
import ProfileImage from '../../assets/profile.png';
import SubTitle from '../../components/SubTitle';
import * as Styled from './styles';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

function Landing() {
  const theme = useContext(ThemeContext);

  return (
    <Styled.Container id="inicio" >
      <Styled.ProfileContainer>
        <Styled.ProfileImage src={ProfileImage} alt="" />

        <SubTitle
          underlineColor={theme.colors.primary}
        >
          Lucas de Oliveira Mattos Erthal
        </SubTitle>

        Olá! Bem-vindo(a) ao meu site de portfólio.
        Sou um profissional de tecnologia, com experiência na área de programação, me especializando em
        desenvolvimento de aplicações mobile e web. Possuo experiência nas seguintes atividades:

        Desenvolvimento de aplicações mobile com React-Native e web com ReactJS utilizando Javascript e Typescript,
        integração com Firebase e Cloud Functions, NodeJS, Knex, TypeORM.
        Criação de documentação, levantamento de regras de negócio, requisitos de sistema e diagrama UML.
        Utilizo tanto SQL quanto NoSQL.
      </Styled.ProfileContainer>

      <Styled.LandingImage src={LandingImage} alt="" />
    </Styled.Container>
  );
}

export default Landing;