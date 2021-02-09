import React from "react";
import Nav from "../Nav";
import Banner from "../Banner";
import styles from "./HomeScreen.module.css";
import Row from "../../features/Row";
import { request } from "../../utils/request";

function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* NavBar */}
            <Nav />
            {/* Banner */}
            <Banner />
            {/* Row */}
            <Row
                title="Netflix Originals"
                fetchURL={request.fetchNetflixOriginals}
                isLarge
            />
            <Row title="Trending Movies" fetchURL={request.fetchTrending} />
            <Row title="Top Rank Movies" fetchURL={request.fetchTopRank} />
            <Row title="Action Movies" fetchURL={request.fetchActionMovies} />
            <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
            <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
            <Row
                title="Ronmance Movies"
                fetchURL={request.fetchRomanceMovies}
            />
            <Row
                title="Documentaries "
                fetchURL={request.fetchDocumentaryMovies}
            />
        </div>
    );
}

export default HomeScreen;
