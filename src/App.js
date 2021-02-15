import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/LoginScreen";

function App() {
    const user = null;
    return (
        <div className="app">
            <header className="app-header">
                <Router>
                    {!user ? (
                        <Login />
                    ) : (
                        <Switch>
                            <Route path="/about"></Route>
                            <Route path="/user"></Route>
                            <Route path="/">
                                <HomeScreen />
                            </Route>
                        </Switch>
                    )}
                </Router>
            </header>
        </div>
    );
}

export default App;
