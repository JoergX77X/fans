import React from "react";
import classes from "./myCard.module.css"

const MyCard = (props) =>{
    return (
    <div className={classes.mycard}>
        {props.children}
    </div>
    )
};

export default MyCard