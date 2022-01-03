import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Components/Styles/Global';
import Header from './Components/Header';
import Home from './Components/HomeIntroductory';
import Welcome from './Components/WelcomeSummary';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact  from './Components/Contact';

const theme = {
  dark: {
    bg: '#05182C',
    bodyFont: '#FFFFFF50',
    border: '#FFFFFF50'
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <>
        <GlobalStyles />
        <Header />
        <Home />
        <Welcome />
        <Skills />
        <Projects />
        <Contact />
      </>
    </ThemeProvider>
  );
}

export default App;
