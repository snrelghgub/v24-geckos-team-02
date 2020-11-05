import React from "react";
import logo from "../assets/img/logo.svg";
import "../css/Footer.css";

export default function Footer() {
  const styles = {
    height: 70,
    padding: 10,
  };

  return (
    <footer className="footer bg-dark">
      <img src={logo} style={styles} alt="logo" />
      <div className="social">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/ChinguCollabs?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        >
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCS7zmJXbe7FgTC3sHlUf4jw">
          <i className="fab fa-youtube fa-2x"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/chingu-voyages/v24-geckos-team-02">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
      <p>Copyright &copy; 2020 - BooksPlus</p>
    </footer>
  );
}
