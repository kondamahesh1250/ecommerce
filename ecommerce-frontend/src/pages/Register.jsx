import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Register.css"; // ✅ import CSS

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    API.post("/auth/register", form)
      .then(() => {
        setMessage("Registered successfully");
        setTimeout(() => navigate("/login"), 1000);
      })
      .catch(() => setMessage("Registration failed"));
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Register</h2>

        {message && (
          <p className={`register-message ${message.includes("success") ? "success" : "error"}`}>
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            className="register-input"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />

          <input
            className="register-input"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            className="register-input"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button className="register-btn" type="submit">
            Register
          </button>
        </form>

        <p className="login-link">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;