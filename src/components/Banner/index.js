import React from "react";
import styles from "./banner.module.css";

function index() {
    const dotdotdot = (line, num = 150) => {
        return line?.length > num ? line.substr(0, num - 1) + "..." : line;
    };
    return (
        <div
            className={styles.banner}
            style={{
                backgroundSize: "cover",
                backgroundImage: "",
                backgroundColor: "green",
                backgroundPosition: "center center",
            }}
        >
            <div className={styles.content}>
                <h1 className={styles.title}>Movie Name</h1>
                <div className={styles.buttonGroup}>
                    <button className={styles.button}>Play</button>
                    <button className={styles.button}>My List</button>
                </div>
                <h1 className={styles.description}>
                    {dotdotdot(
                        234888888888888888888888888888888888888888888888888832
                    )}
                </h1>
            </div>
            <div className={styles.fade_bottom}></div>
        </div>
    );
}

export default index;
