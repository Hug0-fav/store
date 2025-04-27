import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useCart } from "./CartContext";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  display: flex;
  gap: 2rem;
`;

const Image = styled.img`
  width: 300px;
  object-fit: contain;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2``;
const Price = styled.p`
  font-weight: bold;
`;
const Description = styled.p`
  margin: 1rem 0;
`;

const AddToCartButton = styled.button`
  padding: 0.5rem 1rem;
  background: black;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

function DetailingProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <Spinner />;
  if (!product) return <p>Product not found.</p>;

  return (
    <Wrapper>
      <Image src={product.image} alt={product.title} />
      <Info>
        <Title>{product.title}</Title>
        <Price>${product.price}</Price>
        <Description>{product.description}</Description>
        <AddToCartButton onClick={() => addToCart(product)}>
          Add to Cart
        </AddToCartButton>
      </Info>
    </Wrapper>
  );
}

export default DetailingProduct;
