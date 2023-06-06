import React, { useEffect, useRef, useState } from "react";
import "./Background.css";
import logo from "../img/sport_dream_logo.svg";
import whatsapp from "../social/whatsapp.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import instagram from "../social/instagram.svg";
import facebook from "../social/facebook-app-symbol.svg";
import telegram from "../social/telegram.svg";
import Modal from "../components/Modal";

function Background() {
  const [show, setShow] = useState(false);

  /* Submit email */

  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsValidEmail(event.target.checkValidity());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidEmail) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="cp1">
      <div className="cp2">
        <div>
          <a href="/">
            <img className="logo" src={logo} alt="logo" />{" "}
          </a>
        </div>
        <div>
          <h1 className="inlucru">COMING SOON</h1>
        </div>
        <div className="formNews">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <input
                className="inputForm"
                placeholder="Email"
                name="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
                // onChange={(e) => validateEmail(e)}
              />
              <button className="btnNews" type="submit">
                SUBSCRIBE
              </button>
            </form>
          ) : (
            <div className="requestText">
              <h2>Multumim!</h2>
              <p>Imediat ce lucrarile sunt finalizate te vom anunta!</p>
            </div>
          )}
        </div>
        <div>
          <button onClick={() => setShow(true)} className="btn-contact">
            ABOUT
          </button>
          <Modal onClose={() => setShow(false)} show={show} />
        </div>
        <div className="socialLogo">
          <a href="/" target="_blank">
            <img src={whatsapp} alt="whatsapp logo" />
          </a>
          <a href="/" target="_blank">
            <img src={instagram} alt="whatsapp logo" />
          </a>
          <a href="/" target="_blank">
            <img src={facebook} alt="whatsapp logo" />
          </a>
          <a href="/" target="_blank">
            <img src={telegram} alt="whatsapp logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Background;
