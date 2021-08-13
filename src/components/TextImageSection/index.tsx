import React from 'react';
import * as Styled from './styles';

interface Props {
  text: string;
  image: string;
}

const TextImageSection: React.FC<Props> = ({ text, image }) => {
  return (
    <Styled.Container>
      <Styled.TextContainer>
        {text}
      </Styled.TextContainer>

      <Styled.ImageContainer>
        <Styled.Image src={image} />
      </Styled.ImageContainer>
    </Styled.Container>
  );
};

export default TextImageSection;