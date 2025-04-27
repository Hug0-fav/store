import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchAllProducts } from "../data/allProduct";
import styled from "styled-components";

// Styled components
const Wrapper = styled.div`
  padding: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background-color: var(--secondary-color-07);
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  color: var(--primary-color-01);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    max-width: 100%;
    height: 150px;
    object-fit: contain;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }

  p {
    font-weight: bold;
    color: var(--primary-color-02);
  }
`;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const [results, setResults] = useState([]);
  const query = useQuery().get("q");

  useEffect(() => {
    async function fetchSearch() {
      if (query) {
        const res = await fetchAllProducts();
        const filtered = res.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
      }
    }
    fetchSearch();
  }, [query]);

  return (
    <Wrapper>
      <h2>Search results for "{query}"</h2>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <Grid>
          {results.map((item) => (
            <Card key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <p>₦{item.price}</p>
            </Card>
          ))}
        </Grid>
      )}
    </Wrapper>
  );
}

export default SearchResults;
