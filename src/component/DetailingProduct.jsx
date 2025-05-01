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
  background-color: var(--secondary-color-06);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`;

const Image = styled.img`
  width: 300px;
  object-fit: contain;
  border-radius: 8px;
  background-color: var(--secondary-color-07);

  @media (max-width: 768px) {
    width: 100%;
    max-height: 250px;
  }

  @media (max-width: 480px) {
    max-height: 200px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: var(--primary-color-02);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--primary-color-03);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Description = styled.p`
  margin: 1rem 0;
  font-size: 1rem;
  color: var(--primary-color-01);

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const AddToCartButton = styled.button`
  padding: 0.5rem 1rem;
  background: var(--primary-color-02);
  color: var(--secondary-color-06);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  transition: background 0.3s;

  &:hover {
    background: var(--primary-color-03);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
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
