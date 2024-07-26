import React, { useState } from "react";
import axios from "axios";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import moduleName from '@/public/loginback.png'

const Index = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when login starts
    try {
      const loginResponse = await axios.post(
        "https://www.referback.trollsufficient.com/admin/login",
        {
          email,
          password,
        }
      );
      const { token, role } = loginResponse.data;
      localStorage.setItem("accessToken", token);
      localStorage.setItem("role", role);
      // console.log("login", role);

      const userResponse = await axios.post(
        "https://www.referback.trollsufficient.com/admin/user",
        { email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const userName = userResponse.data.name;
      localStorage.setItem("userName", userName);

      // const coinsResponse = await axios.post(
      //   "https://www.referback.trollsufficient.com/admin/coins",
      //   { email }
      // );

      // console.log("coinsResponse:", coinsResponse);

      // const userCoins = coinsResponse.data.Coins;
      // localStorage.setItem("userCoins", userCoins);

      router.push({
        pathname: "/home",
        // query: { name: userName },
      });
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid credentials");
    } finally {
      setLoading(false); // Reset loading to false when login completes or fails
    }
  };

  return (
    <div className={styles.loginContainer}>
      {loading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.spinner}></div>
        </div>
      )}
      <div className={styles.loginForm}>
        <h2 className={styles.loginTitle}>LOGIN</h2>
        <form onSubmit={handleLogin}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="current-username"
            />
            <label
              style={{
                color: "#00ff00",
                fontSize: "1.2rem",
                marginBottom: "20px",
              }}
            >
              Email
            </label>
            <div className={styles.inputUnderline}></div>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
            <label
              style={{
                color: "#00ff00",
                fontSize: "1.2rem",
                marginBottom: "20px",
              }}
            >
              Password
            </label>
            <div className={styles.inputUnderline}></div>
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button
            type="submit"
            className={styles.loginButton}
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
