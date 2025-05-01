import { getProductByCategories } from "../data/allProduct";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const Item = styled.div`
  display: flex;
  overflow: auto;
  /* flex-wrap: wrap; */
  gap: 1.5rem;
`;

const CategoryItem = styled.div`
  flex: 0 0 200px;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  text-align: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 0.5rem;
  }
`;

const ViewButton = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  margin-top: 0.5rem;

  &:hover {
    opacity: 0.9;
  }
`;

const Cart = styled.button`
  /* display: flex; */
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  margin-top: 0.5rem;
  /* align-items: flex-end; */
`;

function GetCategories({ category }) {
  const { addToCart } = useCart();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchByCategory() {
      const data = await getProductByCategories(category);
      setProduct(data);
    }

    if (category) fetchByCategory();
  }, [category]);

  if (!category) return null;

  return (
    <Item>
      {product.map((p) => (
        <CategoryItem key={p.id}>
          <img src={p.image} alt={p.title} />
          <h4>{p.title}</h4>
          <p>₦{p.price}</p>
          <ViewButton to={`/product/${p.id}`}>View Details</ViewButton>
          <Cart onClick={() => addToCart(p)}>Add cart</Cart>
        </CategoryItem>
      ))}
    </Item>
  );
}

export default GetCategories;
