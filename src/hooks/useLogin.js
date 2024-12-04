import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export const useLogin = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const LoginUser = async (values) => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch("https://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.status === 200) {
        message.success("User Registered");
        login(data.token, data.user);
      } else if (res.status === 400) {
        setError(data.message);
      } else {
        message.error("Registration failed");
      }
    } catch (err) {
      message.error("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, LoginUser };
};

export default useLogin;
