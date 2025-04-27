import { Handshake, Headset, Vote } from "lucide-react";
import styled from "styled-components";

const Words = styled.div`
  margin: 6rem 2rem;
  border-radius: 1rem;
  padding: 3rem 2rem;
  background-color: var(--secondary-color-02);
  text-align: center;

  @media (max-width: 768px) {
    margin: 4rem 1.5rem;
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    margin: 3rem 1rem;
    padding: 2rem 1rem;
  }
`;

const P = styled.p`
  color: var(--primary-color-01);
  font-size: 2.8rem;
  font-weight: 600;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Benefit = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Method = styled.div`
  background-color: var(--secondary-color-04);
  padding: 2rem;
  flex: 1;
  border-radius: 0.75rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
  max-width: 320px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    color: var(--primary-color-02);
    width: 3rem;
    height: 3rem;
    margin-bottom: 1rem;
  }

  span {
    font-weight: 600;
    color: var(--primary-color-02);
    margin-bottom: 0.5rem;
    display: block;
    font-size: 1.1rem;
  }

  p {
    font-size: 0.95rem;
    color: var(--primary-color-02);
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

function Benefits() {
  return (
    <Words>
      <P>Benefits for your expediency</P>
      <Benefit>
        <Method>
          <Handshake />
          <span>Payment Method</span>
          <p>
            We offer flexible payment
            <br /> options to make it easier.
          </p>
        </Method>

        <Method>
          <Vote />
          <span>Return Policy</span>
          <p>
            You can return our product <br /> within 30 days.
          </p>
        </Method>

        <Method>
          <Headset />
          <span>Customer Support</span>
          <p>
            Our customer support <br /> is available 24/7.
          </p>
        </Method>
      </Benefit>
    </Words>
  );
}

export default Benefits;
