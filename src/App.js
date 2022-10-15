import './App.css';
import { GlobalStyle } from './styles/GlobalStyle';
import TagLine from './sections/TagLine';
import RingModel from "./sections/RingModel"
import NavBar from './sections/Header';
function App() {
  return (
    <>
      <NavBar />
      <RingModel />
      <GlobalStyle />
      <TagLine />
    </>
  );
}

export default App;
