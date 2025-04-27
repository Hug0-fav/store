import { useEffect, useState } from "react";
import { getCategories } from "../data/allProduct";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CategoryList = styled.ul`
  display: grid;
  color: var(--primary-color-02);
  text-transform: uppercase;
  gap: 2.2rem;
  list-style: none;
  width: 200px;
`;

function Categories({onSelectCategory}) {
  const [catergories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCategory() {
      const data = await getCategories();
      setCategories(data);
      setIsLoading(false);
    }

    setIsLoading(true);
    fetchCategory();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <CategoryList>
      {catergories.map((category) => (
        <li key={category} onClick={() => onSelectCategory(category)}>
          <Link to={`/category/${encodeURIComponent(category)}`}>
            {category}
          </Link>
        </li>
      ))}
    </CategoryList>
  );
}

export default Categories;
