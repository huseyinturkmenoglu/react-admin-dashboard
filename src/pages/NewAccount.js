import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context/authContext";
import logo from "../images/logo.svg";

const NewAccount = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate();

  const { dispatchAuth } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
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
        <p>You can create easily account for demo platform.</p>
        <p>Just create a random mail and password, please take a note 😊</p>
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
        <button type="submit" className="login__form__btn">
          Create New Account
        </button>
        {error && (
          <span className="login__form__error">Wrong email or password!</span>
        )}
      </form>
    </div>
  );
};

export default NewAccount;
