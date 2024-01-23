import React, { useState } from "react";
import Button from "./Button";
import styles from "../styles/components/Signup.module.css";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSignup = () => {
    // Logique d'inscription ici
    console.log("Inscription en cours...");
  };

  return (
    <div className={styles.signupContainer}>
      <h2>Inscription</h2>
      <form>
        <label>
          Nom complet:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <label>
          Pseudo:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Mot de passe:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Confirmer le mot de passe:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
          />
          J'accepte les conditions d'utilisation
        </label>
        <Button
          text="S'inscrire"
          color="#ff5c00"
          hoverColor="#ffa06b"
          size="16"
          onClick={handleSignup}
        />
      </form>
    </div>
  );
};

export default Signup;
