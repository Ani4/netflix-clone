import React from "react";
import { useHistory } from "react-router-dom";
import Nav from "../Nav";
import { auth } from "../../utils/secret";
import styles from "./Profile.module.css";
const Profile = () => {
    const plans = [
        { selected: false, button: "Subscribe" },
        { selected: false, button: "Subscribe" },
        { selected: true, button: "Current Package" },
    ];
    const handleForm = (e) => {
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
                    <form onSubmit={handleForm}>
                        <input type="email" name="email" id="email" value="demo@demo.com" disabled />
                        <div className={styles.plan}>
                            <h3>Plan (Current Plan: Premium)</h3>
                            <div height="3px"></div>
                            <hr color="#3e3e3e" />
                            <div style={{ marginTop: "10px" }}>
                                <p>Renewal Date: 04/04/2022</p>
                                {plans.map((i) => (
                                    <div className={styles.choose}>
                                        <p>Netflix Premium</p>
                                        <button className={styles.chooseBtn} disabled={i.selected}>
                                            {i.button}
                                        </button>
                                    </div>
                                ))}
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

export default Profile;
