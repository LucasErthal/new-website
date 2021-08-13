import React from 'react';
import * as Styled from './styles';

interface Props {
  text: string;
  image: string;
}

const ImageTextSection: React.FC<Props> = ({ text, image }) => {
  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Styled.Image src={image} />
      </Styled.ImageContainer>

      <Styled.TextContainer>
        {text}
      </Styled.TextContainer>
    </Styled.Container>
  );
};

export default ImageTextSection;