import axios from "axios";
import React, { useRef, useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./RegisterForm.module.css";

const RegisterForm = () => {
    const [titleName, setTitleName] = useState("");
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState("");

    const [message, setMessage] = useState("");

    const titleInputElm = useRef();

    const titleNameHandler = (e) => {
        setTitleName(e.target.value);
    };

    const dateHandler = (e) => {
        setDate(e.target.value);
    };

    const amountHandler = (e) => {
        setAmount(e.target.value);
    };

    const typeHandler = (e) => {
        setType(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post("/add", {
                title: titleName,
                date: date,
                amount: amount,
                type: type,
            })
            .then((response) => console.log(response))
            .catch((error) => setMessage(error.message));
        setTitleName("");
        setDate("");
        setAmount(0);
        setType("");
        titleInputElm.current.focus();
    };

    return (
        <Card>
            {message && <p>{message}</p>}
            <div className={classes.register_form}>
                <h2>add new post</h2>
                <form onSubmit={submitHandler}>
                    <p>
                        <label>
                            Title
                            <input
                                value={titleName}
                                onChange={titleNameHandler}
                                type="text"
                                placeholder="Title Name"
                                ref={titleInputElm}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Date
                            <input
                                type="date"
                                value={date}
                                onChange={dateHandler}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Amount
                            <input
                                type="number"
                                value={amount}
                                onChange={amountHandler}
                            />
                            Yen
                        </label>
                    </p>
                    <p>
                        Income or Revenue ?
                        <select value={type} onChange={typeHandler}>
                            <option value="">select</option>
                            <option value="income">Income</option>
                            <option value="revenue">Revenue</option>
                        </select>
                    </p>
                    <button type="submit">Register</button>
                </form>
            </div>
        </Card>
    );
};

export default RegisterForm;
