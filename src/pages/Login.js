import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context/authContext";
import logo from "../images/logo.svg";


const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate();

  const { dispatchAuth } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user ? true : false;
        dispatchAuth({ type: "LOGIN", payload: user });
        navitage("/");
        console.log(user);
      })
      .catch((error) => {
        setError(true);
      });
  };
  return (
    <div className="login">
      <form className="login__form" onSubmit={handleLogin}>
        <div className="login__logo">
          <img src={logo} alt="logo" />
          <h1>React Admin Dashboard Demo</h1>
        </div>
        <input
          type="email"
          placeholder="email"
          className="login__form__input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="login__form__input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login__form__btn">Login</button>
        {error && <span className="login__form__error">Wrong email or password!</span>}
      </form>
    </div>
  );
};

export default Login;
