import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import "./UserDashboard.css"; // ✅ import CSS

function UserDashboard() {
  const [active, setActive] = useState("view");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="user-container">
      
      {/* Sidebar */}
      <div className="user-sidebar">
        <h2>User Panel</h2>
        <hr />

        <p
          className={`user-item ${active === "view" ? "user-active" : ""}`}
          onClick={() => setActive("view")}
        >
          📦 View Products
        </p>

        <p
          className={`user-item ${active === "profile" ? "user-active" : ""}`}
          onClick={() => setActive("profile")}
        >
          👤 Profile
        </p>

        <p className="user-item user-logout" onClick={logout}>
          🚪 Logout
        </p>
      </div>

      {/* Content */}
      <div className="user-content">
        {active === "view" && <Dashboard />}
        {active === "profile" && <Profile />}
      </div>

    </div>
  );
}

export default UserDashboard;