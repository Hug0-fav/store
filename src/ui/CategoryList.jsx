// component/CategoryList.jsx
import { useEffect, useState } from "react";
import { getCategories } from "../data/allProduct";
import styled from "styled-components";

const CategoryGrid = styled.ul`
  display: grid;
  color: var(--primary-color-01);
  gap: 1rem;
  padding: 0rem 0rem;
  list-style: none;
  text-align: center;
  text-transform: uppercase;
`;

const CategoryItem = styled.li`
  color: var(--primary-color-02);
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
`;

function CategoryList({ onSelect }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCategories();
      setCategories(data);
    }

    fetchData();
  }, []);

  return (
    <CategoryGrid>
      {categories.map((cat) => (
        <CategoryItem key={cat} onClick={() => onSelect(cat)}>
          {cat}
        </CategoryItem>
      ))}
    </CategoryGrid>
  );
}

export default CategoryList;
