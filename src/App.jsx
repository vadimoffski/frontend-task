// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import './App.css';
import Header from './components/Header';
// import { getProducts } from './redux/slices/productsSlice';

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
html,body{
  font-size: 16px;
  color: black;
  font-family: 'Poppins', sans-serif;
}
`;

function App() {
  // const dispatch = useDispatch()
  // const store = useSelector((state) => state.products)
  // console.log(store);
  // useEffect(() => {
  //   dispatch(getProducts())
  // }, [])
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}

export default App;
