import { useEffect } from "react";
import { useCart } from "../component/CartContext";
import { useNavigate } from "react-router-dom";

function Success() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("cartHistory")) || [];
    // const existingHistory =
    //   JSON.parse(localStorage.getItem("cartHistory")) || [];
    const updatedHistory = [...storedHistory, ...cartItems];

    localStorage.setItem("cartHistory", JSON.stringify(updatedHistory));
    clearCart();
  }, [clearCart, cartItems]);

  return (
    <div>
      <h1>Payment Successfully</h1>
      <p>Thanks for your purchase. We’ll start preparing your order.</p>
      <button
        onClick={() => navigate("/")}
        style={{ padding: "0.5rem 1rem", marginTop: "1rem" }}
      >
        Go to Home
      </button>
    </div>
  );
}

export default Success;
