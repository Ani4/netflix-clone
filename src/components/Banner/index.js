import axios from "../../utils/axios";
import { request } from "../../utils/request";
import React, { useEffect } from "react";
import styles from "./banner.module.css";

function Banner() {
    const [movies, setMovies] = React.useState(null);
    const dotdotdot = (line, num = 150) => {
        return line?.length > num ? line.substr(0, num - 1) + "..." : line;
    };

    //     fetch movie data for banner
    async function fetchData() {
        const data = await axios.get(request.fetchNetflixOriginals);
        setMovies(data.data.results[Math.floor(Math.random() * data.data.results.length - 1)]);
        return data;
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div
            className={styles.banner}
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://images.tmdb.org/t/p/original/${movies?.backdrop_path})`,
                backgroundPosition: "center top",
            }}
        >
            <div className={styles.content}>
                <h1 className={styles.title}>{movies?.original_name}</h1>
                <div className={styles.buttonGroup}>
                    <button className={styles.button}>Play</button>
                    <button className={styles.button}>My List</button>
                </div>
                <h1 className={styles.description}>{dotdotdot(movies?.overview)}</h1>
            </div>
            <div className={styles.fade_bottom}></div>
        </div>
    );
}

export default Banner;
