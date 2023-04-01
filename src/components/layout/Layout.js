import React from "react";
import styles from "./layout.module.scss";
import { Footer, Header } from "./components";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
