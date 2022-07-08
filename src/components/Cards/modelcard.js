import React from "react";
import classes from './modelcard.module.css';
import { Card, CardImg,  Button} from "reactstrap";
const Modelcard =(props) =>{
    const modelname =props.name
    //const rnddate = new Date(2022,2,29);
return (
  <div className={classes.page}>
   
    <Card className={classes.mycard}>
      <CardImg
        alt="Card image cap"
        src={props.image}
        width="100%"
      />
      <div className={classes.cardbody}>
        <h3 className={classes.cardtitle}>{modelname}</h3>

        <h4 className={classes.cardtitle}>{props.title}</h4>
        <p>{props.content}</p>

        <h5>Jetzt für nur 19,99 € freischalten</h5>
        <Button className={classes.buybutton}>Freischalten!</Button>
      </div>
    </Card>
  </div>
);
};

export default Modelcard;