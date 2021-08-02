import React from "react";
import { Route, Switch } from "react-router";
import Layout from "./components/Laayout/Layout";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <h1>Welcome</h1>
                </Route>
                <Route path="/login">
                    <h1>Login</h1>
                </Route>
                <Route path="/manage">
                    <h1>Manage</h1>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
