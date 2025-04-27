import { getProductByCategories } from "../data/allProduct";
import { useEffect, useState } from "react";
import styled from "styled-components";

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

function GetCategories({ category }) {
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
        </CategoryItem>
      ))}
    </Item>
  );
}

export default GetCategories;
