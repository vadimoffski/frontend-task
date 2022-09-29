import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getOneProduct } from '../../redux/slices/productSlice';


const ProductPage = () => {
  const dispatch = useDispatch()
  const { product, status, error } = useSelector(({ product }) => product)
  const { id } = useParams()
  useEffect(() => {
    dispatch(getOneProduct(id))
  }, [])

  return (
    <div>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <p>Category: {product?.category}</p>
      <p>Brand: {product?.brand}</p>
      <p>Price: {product?.price}</p>
      <p>Stock: {product?.stock}</p>
    </div>
  )
}

export default ProductPage