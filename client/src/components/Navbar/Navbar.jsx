import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../assets/turnersLogo.png";
import HamburgerMenu from "../../assets/HamburgerMenu.svg";

const Navbar = () => {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src={Logo} alt="Turners Logo" />
        <ul className={styles.navGroup}>
          <li className={styles.hamburgerMenu}>
            <a href="#HamburgerMenu">
              <img src={HamburgerMenu} className={styles.hamburgerIcon} />
            </a>
          </li>
        </ul>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        {/* Left menu group */}
        <ul className={styles.navGroup}>
          <li className={styles.hide}>
            <a href="#find-car">Find a Car</a>
          </li>
          <li className={styles.hide}>
            <a href="#how-to-buy">How to Buy</a>
          </li>
          <li className={styles.hide}>
            <a href="#sell-car">Sell your Car</a>
          </li>
          <li className={styles.hide}>
            <a href="#finance-insurance">Finance & Insurance</a>
          </li>
          <li className={styles.hide}>
            <a href="#mobile-service">Mobile Service</a>
          </li>
        </ul>

        {/* Right menu group */}
        <ul className={styles.navGroup}>
          <li className={styles.hide}>
            <a href="#actions">Actions</a>
          </li>
          <li className={styles.hide}>
            <a href="#more-info">More Info</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
