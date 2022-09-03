import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">

        <div className="loginLeft">

          <h3 className="loginLogo">Facebook</h3>

          <span className="loginDesc">
          Click on your picture or add an account.
          </span>

          <div className="loginUser">
            <img className="loginUserImg" src="assets/person/mert.jpg" alt="auth user" />
            <div className="loginUserName">Mert</div>
          </div>

        </div>

        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Login</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>

      </div>
      
    </div>
  );
}
