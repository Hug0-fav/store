import styled from "styled-components";
import heroImg from "../assets/bg-cloth.jpg";

const StyledHeadPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
  background-color: var(--secondary-color-06);
  color: var(--primary-color-01);
  padding: 13rem 4rem;
  border-radius: 0 0 5rem 5rem;
  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: left;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(
      255,
      255,
      255,
      0.6
    ); /* overlay for text readability */
    z-index: 0;
    border-radius: 0 0 5rem 5rem;
  }
`;

const HeadContent = styled.div`
  z-index: 1;
  max-width: 600px;
`;

const SpanText = styled.h2`
  color: var(--primary-color-02);
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: var(--primary-color-02);
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;

const CTA = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Button = styled.button`
  color: var(--secondary-color-05);
  background-color: var(--primary-color-01);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color-02);
  }
`;

function HeadPage() {
  return (
    <StyledHeadPage>
      <HeadContent>
        <SpanText>Exclusive Deals for You</SpanText>
        <Text>
          Discover the best collections with amazing discounts. Fresh styles,
          premium quality, and deals you won’t want to miss.
        </Text>
        <CTA>
          <Button>Shop Now</Button>
          <Button
            style={{
              backgroundColor: "var(--secondary-color-01)",
              color: "var(--primary-color-02)",
            }}
          >
            Learn More
          </Button>
        </CTA>
      </HeadContent>
    </StyledHeadPage>
  );
}

export default HeadPage;
