import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>

      {/* HERO */}
      <div className="hero">
        <h1>🛒 Welcome to E-Shop</h1>
        <p>Your one-stop solution for all products</p>

        <div className="hero-buttons">
          <button className="btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="btn-outline" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features">
        <h2>Why Choose Us?</h2>

        <div className="card-container">
          <div className="card">
            <h3>⚡ Fast Delivery</h3>
            <p>Get your products delivered quickly and safely.</p>
          </div>

          <div className="card">
            <h3>💳 Secure Payment</h3>
            <p>All transactions are encrypted and secure.</p>
          </div>

          <div className="card">
            <h3>📦 Wide Range</h3>
            <p>Explore a variety of products in one place.</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <p>© 2026 E-Shop. All rights reserved.</p>
      </div>

    </div>
  );
}

export default LandingPage;