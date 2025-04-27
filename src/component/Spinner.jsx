import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

const SpinnerCircle = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid #ccc;
  border-top-color: black;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Spinner = () => {
  return (
    <LoaderWrapper>
      <SpinnerCircle />
    </LoaderWrapper>
  );
};

export default Spinner;
