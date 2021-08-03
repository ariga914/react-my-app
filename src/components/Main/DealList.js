import React, { useEffect, useState } from "react";
import DealCards from "./DealCard";
import axios from "axios";

const DealList = () => {
    const [datas, setDatas] = useState([]);
    const [message, setMessage] = useState("");

    const getList = () => {
        axios
            .get("/list")
            .then((response) => setDatas(response.data))
            .catch((error) => setMessage(error.message));
    };

    useEffect(getList, [datas]);
    return (
        <ul>
            {message && <p>{message}</p>}
            {datas.map((data) => (
                <DealCards
                    key={data.id}
                    title={data.title}
                    date={data.date}
                    amount={data.amount}
                    type={data.type}
                />
            ))}
        </ul>
    );
};

export default DealList;
