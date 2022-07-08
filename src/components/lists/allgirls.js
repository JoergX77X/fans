import React from "react";
import Modeladvertorial from "../Cards/modeladvertorial";

const Allgirls = (props) => {
    console.log(props.items[0].posts.length)
  return (
    <div>
      {props.items.map((girl) => (
       
        <Modeladvertorial 
            name={girl.pseudo} 
            image={girl.profilepic}
            age={girl.age}
            numberofitems={girl.posts.length}
            key={girl.pseudo}
            />
      ))}
     
    </div>
  );
};

export default Allgirls;
