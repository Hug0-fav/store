import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "./CartContext";

const Card = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 12px;
  padding: 20px;
  /* text-align: center; */
  transition: all 0.3s ease;
  background: white;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1rem;
  color: #333;
  height: 48px;
  overflow: hidden;
`;

const Price = styled.p`
  font-weight: bold;
  color: #111;
  margin: 0.5rem 0;
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
display: flex;
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  margin-top: 0.5rem;
  align-items: flex-end;
`;

function ProductCard({ product }) {
  const { addToCart } = useCart();

  if (!product) return null; //

  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>${product.price}</Price>
      <ViewButton to={`/product/${product.id}`}>View Details</ViewButton>
      <Cart onClick={() => addToCart(product)}>Add cart</Cart>
    </Card>
  );
}

export default ProductCard;
