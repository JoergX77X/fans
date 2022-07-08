import React from "react";
import {useParams} from "react-router-dom";
import Modeladvertorial from "../components/Cards/modeladvertorial";
import Allpostes from "../components/lists/allposts";

const Detailsite=(props)=>{

const params = useParams();
const mygirl =params.girlId
const db = Array.from(props.alldata);
const girl = db.find(el => el.pseudo===mygirl)


    return (
      <div>
        {!girl && <h1>No data</h1>}
        {girl && (
            <div>
          <Modeladvertorial
            name={girl.pseudo}
            image={girl.profilepic}
            age={girl.age}
            numberofitems={girl.posts.length}
            key={girl.pseudo}
          />
          <Allpostes girl={girl} />
          </div>
        )}
      </div>
    );
};

export default Detailsite;