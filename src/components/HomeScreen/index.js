import React from "react";
import Nav from "../Nav";
import Banner from "../Banner";
import styles from "./HomeScreen.module.css";

function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* NavBar */}
            <Nav />
            {/* Banner */}
            <Banner />
            {/* Row */}
        </div>
    );
}

export default HomeScreen;
