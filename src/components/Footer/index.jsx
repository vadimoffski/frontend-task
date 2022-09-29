import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10px;
  border-top: 2px solid black;
  padding: 10px 0px;
  background: #ffffff;
`;
const Title = styled.h1`
  font-size: 14px;
  text-align: center;
  color: black;
`;


const Footer = () => {
  return (
    <Wrapper>
      <Title>
        <a href="https://github.com/vadimoffski">
          GitHub</a>
      </Title>
      <Title>Vadym Hryshchenko</Title>
    </Wrapper>
  )
}

export default Footer