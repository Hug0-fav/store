import { useEffect, useState } from "react";
import { getAllProducts } from "../data/allProduct";
import Spinner from "./Spinner";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const Layout = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

function AllProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      const data = await getAllProducts();
      console.log("Fetched local products:", data);
      setProducts(data);
      setLoading(false);
    }

    fetchProduct();
  }, []);

  if (loading) return <Spinner />;
  if (!products) return <p>No products found.</p>;

  return (
    <Layout>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Layout>
  );
}

export default AllProductList;
