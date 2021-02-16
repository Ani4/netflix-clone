import React, { useState } from "react";
import net_logo from "../../assets/images/Netflix_Logo_RGB.png";
import styles from "./Login.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Route, Switch } from "react-router-dom";
import SignIn from "../../components/SignIn";
import { useHistory } from "react-router-dom";

function LoginScreen() {
    let history = useHistory();
    const [location, setLocation] = useState(history.location.pathname);

    return (
        <div className={styles.loginScreen}>
            <div className={styles.background}>
                <img className={styles.logo} src={net_logo} alt="netflix_logo" />
                {location === "/" ? (
                    <button
                        className={styles.button}
                        onClick={() => {
                            history.push("/signin");
                            setLocation("/signin");
                        }}
                    >
                        Sign in
                    </button>
                ) : (
                    <button
                        className={styles.button}
                        onClick={() => {
                            history.push("/");
                            setLocation("/");
                        }}
                    >
                        <FaChevronLeft />
                        Back
                    </button>
                )}
            </div>
            <Switch>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/">
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
                </Route>
            </Switch>
        </div>
    );
}

export default LoginScreen;
