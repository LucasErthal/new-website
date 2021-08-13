import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Course from '../../components/Course';
import Title from '../../components/Title';
import * as Styled from './styles';
import Certificates from '../../assets/certificates';

function Courses() {
  const theme = useContext(ThemeContext);

  return (
    <Styled.Container id="cursos">
      <Title underlineColor={theme.colors.tertiary}>
        Cursos
      </Title>

      <Styled.ContentContainer>
        <Course
          name='Web Design com Adobe XD, Bootstrap, GIMP, HTML e Photoshop'
          author='Alfahelix Treinamentos'
          certificate={Certificates.WEBDESIGN}
        />

        <Course
          name='Dominando Banco de Dados com MySQL'
          author='Hcode Treinamentos'
          certificate={Certificates.BDCERT}
        />


        <Course
          name='React Native: Desenvolva APPs Nativas para Android e iOS'
          author='Cod3r Cursos Online'
        />

        <Course
          name='C# Curso Completo: Do Básico ao Avançado!'
          author='COD3R Cursos Online'
          certificate={Certificates.CSHARPBA}
        />

        <Course
          name='ASP NET(C#) - Programação em Camadas - CRUD'
          author='Filipe Tório Lopes Ruas Nhimi'
          certificate={Certificates.CSHARPCRUD}
        />

<Course
          name='ASP NET C# com MVC5'
          author='Hugo Vasconcelos'
          certificate={Certificates.CSHARPMVC}
        />
      </Styled.ContentContainer>

    </Styled.Container>
  );
}

export default Courses;