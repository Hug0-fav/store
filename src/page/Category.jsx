import { useEffect, useState } from "react";
import { getCategories } from "../data/allProduct";
import GetCategories from "../component/GetCategories";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
`;

const CategoryBlock = styled.div`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h3`
  background-color: var(--secondary-color-05);
  color: var(--primary-color-01);
  padding: 1rem;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    background-color: var(--secondary-color-02);
  }
`;

function Category() {
  const [categories, setCategories] = useState([]);
  const [openCategories, setOpenCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCategories();
      setCategories(data);
    }

    fetchData();
  }, []);

  function toggleCategory(cat) {
    setOpenCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  return (
    <Wrapper>
      {categories.map((cat) => (
        <CategoryBlock key={cat}>
          <CategoryTitle onClick={() => toggleCategory(cat)}>
            {cat}
          </CategoryTitle>
          {openCategories.includes(cat) && <GetCategories category={cat} />}
        </CategoryBlock>
      ))}
    </Wrapper>
  );
}

export default Category;
