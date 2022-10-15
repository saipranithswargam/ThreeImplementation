import './App.css';
import { GlobalStyle } from './styles/GlobalStyle';
import Quote from './sections/TagLine';
import PhoneModel from "./sections/RingModel"
import NavBar from './sections/Header';
function App() {
  return (
    <>
      <NavBar />
      <PhoneModel />
      <GlobalStyle />
      <Quote />
    </>
  );
}

export default App;
