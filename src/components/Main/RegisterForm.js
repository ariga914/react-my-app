import { classes } from "istanbul-lib-coverage";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Button from "../UI/Button/Button";

const addForm = () => {
    return (
        <div className={classes.todo}>
            <h2>add new post</h2>
            <form>
                <p>
                    <label>
                        Title
                        <input />
                    </label>
                </p>
                <p>
                    <label>
                        Date
                        <input type="date" />
                    </label>
                </p>
                <p>
                    <label>
                        Amount
                        <input type="number" />
                        Yen
                    </label>
                </p>
                <p>
                    Income or Revenue ?
                    <select>
                        <option>Income</option>
                        <option>Revenue</option>
                    </select>
                </p>
            </form>
            <Button>Register</Button>
        </div>
    );
};

export default addForm;
