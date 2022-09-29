import styled from 'styled-components';
import { useHistory, useLocation, useParams } from "react-router";

const Wrapper = styled.div`
  padding: 10px 0px;
  background: #ccc9c5;
  margin-bottom: 20px;
`;
const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  color: black;
`;
const Header = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <Title>{location.pathname.startsWith('/product/') ? 'Product' : 'Products List View'} </Title>
    </Wrapper>
  )
}

export default Header