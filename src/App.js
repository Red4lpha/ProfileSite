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
    border: '#FFFFFF50',
    hover: '#FFFFFF95'
  },
  mobile: '768px',
}

function App() {
  //const [headerHeight, setHeaderHeight] = 0;
  
  return (
    <ThemeProvider theme={ theme }>
      <>
        <GlobalStyles />
        <Home />
        <Header />
        <Welcome />
        <Skills />
        <Projects />
        <Contact />
      </>
    </ThemeProvider>
  );
}

export default App;
