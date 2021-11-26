import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const Log = ({ signin, signup }) => {
  const [signUpModal, setSignUpModal] = useState(signup);
  const [signInModal, setSignInModal] = useState(signin);

  const handleModals = (e) => {
    if (e.target.id === "login") {
      setSignInModal(true);
      setSignUpModal(false);
    }
    if (e.target.id === "register") {
      setSignInModal(false);
      setSignUpModal(true);
    }
  };

  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li
            onClick={handleModals}
            id="register"
            className={signUpModal ? "active-btn" : null}
          >
            S'inscrire
          </li>

          <li
            onClick={handleModals}
            id="login"
            className={signInModal ? "active-btn" : null}
          >
            Se connecter
          </li>
        </ul>
        {signInModal && <SignInForm />}
        {signUpModal && <SignUpForm />}
      </div>
    </div>
  );
};

export default Log;
