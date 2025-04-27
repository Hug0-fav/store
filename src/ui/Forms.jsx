// import styled, { css } from "styled-components";

// const Form = styled.form`
//   ${(props) =>
//     props.type === "regular" &&
//     css`
//       padding: 2.4rem 4rem;

//       /* Box */
//       background-color: var(--color-grey-0);
//       border: 1px solid var(--color-grey-100);
//       border-radius: var(--border-radius-md);
//     `}

//   ${(props) =>
//     props.type === "modal" &&
//     css`
//       width: 80rem;
//     `}

//   overflow: hidden;
//   font-size: 1.4rem;
// `;

// Form.defaultProps = {
//   type: "regular",
// };

// export default Form;

import styled from "styled-components";

const Forms = styled.form`
  max-width: 500px;
  margin: 5rem auto;
  background-color: var(--primary-color-01);
  backdrop-filter: blur(15px);
  padding: 3rem;
  border-radius: 2rem;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
  font-family: "Segoe UI", sans-serif;
  color: white;

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 3rem 1rem;
  }
`;

export default Forms;
