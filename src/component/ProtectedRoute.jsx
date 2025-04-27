import { useEffect, useState } from "react";
import { getCurrentUser } from "../data/auth";
import Spinner from "./Spinner";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkUser() {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      setLoading(false);
    }

    checkUser();
  }, []);

  if (loading) return <Spinner />;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export default ProtectedRoute;
