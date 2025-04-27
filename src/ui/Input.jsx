// import styled from "styled-components";

// const Input = styled.input`
//   border: 1px solid var(color-grey-300);
//   background-color: var(--color-grey-0);
//   border-radius: var(--border-radius-sm);
//   padding: 0.8rem 1.2rem;
//   box-shadow: var(--shadow-sm);
// `;

// export default Input;

import styled from "styled-components";

const Input = styled.input`
  padding: 0.9rem 1.1rem;
  font-size: 1rem;
  border: none;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  outline: none;
  transition: 0.3s ease;

  ::placeholder {
    color: #ccc;
  }

  &:focus {
    background: rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.05);
    cursor: not-allowed;
  }
`;

export default Input;
