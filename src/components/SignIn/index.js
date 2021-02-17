import React, { useRef } from "react";
import { auth } from "../../utils/secret";
import styles from "./SignIn.module.css";
function SignIn() {
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const register = (e) => {
        e.preventDefault();
        auth().createUserWithEmailAndPassword(emailRef.current.value, passRef.current.value);
    };

    const signin = (e) => {
        e.preventDefault();
        auth().signInWithEmailAndPassword(emailRef.current.value, passRef.current.value);
    };
    const demoLogin = (e) => {
        e.preventDefault();
        auth().signInWithEmailAndPassword("demo@demo.com", "demodemo");
    };
    return (
        <div className={styles.container}>
            <form onSubmit={signin}>
                <h1>Sign In</h1>
                <input ref={emailRef} type="text" name="username" id="username" placeholder="Username" />
                <input ref={passRef} type="password" name="password" id="password" placeholder="password" />
                <button className={styles.button}>Sign In</button>
                <p>
                    New to Netflix? <span onClick={register}>Sign up now.</span>
                </p>
                <p>
                    Login for <span onClick={demoLogin}> Demo</span> Purpose
                </p>
            </form>
        </div>
    );
}

export default SignIn;
