import { useEffect, useState } from "react";
import API from "../services/api";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState({
    username: "",
    email: ""
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: ""
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    API.get("/auth/profile")
      .then((res) => setUser(res.data))
      .catch(() => setMessage("Failed to load profile"));
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const updateProfile = () => {
    API.put("/auth/profile", user)
      .then(() => setMessage("Profile updated successfully"))
      .catch(() => setMessage("Update failed"));
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const changePassword = () => {
    API.post("/auth/change-password", passwordData)
      .then(() => {
        setMessage("Password changed successfully");
        setPasswordData({ oldPassword: "", newPassword: "" });
      })
      .catch(() => setMessage("Password change failed"));
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">👤 User Profile</h2>

      {message && (
        <p className={`profile-message ${message.includes("success") ? "success" : "error"}`}>
          {message}
        </p>
      )}

      {/* PROFILE INFO */}
      <div className="profile-section">
        <h3>Personal Information</h3>

        <label className="profile-label">Username</label>
        <input
          className="profile-input"
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />

        <label className="profile-label">Email</label>
        <input
          className="profile-input"
          type="email"
          name="email"
          value={user.email}
          disabled
        />

        <button className="profile-btn" onClick={updateProfile}>
          Update Profile
        </button>
      </div>

      <div className="profile-divider"></div>

      {/* CHANGE PASSWORD */}
      <div className="profile-section">
        <h3>🔐 Change Password</h3>

        <input
          className="profile-input"
          type="password"
          name="oldPassword"
          value={passwordData.oldPassword}
          onChange={handlePasswordChange}
          placeholder="Old Password"
        />

        <input
          className="profile-input"
          type="password"
          name="newPassword"
          value={passwordData.newPassword}
          onChange={handlePasswordChange}
          placeholder="New Password"
        />

        <button className="profile-btn password-btn" onClick={changePassword}>
          Change Password
        </button>
      </div>
    </div>
  );
}

export default Profile;