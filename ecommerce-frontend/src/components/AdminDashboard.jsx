import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AddProduct from "../pages/AddProduct";
import Profile from "../pages/Profile";
import "./AdminDashboard.css"; // ✅ import CSS

function AdminDashboard() {
  const [active, setActive] = useState("view");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="admin-container">
      
      {/* Sidebar */}
      <div className="admin-sidebar">
        <h2>Admin Panel</h2>
        <hr />

        <p
          className={`admin-item ${active === "view" ? "active" : ""}`}
          onClick={() => setActive("view")}
        >
          📦 View Products
        </p>

        <p
          className={`admin-item ${active === "add" ? "active" : ""}`}
          onClick={() => setActive("add")}
        >
          ➕ Add Product
        </p>

        <p
          className={`admin-item ${active === "profile" ? "active" : ""}`}
          onClick={() => setActive("profile")}
        >
          👤 Profile
        </p>

        <p className="admin-item logout" onClick={logout}>
          🚪 Logout
        </p>
      </div>

      {/* Content */}
      <div className="admin-content">
        {active === "view" && <Dashboard />}
        {active === "add" && <AddProduct />}
        {active === "profile" && <Profile />}
      </div>

    </div>
  );
}

export default AdminDashboard;