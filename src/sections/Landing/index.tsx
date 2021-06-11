import React from 'react';
import LandingImage from '../../assets/landing_image.svg';
import ProfileImage from '../../assets/profile.png';

import * as Styled from './styles';

function Landing() {
  return (
    <Styled.Container>
      <Styled.ProfileContainer>
        <Styled.ProfileImage src={ProfileImage} alt="" />

        <Styled.Title>
          Lucas de Oliveira Mattos Erthal
        </Styled.Title>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Styled.ProfileContainer>

      <Styled.LandingImage src={LandingImage} alt="" />
    </Styled.Container>
  );
}

export default Landing;