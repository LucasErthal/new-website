import styled  from 'styled-components';
import Title from './Title';

const SubTitle = styled(Title)`
  font-size: 34px;
  margin-bottom: 5%;
  align-self: flex-start;
  width: 100%;

  @media(max-width: 1080px) {
    font-size: 24px;
  }
`;

export default SubTitle;