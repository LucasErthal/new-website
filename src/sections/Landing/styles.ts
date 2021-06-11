import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 5% 5% 5% 5%;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: ${props => props.theme.colors.foreground};
  padding: 5% 7.5% 5% 7.5%;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  font-size: 24px;
  font-weight: 400;
`;

export const Title = styled.p`
  font-size: 40px;
  color: ${props => props.theme.colors.title}
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 200px;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const LandingImage = styled.img`
  
`;