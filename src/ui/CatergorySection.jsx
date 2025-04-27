import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllProducts } from "../data/allProduct";
import CategoryList from "./CategoryList";

const SectionWrapper = styled.section`
  display: flex;
  padding: 2rem;
`;

const Sidebar = styled.aside`
  width: 20%;
  padding-right: 2rem;
  border-right: 1px solid #eee;
`;

const MainContent = styled.main`
  flex: 1;
  padding-left: 2rem;
`;

const Htwo = styled.h2`
  padding: 3rem 0rem;
  color: var(--primary-color-02);
  text-align: center;
  font-size: 2.1rem;
  margin-bottom: 1rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
`;

const ProductCard = styled.div`
  border: 1px solid #eee;
  padding: 0 rem;
  text-align: center;
  border-radius: 8px;
`;

function CatergorySection() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchAll() {
      const data = await getAllProducts();
      setProducts(data);
    }

    fetchAll();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : [];

  return (
    <>
      <Htwo>Categories</Htwo>
      <SectionWrapper>
        <Sidebar>
          <CategoryList onSelect={setSelectedCategory} />
        </Sidebar>

        <MainContent>
          {selectedCategory && (
            <>
              <ProductGrid>
                {filteredProducts.map((p) => (
                  <ProductCard key={p.id}>
                    <img src={p.image} alt={p.title} width="100" />
                    <h4>{p.title}</h4>
                    <p>${p.price}</p>
                  </ProductCard>
                ))}
              </ProductGrid>
            </>
          )}
        </MainContent>
      </SectionWrapper>
    </>
  );
}

export default CatergorySection;
