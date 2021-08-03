import React, { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
const Home = () => {
    const [message, setMessage] = useState("");
    useEffect(() => {
        fetch("/appi")
            .then((res) => res.json())
            .then((data) => setMessage(data.message));
    }, []);

    return (
        <Card className={classes.home}>
            <h1>Welcome to my App!!</h1>
            <p>{message}</p>
        </Card>
    );
};

export default Home;
