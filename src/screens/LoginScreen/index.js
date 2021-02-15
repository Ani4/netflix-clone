import React from "react";
import net_logo from "../../assets/images/Netflix_Logo_RGB.png";
import styles from "./Login.module.css";
import { FaChevronRight } from "react-icons/fa";
function LoginScreen() {
    return (
        <div className={styles.loginScreen}>
            <div className={styles.background}>
                <img className={styles.logo} src={net_logo} alt="netflix_logo" />
                <button className={styles.button}>Sign in</button>
            </div>
            <div className={styles.body}>
                <h1>Unlimited movies, TV </h1>
                <h1>shows and more.</h1>
                <h4>Watch anywhere. Cancel anytime.</h4>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className={styles.formField}>
                    <input type="email" name="email" id="email" placeholder="Email" className={styles.input} />
                    <button className={styles.getStarted}>
                        Get Started
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;
