import { useState } from "react";
import { supabase } from "../data/supabase";
import styled from "styled-components";

const Form = styled.form`
  background-color: #f0f0f0;
  padding: 2rem;
  max-width: 400px;
  margin: 5rem auto;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #4caf50;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #43a047;
  }
`;

function ForgotPassword() {
  const [email, setEmail] = useState("");

  async function handleReset(e) {
    e.preventDefault();

    const { data, error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      console.error(error.message);
      alert("Error: " + error.message);
    } else {
      console.log("Reset email sent!", data);
      alert("Please check your email to reset your password.");
    }
  }

  return (
    <Form onSubmit={handleReset}>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit">Send Reset Link</Button>
    </Form>
  );
}

export default ForgotPassword;
