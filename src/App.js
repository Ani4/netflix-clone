import React from "react";

import { Counter } from "./features/counter/Counter";
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
