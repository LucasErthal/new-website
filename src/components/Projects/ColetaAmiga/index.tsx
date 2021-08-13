import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import SubTitle from '../../SubTitle';
import TextImageSection from '../../TextImageSection';
import TasFirstScreen from '../../../assets/gifs/TasFirstScreen.gif';
import TasCreateAccountScreen from '../../../assets/gifs/TasCreateAccountScreen.gif';
import TasMapScreen from '../../../assets/gifs/TasMapScreen.gif';
import * as Styled from './styles';
import ImageTextSection from '../../ImageTextSection';
import ButtonGithub from '../../ButtonGithubProject';

function ColetaAmiga() {
  const theme = useContext(ThemeContext)
  return (
    <Styled.Container>
      <SubTitle
        underlineColor={theme.colors.primary}
      >
        Coleta Amiga
      </SubTitle>

      <TextImageSection
        text="Foi meu primeiro projeto mobile após estudar pelo evento da Rocketseat (Next Level Week #2) 
        e também meu primeiro trabalho como freelancer. O app consiste em cadastrar Pessoas e Empresas, 
        onde as pessoas possam buscar locais de reciclagem e as empressas possam cadastrar seus locais de reciclagem."
        image={TasFirstScreen}
      />

      <ImageTextSection
        text="O projeto foi feito em React Native utilizando Typescript, 
        e o banco de dados utilizando o Express, 
        hospedado na Heroku como PostgreSQL."
        image={TasCreateAccountScreen}
      />

      <TextImageSection
        text="A parte de localidade e rotas foi um bom desafio por se tratar de um iniciante tanto em 
        Javascript quanto em manipulação de mapas, onde utilizei de vídeos que tratavam do assunto, 
        como clonagem do Uber(Clonando interface do Uber com React Native | Diego Fernandes, Rocketseat) 
        e muitos outros em inglês, além de, claro, a documentação oficial."
        image={TasMapScreen}
      />

      <ButtonGithub 
        link='https://github.com/Dev-TAS/TAS-mobile'
      />
      
    </Styled.Container>
  );
}

export default ColetaAmiga;