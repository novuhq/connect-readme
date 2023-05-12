import Image from "next/image";
import { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useRouter } from 'next/router';

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter()
  console.log(router.pathname)
  const toggleNav = () => {
    setIsVisible(!isVisible);
  };
 
  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <Image src="/logo.png" width={30} height={30} alt="notification" />
          <h1 className={styles.white}>
            Stock<span className={styles.green}>alert</span>
          </h1>
        </div>
      </Link>

      <nav className={styles.nav} data-visible={isVisible}>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>
            <Link
              href="market"
              className={`${styles.link} ${
                router.pathname === "/market" ? styles.activeNav : null
              }`}
            >
              Market
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link
              href="login"
              className={`${styles.login} ${
                router.pathname === "/login" ? styles.activeNav : null
              }`}
            >
              Login
            </Link>
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
