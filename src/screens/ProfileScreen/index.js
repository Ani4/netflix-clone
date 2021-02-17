import React from "react";
import { useHistory } from "react-router-dom";
import Nav from "../../components/Nav";
import { auth } from "../../utils/secret";
import styles from "./Profile.module.css";
const ProfileScreen = () => {
    const handleform = (e) => {
        e.preventDefault();
    };
    const history = useHistory();
    return (
        <div className={styles.body}>
            <Nav />
            <div className={styles.container}>
                <h1>Edit Profile</h1>
                <hr color="#3e3e3e" />
                <div className={styles.innerBody}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="logo"
                        width="70px"
                        height="70px"
                    />
                    <form on onSubmit={handleform}>
                        <input type="email" name="email" id="email" value="demo@demo.com" />
                        <div className={styles.plan}>
                            <h3>Plan (Current Plan: Premium)</h3>
                            <div height="3px"></div>
                            <hr color="#3e3e3e" />
                            <div style={{ "margin-top": "10px" }}>
                                <p>Renewal Date: 04/04/2022</p>
                                <div>
                                    <p>Netflix Premium</p>
                                </div>
                            </div>
                        </div>
                        <button
                            className={styles.button}
                            onClick={() => {
                                auth()
                                    .signOut()
                                    .then(() => history.push("/"));
                            }}
                        >
                            Sign Out
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileScreen;
