import styled from 'styled-components';

interface ButtonProps {
  color: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 5% 10% 5% 10%;

  @media(max-width: 1080px) {
    padding: 5% 0;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    'basicInfo contacts'
    'objectives interests'
    'more more'
  ;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5%;
  padding: 5% 0;

  @media(max-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const SmallCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.foreground};
  height: 350px;
  padding: 5% 5% 5% 5%;
  width: 90%;
  max-width: 700px;
  border-radius: 12px;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.40);
  justify-self: center;

  @media(max-width: 1080px) {
    width: 100%;
    height: 250px;
    margin-top: 5%;
  }
`;

export const More = styled.div`
  grid-area: more;
  border-radius: 12px;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.40);
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  font-weight: 400;
  white-space: wrap;
  flex-direction: column;
  justify-content: space-around;
`;

export const BasicInfo = styled(SmallCard)`
  grid-area: basicInfo;
`;

export const Contacts = styled(SmallCard)`
  grid-area: contacts;
`;

export const Objectives = styled(SmallCard)`
  grid-area: objectives;
`;

export const Interests = styled(SmallCard)`
  grid-area: interests;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  align-items: center;
  justify-content: space-around;

  @media(max-width: 1080px) {
    width: 100%;
    height: 50%;
  }
`;

export const ButtonComponent = styled.a`
  display: flex;
  width: 45%;
  height: 100%;
  background-color: ${(props: ButtonProps) => props.color};
  border-radius: 8px;
  border: none;
  margin-bottom: 0;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.40);
  font-size: 24px;
  color: white;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    margin-bottom: 2.5%;
  }
`;

export const MoreContainer = styled.div`
  grid-area: more;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.foreground};
  padding: 5% 5% 5% 5%;
  width: 100%;
  max-width: 1600px;
  border-radius: 12px;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.40);
  justify-self: center;

  @media(max-width: 1080px) {
    margin-top: 10%;
  }
`;

