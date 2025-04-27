import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PmbES2MYjUmdaU83UBgvlAy5inCKuWqDbxF4qnsb9BNwepIzNMhHJ8gfBXPVa1GMcucHSSRs9L24TbY3UHfVohE00olhxrOhJ"
); // Replace with your real publishable key

export default function CheckoutButton({ cartItems }) {
  const handleCheckout = async () => {
    const stripe = await stripePromise; // ✅ Now we're using it!

    const res = await fetch("http://localhost:4242/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartItems }),
    });

    const data = await res.json();

    if (data.sessionId) {
      const result = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } else {
      alert("Something went wrong.");
      console.error("Checkout session response:", data);
    }
  };

  return <button onClick={handleCheckout}>Checkout</button>;
}
