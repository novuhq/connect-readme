import Navbar from "@/components/Navbar";
import styles from "@/styles/login.module.css";
import Link from "next/link";
function Login() {
    return (
      <div className={styles.loginContainer}>
        <Navbar />
        <section className={styles.formContainer}>
          <form className={styles.loginForm}>
            <h2 className={`${styles.center} ${styles.heading}`}>
              Welcome back!
            </h2>
            <p className={`${styles.center} ${styles.subtext}`}>
              {" "}
              Please login to your account.
            </p>
            <label className={styles.label}>
              <span className={styles.labelText}> Email</span>
              <input
                type="email"
                placeholder="Enter your Email"
                className={styles.input}
              />
            </label>
            <label className={styles.label}>
              <span className={styles.labelText}>Password</span>
              <input
                type="password"
                placeholder="Enter your Password"
                className={styles.input}
              />
            </label>
            <button type="submit" className={styles.loginBtn}>
              Login
            </button>
            <p className={`${styles.center} ${styles.signupRedirect}`}>
              Don't have an account?{" "}
              <Link href="/signup" className={styles.signup}>
                Sign up
              </Link>
            </p>
          </form>
        </section>
      </div>
    );
}

export default Login;