import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 700px) {
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  @media(max-width: 1080px) {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
 width: 100%;
 max-width: 300px;
 border-radius: 20px;

 @media(max-width: 700px) {
    width: 80%;
  }
`;