import React, { useState, useLayoutEffect } from "react";
import styles from "./Nav.module.css";
import net_logo from "../../assets/images/Netflix_Logo_RGB.png";
import { Link } from "react-router-dom";

function Nav() {
    const [show, setShow] = useState(false);

    const transitionNavBar = () => {
        setShow(window.scrollY > 100 ? true : false);
    };

    useLayoutEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => {
            window.removeEventListener("scroll", transitionNavBar);
        };
    }, []);

    // what actually renders
    return (
        <div className={`${styles.nav} ${show && styles.nav__black}`}>
            <div className={styles.content}>
                {/* netflic logo */}
                <img src={net_logo} alt="netflix_logo" className={styles.logo} />
                {/* avatar logo */}
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="avatar_logo"
                    className={styles.avatar}
                />
            </div>
        </div>
    );
}

export default Nav;
