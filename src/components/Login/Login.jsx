import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import Millenium from "../asssets/images/millennium-falcon.svg";

function Login() {
  const [username, setUsername] = useState(null);
  const [error, setError] = useState("");

  const { onUserLogin } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !username.replace(/\s/g, "").length) {
      setError("Choose your username");
    } else {
      setError(null);
      onUserLogin(username);
    }
  };
  return (
    <div className="login">
      <div className="login-wrapper">
        <span>
          <img src={Millenium} alt="DSTM Logo" width="150px" />
        </span>
        <span className="logo">Don't shoot messenger</span>
        <span className="title">Login</span>
        <form onSubmit={handleLogin}>
          <input
            placeholder="Choose a username"
            type="text"
            maxLength="16"
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="error-message">{error}</div>
          <button type="submit" className="login-button">
            Enter chat
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
