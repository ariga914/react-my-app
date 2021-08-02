import React, { Fragment } from "react";
import RegisterForm from "../components/Main/RegisterForm";
import ManagementCards from "../components/Main/ManagementCards";

const MainPage = () => {
    return (
        <Fragment>
            <RegisterForm />
            <ManagementCards />
        </Fragment>
    );
};

export default MainPage;
