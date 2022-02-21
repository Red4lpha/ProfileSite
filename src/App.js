import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Components/Styles/Global';
import Header from './Components/Header';
import Home from './Components/HomeIntroductory';
import Welcome from './Components/WelcomeSummary';
import { DescriptionDivider } from './Components/DescriptionDivider';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact  from './Components/Contact';
import { useState } from 'react';

const theme = {
  dark: {
    bg: '#05182C',
    bodyFont: '#FFFFFF50',
    paragraphFont: 'rgba(255,255,255,.7)',
    border: '#FFFFFF50',
    hover: '#FFFFFF95',
    header: '#FFF'
  },
  mobile: '769px',
}

/*
TODO: Create a custom scroll bar
TODO: Add scrolling animation
TODO: Fix import warning on CSS global
*/


function App() {
  //this is used to keep track of the height of the header for use in
  //calculating homes height(100vh - the headers)
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <ThemeProvider theme={ theme }>
      <>
        <GlobalStyles />
        <Home headerHeight={headerHeight}/>
        <Header setHeaderHeight={setHeaderHeight}/>
        <Welcome />
        <DescriptionDivider />
        <Skills />
        <Projects />
        <Contact />
      </>
    </ThemeProvider>
  );
}

export default App;
