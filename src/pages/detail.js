import React from "react";
import {useParams} from "react-router-dom";
import Modeladvertorial from "../components/Cards/modeladvertorial";

const Detailsite=(props)=>{

const params = useParams();
const mygirl =params.girlId
const db = Array.from(props.alldata);
const girl = db.find(el => el.pseudo===mygirl)


    return (
      <div>
        {!girl && <h1>No data</h1>}
        {girl && (
          <Modeladvertorial
            name={girl.pseudo}
            image={girl.profilepic}
            age={girl.age}
            numberofitems={girl.posts.length}
            key={girl.pseudo}
          />
        )}
      </div>
    );
};

export default Detailsite;