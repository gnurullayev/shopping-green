import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} container`}>
        <div className={styles.footer__inner}>
          <a href="/" className={styles.footer__logo}>
            <img src="" alt="" className={styles.logo} />
          </a>

          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <a href="/" className={styles.footer__link}>
                Block
              </a>
            </li>

            <li className={styles.footer__item}>
              <a href="/" className={styles.footer__link}>
                About
              </a>
            </li>

            <li className={styles.footer__item}>
              <a href="/" className={styles.footer__link}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
