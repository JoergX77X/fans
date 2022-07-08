import './App.css';
import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import Layout from './layout/layout';
import Models from './pages/models';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Privacy from './pages/privacy';
import AGB from './pages/agb';
import Mainpage from "./layout/mainpage";
import Detailsite from './pages/detail';
function App() {

let myDummyBase = [
  {
    pseudo: "Surfergirl",
    age: 21,
    profilepic:
      "https://image.shutterstock.com/z/stock-photo-girl-squats-on-wall-with-a-surfboard-558028459.jpg",
    posts: [
      {
        title: "testnachricht 1",
        content: "Hier toller Text",
        image:
          "https://image.shutterstock.com/image-photo/pretty-young-slim-woman-on-600w-384107347.jpg",
      },
      {
        title: "testnachricht 2",
        content: "HWahnsinnstext",
        image:
          "https://image.shutterstock.com/image-photo/pretty-young-slim-woman-on-600w-384107347.jpg",
      },
      {
        title: "testnachricht 3",
        content: "Irre geiler text",
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
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route
          exact
            path=""
            element={
              <Mainpage>
                <Models />
              </Mainpage>
            }
          />
          <Route
            path="models"
            element={
              <Mainpage>
                <Models />
              </Mainpage>
            }
          />
          <Route path="privacy" element={<Privacy />} />
          <Route path="agb" element={<AGB />} />
          <Route
            path=":girlId"
            element={
              <Mainpage>
                <Detailsite alldata={myDummyBase}/>
              </Mainpage>
            }
          />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
