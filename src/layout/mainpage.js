import React from "react";
import {Col, Row} from "reactstrap";

import Allgirls from "../components/lists/allgirls";
//import MiddleElement from "./middleelement";
import Filters from "./filters";


const Mainpage=(props)=>{
let myDummyBase = [
  {
    pseudo: "Surfergirl",
    age: 21,
    profilepic:
      "https://image.shutterstock.com/z/stock-photo-girl-squats-on-wall-with-a-surfboard-558028459.jpg",
    posts: [
      {
        title: "testnachricht",
        content: "Hier toller Text",
        image:
          "https://image.shutterstock.com/image-photo/pretty-young-slim-woman-on-600w-384107347.jpg",
      },
      {
        title: "testnachricht",
        content: "Hier toller Text",
        image:
          "https://image.shutterstock.com/image-photo/pretty-young-slim-woman-on-600w-384107347.jpg",
      },
      {
        title: "testnachricht",
        content: "Hier toller Text",
        image:
          "https://image.shutterstock.com/image-photo/pretty-young-slim-woman-on-600w-384107347.jpg",
      },
    ],
  },
  {
    pseudo: "Bäckergirl",
    age: 21,
    profilepic:
      "https://image.shutterstock.com/z/stock-photo-girl-squats-on-wall-with-a-surfboard-558028459.jpg",
    posts: [
      {
        title: "testnachricht",
        content: "Hier toller Text",
        image:
          "https://image.shutterstock.com/image-photo/pretty-young-slim-woman-on-600w-384107347.jpg",
      },
    ],
  },
  {
    pseudo: "Hassenichgesehen",
    age: 21,
    profilepic:
      "https://image.shutterstock.com/image-photo/pretty-young-slim-woman-on-600w-384107347.jpg",
    posts: [
      {
        title: "testnachricht",
        content: "Hier toller Text",
        image:
          "https://image.shutterstock.com/image-photo/pretty-young-slim-woman-on-600w-384107347.jpg",
      },
    ],
  },
];


    return (
      <div>
        <Row>
          <Col className="bg-light border" xs="12" md="3">
            <Filters />
          </Col>
          <Col className="bg-light border" xs="12" md="6">
          {props.children}
          </Col>
          <Col className="bg-light border" xs="12" md="3">
            <Allgirls items={myDummyBase} />
          </Col>
        </Row>
      </div>
    );
}
export default Mainpage;