import { Link } from "react-router-dom/dist";
export default function Login() {
  return (
    <div class="login-page">
      <div class="form">
        <div class="login">
          <div class="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form class="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <Link to="/donation">
            <button>login</button>
          </Link>
          <p class="message">
            Not registered? <Link to="/signin">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
