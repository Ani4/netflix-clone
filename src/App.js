import React from "react";

import "./App.css";
import HomeScreen from "./components/HomeScreen";

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <HomeScreen />
            </header>
        </div>
    );
}

export default App;
