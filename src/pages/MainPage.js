import React, { Fragment } from "react";
import RegisterForm from "../components/Main/RegisterForm";
import DealList from "../components/Main/DealList";
const MainPage = () => {
    return (
        <Fragment>
            <RegisterForm />
            <DealList />
        </Fragment>
    );
};

export default MainPage;
