import React, { useState, useEffect } from "react";
import styles from "./Row.module.css";
import axios from "../../utils/axios";
import MovieCard from "./MovieCard";
function Row({ title, isLarge, fetchURL }) {
    const [movies, setMovies] = useState(null);

    async function getMovies() {
        const result = await axios.get(fetchURL);
        setMovies(result.data.results);
        return result;
    }
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div className={styles.row}>
            <h2>{title}</h2>
            <div className={styles.row__posters}>
                {movies?.map((i) => (
                    <MovieCard
                        img={isLarge ? i.poster_path : i.backdrop_path}
                        style={
                            isLarge
                                ? styles.row__posterLarge +
                                  " " +
                                  styles.row__poster
                                : styles.row__poster
                        }
                        title={i?.original_title || i?.original_name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;
