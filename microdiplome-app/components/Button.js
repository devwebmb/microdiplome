import React, { useState } from "react";
import styles from "../styles/components/Button.module.css";

const Button = ({ text, color, hoverColor,size, onClick }) => {
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: color,
    fontSize: size,
  });

  const handleMouseEnter = () => {
    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: hoverColor,
    }));
  };

  const handleMouseLeave = () => {
    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: color,
    }));
  };

  return (
    <button
      className={styles.button}
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </button>
  );
};

export default Button;
