import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email </label>
        <input
          type="email"
          className="loginInput"
          placeholder="Enter your email..."
        />
        <label>Password </label>
        <input type="password" className="loginInput" placeholder="Password" />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
}
