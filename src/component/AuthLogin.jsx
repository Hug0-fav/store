import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../data/auth";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    var(--primary-color-01),
    #203a43,
    #2c5364
  );
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Segoe UI", sans-serif;
  padding: 2rem;
`;

const LoginBox = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  padding: 3rem;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
  color: white;
  text-align: center;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 1rem;
  }
`;

const Heading = styled.h2`
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1rem;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  outline: none;

  ::placeholder {
    color: #ccc;
  }

  &:focus {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.9rem 1rem;
  border: none;
  border-radius: 1rem;
  background: linear-gradient(to right, #0072ff, #00c6ff);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(to right, #00c6ff, #0072ff);
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    font-size: 0.95rem;
  }
`;

const ErrorMessage = styled.p`
  color: #ff4b4b;
  margin-top: 1rem;
  font-size: 0.95rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

function AuthLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // try {
    //   await login({ email, password });
    //   navigate("/");
    // } catch (err) {
    //   setError(err.message);
    // }

    setError(null); // Clear any previous errors
    try {
      const data = await login({ email, password }); // catch the result
      console.log("Login successful!", data);

      if (rememberMe) {
        localStorage.setItem("user", JSON.stringify(data.user));
      } else {
        sessionStorage.setItem("user", JSON.stringify(data.user));
      }

      navigate("/");
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  }

  return (
    <Container>
      <LoginBox>
        <Heading>Welcome Back 👋</Heading>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember Me
          </label>
          <Button type="submit">Login</Button>
          <p style={{ marginTop: "1rem" }}>
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>
        </form>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </LoginBox>
    </Container>
  );
}

export default AuthLogin;
