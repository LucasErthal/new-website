import { useState } from 'react';
import Header from './components/header';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

//#region Sections
import Landing from './sections/Landing';
import AboutMe from './sections/aboutMe';
//#endregion Sections

function App() {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Landing />
        <AboutMe />
      </div>
    </ThemeProvider>
  );
}

export default App;
