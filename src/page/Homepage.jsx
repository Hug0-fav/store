import HeadPage from "../ui/HeadPage";
import Benefits from "../ui/Benefits";
import Product from "./Product";
import { useRef } from "react";

function Homepage() {
  const productRef = useRef(null);

  const scrollToProduct = () => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <HeadPage onButtonClick={scrollToProduct} />
      <div ref={productRef}>
        <Product />
      </div>
      {/* <CatergorySection /> */}
      {/* <Products /> */}
      <Benefits />
    </>
  );
}

export default Homepage;
