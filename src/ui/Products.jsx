import { useEffect, useRef, useState } from "react";
import { getAllProducts } from "../data/allProduct";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import Spinner from "../component/Spinner";
import Product from "../page/Product";
import { Link } from "react-router-dom";

const FewProductDisplay = styled.div`
  padding-top: 3rem;
  text-align: center;
`;

const Htwo = styled.h2`
  color: var(--primary-color-02);
  font-size: 2.6rem;
`;

const CarouselItem = styled.div`
  margin: 1rem;
  padding: 1rem;
  text-align: center;
  margin-top: 1rem;
  /* background-color: ${(props) => props.bg}; */
  width: 300px;
  height: 300px;
`;

const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`;

const ProductTitle = styled.h4`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  color: #444;
`;

const Line = styled.div`
  border-top: 4px solid var(--primary-color-01);
  border-radius: 4px;
  margin: 0rem 7rem;
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
`;

const CustomArrow = styled.button`
  background: var(--secondary-color-01);
  color: var(--primary-color-01);
  padding: 0.5rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 0.5rem;
`;

const Button = styled(Link)`
  background: var(--primary-color-01);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
`;

function Products() {
  const carouselRef = useRef();

  const colors = [
    "#FFB6C1",
    "#ADD8E6",
    "#90EE90",
    "#FFD700",
    "#D8BFD8",
    "#FFA07A",
  ];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fectchProducts() {
      const allProducts = await getAllProducts();

      const random = allProducts.sort(() => 0.5 - Math.random());
      const select = random.slice(0, 6);

      setProducts(select);
    }

    fectchProducts();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <FewProductDisplay>
      <Htwo>Products</Htwo>
      {products.length > 0 ? (
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite
          autoPlaySpeed={3000}
          rtl={true}
          arrows={false}
          showDots={false}
          swipeable={true}
          transitionDuration={3000}
        >
          {products.map((product, index) => (
            <CarouselItem key={product.id} bg={colors[index % colors.length]}>
              <ProductImage src={product.image} alt={product.title} />
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>${product.price}</ProductPrice>
            </CarouselItem>
          ))}
        </Carousel>
      ) : (
        <Spinner />
      )}

      <Line>
        <ArrowContainer>
          <CustomArrow onClick={() => carouselRef.current.previous()}>
            {"<"}
          </CustomArrow>
          <CustomArrow onClick={() => carouselRef.current.next()}>
            {">"}
          </CustomArrow>
        </ArrowContainer>
      </Line>

      <Button to="/products">Explore all Product</Button>
    </FewProductDisplay>
  );
}

export default Products;
