import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import SubTitle from '../../SubTitle';
import TextImageSection from '../../TextImageSection';
import MonthlyScreen from '../../../assets/gifs/MonthlyScreen.gif';
import CompoundScreen from '../../../assets/gifs/CompoundScreen.gif';
import FormScreen from '../../../assets/gifs/FormScreen.gif';
import * as Styled from './styles';
import ImageTextSection from '../../ImageTextSection';

function Investimentos() {
  const theme = useContext(ThemeContext)
  return (
    <Styled.Container>
      <SubTitle
        underlineColor={theme.colors.secondary}
      >
        Quantum Investimentos
      </SubTitle>

      <TextImageSection 
        text={`Aplicativo simples e prático de investimentos pessoais, consiste em duas calculadoras, 
        uma de retorno mensal em porcentagem, outra de crescimento "exponencial" para investimentos anuais, 
        com a opção de emitir os calculos em PDF.`}
        image={MonthlyScreen}
      />

      <ImageTextSection 
        text="O projeto foi feito em React Native utilizando Typescript, sem backend."
        image={CompoundScreen}
      />

      <TextImageSection 
        text="Também possui um formulário simples para emissão de dados pessoais, onde usei como referência
        o estilo de comprovante do aplicativo do Itaú."
        image={FormScreen}
      />
    </Styled.Container>
  );
}

export default Investimentos;