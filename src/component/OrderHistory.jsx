import { useEffect, useState } from "react";
import styled from "styled-components";

const HistoryWrapper = styled.div`
  padding: 5rem 2rem;
  background-color: var(--secondary-color-02);
  min-height: 80vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--primary-color-01);
  margin-bottom: 3rem;
  text-align: center;
`;

const OrderList = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 900px;
  margin: 0 auto;
`;

const OrderItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background-color: var(--secondary-color-05);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  color: var(--primary-color-01);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 8px;
  background-color: #fff;
`;

const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-size: 1.1rem;
    margin: 4px 0;
  }

  strong {
    color: var(--primary-color-02);
  }
`;

const EmptyState = styled.p`
  color: var(--primary-color-02);
  text-align: center;
  font-size: 1.2rem;
  margin-top: 4rem;
`;

function OrderHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartHistory");
    if (storedCart) {
      setHistory(JSON.parse(storedCart));
    }
  }, []);

  return (
    <HistoryWrapper>
      <Title>Order History</Title>

      {history.length === 0 ? (
        <EmptyState>No orders in history</EmptyState>
      ) : (
        <OrderList>
          {history.map((item, index) => (
            <OrderItem key={index}>
              <ProductImage src={item.image} alt={item.title} />
              <OrderDetails>
                <span>
                  <strong>{item.title}</strong>
                </span>
                <span>Quantity: {item.quantity}</span>
                <span>Price: ₦{item.price}</span>
              </OrderDetails>
            </OrderItem>
          ))}
        </OrderList>
      )}
    </HistoryWrapper>
  );
}

export default OrderHistory;
