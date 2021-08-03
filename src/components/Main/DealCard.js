import React from "react";
import Card from "../UI/Card/Card";

const DealCards = (props) => {
    return (
        <li>
            <Card>
                <h3>Title: {props.title}</h3>
                <p>Date: {props.date}</p>
                <p>Amount: {props.amount} JPY</p>
                <p>Type: {props.type}</p>
            </Card>
        </li>
    );
};

export default DealCards;
