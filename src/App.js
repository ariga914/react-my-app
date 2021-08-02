import React from "react";
import { Route, Switch } from "react-router";
import Layout from "./components/Laayout/Layout";
import IndexPage from "../src/pages/IndexPage";
import MainPage from "./pages/MainPage";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <IndexPage />
                </Route>
                <Route path="/signup">
                    <h1>Signup</h1>
                </Route>
                <Route path="/login">
                    <h1>Login</h1>
                </Route>
                <Route path="/manage">
                    <MainPage />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
