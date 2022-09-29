import styled from "styled-components";

import ProductList from "../../pages/ProductsList";
import ProductPage from "../../pages/ProductPage";
import {
  Route,
  Routes
} from "react-router-dom";

const Wrapper = styled.div`
max-width: 1024px;
width: 100%;
margin: 0 auto;
flex: 1 1 auto;
`;
const Main = () => {
  return (
    <Wrapper>
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route exact path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Wrapper>
  )
}

export default Main