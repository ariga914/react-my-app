import { classes } from "istanbul-lib-coverage";
import React from "react";

const Button = (props) => {
    return (
        <button
            type={props.type || "button"}
            className={`${classes.button} ${classes.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;
