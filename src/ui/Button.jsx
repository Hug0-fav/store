// import styled, { css } from "styled-components";

// const sizes = {
//   small: css`
//     font-size: 1.2rem;
//     padding: 0.4rem 0.8rem;
//     text-transform: uppercase;
//     font-weight: 600;
//     text-align: center;
//   `,
//   medium: css`
//     font-size: 1.4rem;
//     padding: 1.2rem 1.6rem;
//     font-weight: 500;
//   `,
//   large: css`
//     font-size: 1.6rem;
//     padding: 1.2rem 2.4rem;
//     font-weight: 500;
//   `,
// };

// const variations = {
//   primary: css`
//     color: var(--color-brand-50);
//     background-color: var(--color-brand-600);

//     &:hover {
//       background-color: var(--color-brand-700);
//     }
//   `,
//   secondary: css`
//     color: var(--color-grey-600);
//     background: var(--color-grey-0);
//     border: 1px solid var(--color-grey-200);

//     &:hover {
//       background-color: var(--color-grey-50);
//     }
//   `,
//   danger: css`
//     color: var(--color-red-100);
//     background-color: var(--color-red-700);

//     &:hover {
//       background-color: var(--color-red-800);
//     }
//   `,
// };

// const Button = styled.button`
//   border: none;
//   border-radius: var(--border-radius-sm);
//   color: var(--color-brand-50);

//   ${(props) => sizes[props.size]}
//   ${(props) => variations[props.variation]}
// `;

// Button.defaultProps = {
//   variation: "primary",
//   size: "medium",
// };

// export default Button;

import styled, { css } from "styled-components";

const BaseButton = styled.button`
  padding: 0.85rem 1.5rem;
  border: none;
  border-radius: 1rem;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 1rem;
  transition: all 0.3s ease;
  color: var(--primary-color-01);

  ${(props) =>
    props.variation === "secondary"
      ? css`
          background: #F3F6F5; 
          ;

          &:hover {
            background: #fdfbf8;
          }
        `
      : css`
          background: #1dd1a1;

          &:hover {
            background: #10ac84;
          }
        `}
`;

export default BaseButton;
