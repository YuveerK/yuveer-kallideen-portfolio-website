import './App.css';
import Header from './components/Header';
import styled from 'styled-components';
import Intro from './components/Intro';
import About from './components/About';
import Services from './components/Services';
import Resume from './components/Resume';
import Projects from './components/Projects';
function App() {
  return (
    <AppContainer>
      <Header />
      <Intro />
      <About />
      <Services />
      <Resume />
      <Projects />
    </AppContainer>
  );
}

const AppContainer = styled.div `
    max-width: 1400px;
    margin: auto;

`;
export default App;