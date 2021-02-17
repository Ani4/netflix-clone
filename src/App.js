import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./components/Profile";
import { auth } from "./utils/secret";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = () =>
            auth().onAuthStateChanged((userChange) => {
                if (userChange) {
                    dispatch(login({ uid: userChange.uid, user_email: userChange.email }));
                } else {
                    dispatch(logout());
                }
            });
        unsubscribe();
        return unsubscribe;
    }, [dispatch]);
    return (
        <div className="app">
            <header className="app-header">
                <Router>
                    {!user ? (
                        <LoginScreen />
                    ) : (
                        <Switch>
                            <Route path="/profile" exact>
                                <ProfileScreen />
                            </Route>
                            <Route path="/" exact>
                                <HomeScreen />
                            </Route>
                            <Redirect to="/" />
                        </Switch>
                    )}
                </Router>
            </header>
        </div>
    );
}

export default App;
