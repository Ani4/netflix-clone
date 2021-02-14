import React from "react";
import styles from "./Row.module.css";
function MovieCard({ img, title, style }) {
    return (
        <div>
            <img
                className={style}
                src={`https://images.tmdb.org/t/p/original/${img}`}
                alt={title}
            />
            <p className={styles.title}>{title}</p>
        </div>
    );
}

export default MovieCard;
