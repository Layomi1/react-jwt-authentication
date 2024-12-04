import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { message } from "antd";
export const useSignup = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const registerUser = async (values) => {
    if (values.password !== values.confirmPassword) {
      return setError("Passwords are not the same");
    }
    try {
      setError(null);
      setLoading(true);
      const res = await fetch("https://localhost:3000/api/auth/signup", {
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

  return { loading, error, registerUser };
};

// export default useSignup;
