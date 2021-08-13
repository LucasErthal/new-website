import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 70px;
  padding: 5% 10% 5% 10%;
  align-items: center;
  display: flex;
  min-width: 100vw;
  @media(max-width: 1080px) {
    padding: 5% 0;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: ${props => props.theme.colors.foreground};
  padding: 5% 7.5% 5% 7.5%;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.40);
  border-radius: 12px;
  font-weight: 400;

  @media(max-width: 1080px) {
    width: 100vw;
  }
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 200px;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.40);

  @media(max-width: 1080px) {
    width: 150px;
    height: 150px;
  }

  @media(max-width: 410px) {
    width: 100px;
    height: 100px;
  }
`;

export const LandingImage = styled.img`
  margin-left: 5px;
  width: 50%;

  @media(max-width: 1080px) {
    width: 0;
  }
`;