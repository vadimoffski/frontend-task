import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteProducts } from '../../redux/slices/productsSlice'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
max-width: 300px;
height: 100%;
border-bottom: 2px solid #F5F5F5;
padding: 10px 5px;
transition: .3s ease-in;
justify-content: space-between;
&:hover {
   border-bottom: 2px solid #fc5a5a;
}
img{
  display: block;
  max-width: 200px;
  height: auto;
  margin: 0 auto;
}
span{
  font-size: 12px;
  text-align: end;
}
`;

const Description = styled.div`
h3{
  font-size: 18px;
   font-weight: 400;
   color: #444444;
   margin: 0 0 10px 0;
   font-weight: bold;
}
span{
   font-size: 14px;
   font-weight: 400;
   margin: 0 0 10px 0;
   color: red;
}
p{
  font-size: 14px;
}

`;
const DeleteProductBtn = styled.button`
align-self: flex-end;
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
padding: 5px;
cursor: pointer;
&:hover{
  background: palevioletred;
  color: white;
}
`

const Product = ({ id, images = '', title, description, category, price, stock }) => {
  const dispatch = useDispatch()
  return (
    <>
      <Wrapper>
        <DeleteProductBtn onClick={() => dispatch(deleteProducts(id))}>x</DeleteProductBtn>
        <Link to={`/product/${id}`}>
          <span>{category}</span>
          <img src={images[0] || "https://dummyjson.com/image/i/products/28/2.jpg"} alt={title} />
          <Description>
            <h3>{title}</h3>
            <span>Price: {price}</span>
            <p>{description}</p>
            <span>Amount: {stock}</span>
          </Description>
        </Link >
      </Wrapper>
    </>
  )
}

export default Product