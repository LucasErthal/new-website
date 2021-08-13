import React from 'react';
import { useState } from 'react';
import * as Styled from './styles';

interface CourseProps {
  name: string
  author: string
  certificate?: any
}

const Course: React.FC<CourseProps> = ({ name, author, certificate }) => {
  const [isCertificateVisible, setIsCertificateVisible] = useState(false);



  return (
    <Styled.Container>
      <p>Nome: {name}</p>
      <p>Autor: {author}</p>


      {isCertificateVisible &&
        <img src={certificate} alt="" />
      }

      <Styled.Button
        isActive={certificate ? true : false}
        disabled={certificate ? false : true}
        onClick={() => setIsCertificateVisible(!isCertificateVisible)}
      >
        {isCertificateVisible &&
          "Ocultar Certificado"
        }

        {!isCertificateVisible && certificate &&
          "Exibir Certificado"
        }

        {!certificate &&
          "Certificado Indisponível"
        }
      </Styled.Button>
    </Styled.Container>
  );
}

export default Course;