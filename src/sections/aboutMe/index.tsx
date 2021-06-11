import React from 'react';
import * as Styled from './styles';

function AboutMe() {
  return (
    <Styled.Container>
      <Styled.BasicInfo>
        <Styled.Title>
          Informações Básicas
        </Styled.Title>
      </Styled.BasicInfo>

      <Styled.Contacts>
        <Styled.Title>
          Contatos e Mídias
        </Styled.Title>
      </Styled.Contacts>

      <Styled.Objectives>
        <Styled.Title>
          Objetivos
        </Styled.Title>
      </Styled.Objectives>

      <Styled.Interests>
        <Styled.Title>
          Interesses atuais
        </Styled.Title>
      </Styled.Interests>

    </Styled.Container>
  );
}

export default AboutMe;