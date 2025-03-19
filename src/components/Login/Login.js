import React from "react";
import { useNavigate } from 'react-router-dom'; // 用於頁面跳轉
import './Login.css';

function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const history = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Email and password are required");
            return;
        } 

        history.push("/home");
    }

return (
    <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>} {/* 顯示錯誤訊息 */}

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
);
}

export default Login;