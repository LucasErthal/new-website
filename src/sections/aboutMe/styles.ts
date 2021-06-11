import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  width: 100%;
  padding: 5% 5% 5% 5%;
  grid-template-areas:
    'basicInfo contacts'
    'objectives interests'
    'more more'
  ;
  grid-gap: 5%;
  padding: 5% 5% 5% 5%;
`;

const SmallCard = styled.div`
  width: 100%;
`;

export const More = styled.div`
  
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

export const Title = styled.p`
  font-size: 40px;
  color: ${props => props.theme.colors.title}
`;

