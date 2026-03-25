import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function OAuthSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("OAuthSuccess loaded");

    const params = new URLSearchParams(window.location.search);

    const token = params.get("token");
    const role = params.get("role");

    console.log("Token:", token);
    console.log("Role:", role);

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      if (role === "ROLE_ADMIN") {
        window.location.href = "/admin/dashboard";
      } else {
        window.location.href = "/user/dashboard";
      }
    } else {
      navigate("/");
    }
  }, []);

  return <h2>Logging in...</h2>;
}

export default OAuthSuccess;
