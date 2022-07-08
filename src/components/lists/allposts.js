import Modelcard from "../Cards/modelcard";
import React from "react";


const Allpostes=(props)=>{

    return (
      <div>
       {props.girl.posts.map((girl) => (
        <Modelcard name={props.girl.pseudo} 
        title={girl.title}
        key={girl.title}
        image={girl.image}
        content={girl.content}
        />
       ))}
      </div>
    );
};

export default Allpostes;