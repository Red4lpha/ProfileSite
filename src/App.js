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
import theme from './Components/Styles/theme';

/*
TODO: Create a custom scroll bar
TODO: Add scrolling animation
TODO: Fix import warning on CSS global
TODO: Possibly think about moving skills divider to be under the text within the welcome page
TODO: Add a custom favicon
TODO: Change the container size to be in the theme and then change areas that are affected by it 
TODO: Center the description part of the article within projects
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
