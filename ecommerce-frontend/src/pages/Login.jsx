import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Login.css"; // ✅ import CSS

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ FIX (missing before)

  const login = async () => {
    try {
      const res = await API.post("/auth/login", { username, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      if (res.data.role === "ROLE_ADMIN") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  const googleLogin = () => {
    window.location.href =
      "https://ecommerce-e2aa.onrender.com/oauth2/authorization/google";
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>

        {/* NORMAL LOGIN */}
        <input
          className="login-input"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="login-input"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={login}>
          Login
        </button>

        <p style={{ marginTop: "10px" }}>
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            style={{ color: "blue", cursor: "pointer" }}
          >
            Register
          </span>
        </p>
        <div className="divider">OR</div>

        {/* GOOGLE LOGIN */}
        <button className="google-btn" onClick={googleLogin}>
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
