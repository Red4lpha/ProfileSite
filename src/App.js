import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/HomeIntroductory';
import Welcome from './Components/WelcomeSummary';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact  from './Components/Contact';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Welcome />
      <Skills />
      <Projects />
      <Contact />
      Hello
    </div>
  );
}

export default App;
