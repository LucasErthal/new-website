import { createGlobalStyle } from 'styled-components';
import Background from '../assets/Background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition-property: background-color, margin;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    background-image: url(${Background});
    background-size: contain;
    background-attachment: fixed;

    animation-name: drop;
    animation-duration: 0.8s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: initial;
  }

  body, input, button, textarea {
    font: 60 22px  Nunito, sans-serif;

    outline-style: none;

    @media(max-width: 1080px) {
      font: 60 18px  Nunito, sans-serif;
  }
  }

  @keyframes drop {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;