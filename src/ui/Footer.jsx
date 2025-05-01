import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footers = styled.footer`
  position: relative;
  background-color: var(--secondary-color-07);
  padding: 5rem 3rem;
  color: var(--primary-color-02);
  font-size: 0.95rem;
  bottom: 0;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1.5rem;
  }
`;

const FooterDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const FooterSection = styled.section`
  min-width: 160px;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Logo = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;

  svg {
    color: var(--primary-color-02);
    width: 1.4rem;
    height: 1.4rem;
    transition: color 0.3s;

    &:hover {
      color: var(--primary-color-01);
    }
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const Head = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 1rem;
`;

const Address = styled.address`
  font-style: normal;
  font-size: 0.9rem;
  margin-top: 1rem;
`;

const Li = styled.li`
  list-style: none;
  margin-bottom: 0.5rem;

  a {
    color: var(--primary-color-02);
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: var(--primary-color-01);
    }
  }
`;

const P = styled.p`
  text-align: center;
  font-size: 0.85rem;
  color: var(--primary-color-01);
`;

function Footer() {
  return (
    <Footers>
      <FooterDiv>
        <FooterSection>
          <Logo>HouseofGold</Logo>
          <SocialLink>
            <Facebook />
            <Instagram />
            <Twitter />
          </SocialLink>
          <Address>123 Gold St, Gold City, CA 12345</Address>
        </FooterSection>

        <FooterSection>
          <Head>My Account</Head>
          <Li>
            <Link to="/login">Sign in</Link>
          </Li>
          <Li>
            <Link to="/signup">Register</Link>
          </Li>
        </FooterSection>

        <FooterSection>
          <Head>Help</Head>
          <Li>Shipping</Li>
          <Li>Returns</Li>
          <Li>Sizing</Li>
        </FooterSection>

        <FooterSection>
          <Head>Shop</Head>
          <Li>
            <Link to="/products">All Product</Link>
          </Li>
          <Li>
            <Link to="/cart">Cart</Link>
          </Li>
          <Li>
            <Link to="/history">History</Link>
          </Li>
        </FooterSection>

        <FooterSection>
          <Head>Legal</Head>
          <Li>Shipping & Delivery</Li>
          <Li>Terms & Conditions</Li>
          <Li>Privacy & Policy</Li>
        </FooterSection>
      </FooterDiv>

      <P>&copy; 2025 HouseofGold. All rights reserved.</P>
    </Footers>
  );
}

export default Footer;
