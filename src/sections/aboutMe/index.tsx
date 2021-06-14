import React from 'react';
import * as Styled from './styles';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { DiGithubAlt } from 'react-icons/di'
import { AiFillLinkedin } from 'react-icons/ai'

function AboutMe() {
  const theme = useContext(ThemeContext);

  return (
    <Styled.Container>
      <Title
        underlineColor={theme.colors.primary}
      >
        Sobre mim
      </Title>

      <Styled.GridContainer>
        <Styled.BasicInfo>
          <SubTitle
            underlineColor={theme.colors.secondary}
          >
            Informações Básicas
          </SubTitle>
          
          <Styled.TextContainer>
            Formação: Análise e Desenvolvimento de Sistemas<br />
            Instituição: Universidade Estácio de Sá<br />
            Localidade: São Gonçalo - Rio de Janeiro<br />
            Data de Nascimento: 25/11/1997
          </Styled.TextContainer>

        </Styled.BasicInfo>

        <Styled.Contacts>
          <SubTitle
            underlineColor={theme.colors.tertiary}
          >
            Contatos e Mídias
          </SubTitle>

          <Styled.TextContainer>
            Whatsapp:(21)98848-1631<br />
            E-mail: lucasdeveloper97@gmail.com

            <Styled.ButtonsContainer>
              <Styled.ButtonComponent
                color={theme.colors.primary}
                target="_blank"
                rel="noreferrer"
                href='https://github.com/LucasErthal'
              >
                Github
                <DiGithubAlt color='white' size={60} />
              </Styled.ButtonComponent>

              <Styled.ButtonComponent
                color={theme.colors.secondary}
                target="_blank"
                rel="noreferrer"
                href='https://www.linkedin.com/in/lucas-de-oliveira-mattos-erthal-aa580517b/'
              >
                LinkedIn
                <AiFillLinkedin color='white' size={60} />
              </Styled.ButtonComponent>
            </Styled.ButtonsContainer>
          </Styled.TextContainer>
        </Styled.Contacts>

        <Styled.Objectives>
          <SubTitle
            underlineColor={theme.colors.primary}
          >
            Objetivos
          </SubTitle>

          <Styled.TextContainer>
            Pretendo atuar como desenvolvedor
            Estagiário/Júnior afim de desenvolver minha carreira como profissional
            e aprimorar meus conhecimentos em desenvolvimento web e mobile.
          </Styled.TextContainer>
        </Styled.Objectives>

        <Styled.Interests>
          <SubTitle
            underlineColor={theme.colors.secondary}
          >
            Interesses atuais
          </SubTitle>
          <Styled.TextContainer>
            <ul>
              <li>Amazon Web Services</li>
              <li>Domain-Driven Design com React</li>
              <li>Clean Architecture</li>
              <li>NextJS</li>
            </ul>
          </Styled.TextContainer>
        </Styled.Interests>

        <Styled.MoreContainer>
          <SubTitle
            underlineColor={theme.colors.tertiary}
          >
            Como cheguei até aqui?
          </SubTitle>

          Comecei a estudar programação seriamente em meados de 2019, 
          quando consegui um estágio de desenvolvimento em C# .NET(Windows Forms) 
          com MySQL em um mercado pequeno da minha região.<br />

          Quando o projeto do estágio terminou, 
          tive interesse em aprender desenvolvimento web e mobile, 
          começando por estudar por cursos como 
          HTML e CSS+Bootstrap(Web Design com Adobe XD, Bootstrap, GIMP, HTML e Photoshop, por Diego Mariano, Udemy.com) 
          e mobile com React Native(React Native: Desenvolva APPs Nativas para Android e iOS por Leonardo Moura Leitao, Udemy.com).<br />

          Até que recebi o anúncio do evento Next Level Week #2, feito pela Rocketseat, 
          onde foi ensinado a criar uma aplicação do zero utilizando Typescript. O projeto 
          proposto nesse evento foi o Proffy, uma plataforma simples de conexão entre alunos e professores, 
          utilizando SQLite3 em ambiente de desenvolvimento e PostgreSQL em publicação.<br />

          Com base no que aprendi nesse evento, trabalhei como freelancer no desenvolvimento de uma aplicação 
          para TCC utilizando React Native chamada Coleta Amiga, que consistia em facilitar o acesso de pessoas 
          á locais de reciclagem, com cadastro de usuários e empresas, e exibindo a localidade e rota para os locais no maps utilizando google API.<br />
        </Styled.MoreContainer>
      </Styled.GridContainer>
    </Styled.Container>
  );
}

export default AboutMe;