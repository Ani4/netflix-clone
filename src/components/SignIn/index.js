import React, { useRef } from "react";
import { auth } from "../../utils/secret";
import styles from "./SignIn.module.css";
function SignIn() {
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const register = (e) => {
        console.log(emailRef.current.value, passRef.current.value);
        e.preventDefault();
        auth()
            .createUserWithEmailAndPassword(emailRef.current.value, passRef.current.value)
            .then((authUser) => console.log(authUser))
            .catch((e) => console.log(e));
    };

    const signin = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value, passRef.current.value);
        console.log("SIGN IN >>>");
        auth()
            .signInWithEmailAndPassword(emailRef.current.value, passRef.current.value)
            .then((authUser) => console.log(authUser))
            .catch((e) => console.log(e));
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
            </form>
        </div>
    );
}

export default SignIn;
