import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <div className={styles.header__inner}>
          <a href="/" className={styles.header_logo}>
            <img src="" alt="Logo" className="logo" />
          </a>
          <nav className={styles.header__nav}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>
                <a href="/" className={styles.nav__link}>
                  Block
                </a>
              </li>

              <li className={styles.nav__item}>
                <a href="/" className={styles.nav__link}>
                  About
                </a>
              </li>

              <li className={styles.nav__item}>
                <a href="/" className={styles.nav__link}>
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
