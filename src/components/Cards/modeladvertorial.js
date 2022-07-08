import React from "react";
import classes from "./modeladvertorial.module.css";

const Modeladvertorial = (props) =>{
    const modelname=props.name;
    return (
      <div className={classes.pad}>
        <div className={classes.userinfo}>
          <div className={classes.user}>
            <img src={props.image} alt={modelname} />
          </div>
          <div className={classes.userinfoheader}>
            <img src={props.image} alt={modelname} />
          </div>
          <div className={classes.userinfobody}>
            <div className={classes.tag}>
              <span className={classes.tagcolor1}>#HEISSKOCHEN </span>
              <span className={classes.tagcolor2}>#OHNE WASSER </span>
              <span className={classes.tagcolor3}>#UNMÖGLICH</span>
            </div>

            <h4>
              {modelname}
              <small> / &nbsp;{props.age} Jahre</small>
            </h4>

            <p>
              Hier kann ein bisschen Text stehen, falls es mal benötigt wird.
            </p>
            <ul className={classes.liste}>
              <li>
                <a href={modelname}>{props.numberofitems} Posts</a>
              </li>
            </ul>

            <h5>
              <a href={modelname}>Jetzt abonieren</a>
            </h5>
          </div>
        </div>
      </div>
    );
};

export default Modeladvertorial;