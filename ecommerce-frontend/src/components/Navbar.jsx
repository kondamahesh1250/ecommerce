import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="nav-container">
      
      {/* Logo */}
      <h2 className="nav-logo" onClick={() => navigate("/")}>
        🛒 E-Shop
      </h2>

      {/* Links */}
      <div className="nav-links">
        {!token ? (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </>
        ) : (
          <>
            {role === "ROLE_ADMIN" ? (
              <Link to="/admin/dashboard" className="nav-link">
                Dashboard
              </Link>
            ) : (
              <Link to="/user/dashboard" className="nav-link">
                Dashboard
              </Link>
            )}

            <button onClick={logout} className="nav-logout">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;