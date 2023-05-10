import Image from "next/image";
import { useState } from "react";
import styles from "./navbar.module.css";
function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleNav = () => {
    setIsVisible(!isVisible);
  };
 
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src="/logo.png" width={30} height={30} alt="notification" />
        <h1 className={styles.white}>
          Stock<span className={styles.green}>alert</span>
        </h1>
      </div>

      <nav className={styles.nav} data-visible={isVisible}>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>Market</li>
          <li className={styles.navLink}>
            {" "}
            <button className={`${styles.btn} ${styles.login}`}>Login</button>
          </li>
          <li className={styles.navLink}>
            {" "}
            <button className={`${styles.btn} ${styles.signIn}`}>
              Sign in
            </button>
          </li>
        </ul>
      </nav>
      <button
        onClick={toggleNav}
        className={styles.mobileNavigationBtn}
        aria-label="menu"
        aria-expanded={isVisible}
      ></button>
    </header>
  );
}

export default Navbar;
