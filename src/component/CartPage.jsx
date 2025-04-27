import styled from "styled-components";
import { useCart } from "./CartContext";
import CheckoutButton from "./CheckoutButton";

const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: var(--secondary-color-05);
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`;

const CartItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid var(--secondary-color-06);
  background-color: var(--secondary-color-07);
  border-radius: 8px;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 8px;
    background-color: white;
  }

  h3 {
    font-size: 1.1rem;
    color: var(--primary-color-02);
    margin-bottom: 0.3rem;
  }

  p {
    color: var(--primary-color-01);
    margin-bottom: 0.5rem;
  }

  button {
    background-color: var(--primary-color-01);
    color: white;
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
    margin: 0 0.3rem;
    transition: background 0.2s;

    &:hover {
      background-color: var(--primary-color-02);
    }
  }

  span {
    min-width: 20px;
    text-align: center;
    display: inline-block;
    font-weight: bold;
    color: var(--primary-color-02);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    img {
      margin-bottom: 0.5rem;
    }
  }
`;

const PriceList = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: right;
  color: var(--primary-color-02);
  margin-top: 2rem;

  @media (max-width: 600px) {
    font-size: 1.4rem;
    text-align: center;
  }
`;

function CartPage() {
  const {
    cartItems,
    incrementQuantity,
    decrementQuantity,
    handleDelete,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <Container>
        <h2 style={{ textAlign: "center", color: "var(--primary-color-02)" }}>
          Your cart is empty
        </h2>
      </Container>
    );
  }

  return (
    <Container>
      {cartItems.map((item, i) => (
        <CartItemBox key={i}>
          <img src={item.image} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <div>
              <button onClick={() => decrementQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => incrementQuantity(item.id)}>+</button>
            </div>
          </div>

          <div>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button>Buy now</button>
          </div>
        </CartItemBox>
      ))}

      <PriceList>Total: ${totalPrice}</PriceList>

      <div style={{ textAlign: "right", marginTop: "1rem" }}>
        <CheckoutButton cartItems={cartItems} />
      </div>
    </Container>
  );
}

export default CartPage;
