import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import Title from "../../components/Title";
import ArrayProjects from '../../components/Projects';
import * as Styled from "./styles";
import { useEffect } from "react";

function Projects() {
  const theme = useContext(ThemeContext);
  const [projectIndex, setProjectIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState<JSX.Element>(ArrayProjects[0]);
  const ArrayProjectsNames = ["Coleta Amiga", "Quantum Investimentos", "Primeiro Web"];
  const ArrayColors = [theme.colors.primary, theme.colors.secondary, '#51B33D'];



  useEffect(() => {
    setCurrentProject(ArrayProjects[projectIndex])
  }, [projectIndex])

  return (
    <Styled.Container id="projetos" >
      <Title
        underlineColor={theme.colors.secondary}
      >
        Projetos
      </Title>

      <Styled.ContentContainer>
        <Styled.ButtonsContainer>
          {
            ArrayProjectsNames.map((element, index) => {
              return <Styled.Button
                bgColor={ArrayColors[index]}
                onClick={() => setProjectIndex(index)}
              >
                {element}
              </Styled.Button>
            })
          }
        </Styled.ButtonsContainer>

        <Styled.ProjectsContainer>
          {currentProject}
        </Styled.ProjectsContainer>

      </Styled.ContentContainer>
    </Styled.Container>
  );
};

export default Projects;