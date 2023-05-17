import Link from "next/link";
import styles from "../styles/sign.module.css";
import Navbar from "../components/Navbar";
function SignUp() {
  return (
    <div className={styles.signUpContainer}>
      <Navbar />
      <section className={styles.formContainer}>
        <form className={styles.signUpForm}>
          <h2 className={`${styles.center} ${styles.heading}`}>
            Sign up to create an account
          </h2>
          <p className={`${styles.center} ${styles.subtext}`}>
            Kindly sign up to have access to all features
          </p>
          <label className={styles.label}>
            <span className={styles.labelText}>Username</span>
            <input
              type="text"
              placeholder="Enter your username"
              className={styles.input}
            />
          </label>
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
          <button type="submit" className={styles.signUpBtn}>
            Sign up
          </button>
          <p className={`${styles.center} ${styles.signupRedirect}`}>
            Already have an account?{" "}
            <Link href="/login" className={styles.signup}>
              Log in
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
}

export default SignUp;
