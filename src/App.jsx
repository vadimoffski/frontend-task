import styled, { createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';


const GlobalStyle = createGlobalStyle`
*,*::before,*::after {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
a{
  text-decoration: none;
}
ul,ol,li{
  list-style: none;
}
h1,h2,h3{
  font-weight: inherit;
  font-size: inherit;
}
#root{
  height: 100%;
}
html,body{
  height: 100%;
  font-size: 16px;
  color: black;
  font-family: 'Poppins', sans-serif;
}
`;
const GlobalContainer = styled.div`
min-height: 100%;
display: flex;
flex-direction: column;
`;
function App() {

  return (
    <Router>
      <GlobalStyle />
      <GlobalContainer>
        <Header />
        <Main />
        <Footer />
        <div id="app-modal" />
      </GlobalContainer>
    </Router>
  );
}

export default App;
