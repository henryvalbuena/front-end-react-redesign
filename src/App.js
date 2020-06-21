import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./containers/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateLatte from "./components/CreateLatte";
import Lattes from "./components/Lattes";
import Latte from "./components/Latte";
import User from "./components/User";
import LatteModal from "./components/LatteModal";

import styles from "./App.module.css";

function App() {
  let tmpLattes = [
    {
      name: "Classic",
      ingredients: [
        {
          id: "01",
          color: "#FF2111",
          parts: 1,
        },
      ],
    },
    {
      name: "Agile",
      ingredients: [
        {
          id: "01",
          color: "#FF2111",
          parts: 2,
        },
        {
          id: "02",
          color: "#0F21F1",
          parts: 3,
        },
        {
          id: "03",
          color: "#FFF111",
          parts: 1,
        },
      ],
    },
    {
      name: "Moccha",
      ingredients: [
        {
          id: "01",
          color: "red",
          parts: 2,
        },
        {
          id: "02",
          color: "blue",
          parts: 1,
        },
        {
          id: "03",
          color: "orange",
          parts: 1,
        },
        {
          id: "04",
          color: "purple",
          parts: 1,
        },
        {
          id: "05",
          color: "yellow",
          parts: 1,
        },
      ],
    },
    {
      name: "Frapp",
      ingredients: [
        {
          id: "01",
          color: "brown",
          parts: 2,
        },
        {
          id: "02",
          color: "blue",
          parts: 1,
        },
        {
          id: "03",
          color: "black",
          parts: 1,
        },
        {
          id: "04",
          color: "purple",
          parts: 3,
        },
        {
          id: "05",
          color: "yellow",
          parts: 1,
        },
      ],
    },
    {
      name: "Unicorn Special",
      ingredients: [
        {
          id: "01",
          color: "purple",
          parts: 1,
        },
        {
          id: "02",
          color: "pink",
          parts: 1,
        },
        {
          id: "03",
          color: "white",
          parts: 2,
        },
        {
          id: "04",
          color: "red",
          parts: 1,
        },
        {
          id: "05",
          color: "orange",
          parts: 2,
        },
        {
          id: "06",
          color: "lightblue",
          parts: 2,
        },
      ],
    },
  ];
  let makeLattes = () => {
    let list = [];
    let counter = 0;
    for (let latte of tmpLattes)
      list.push(<Latte key={counter++} {...latte} />);
    return list;
  };

  let latteList = makeLattes();

  let [isModalOpen, setModal] = useState(true);

  let openModal = () => {
    setModal(!isModalOpen);
    console.log("open", isModalOpen);
  };

  let closeModal = () => {
    setModal(false);
    console.log("closed", isModalOpen);
  };

  let handleForm = (event) => {
    let { ingredient, parts, color, latteName } = event.target;
    console.log(...ingredient);
    console.log(...parts);
    console.log(...color);
    console.log(latteName.value);
    // console.log(event.target)
    console.log("submitted")
    event.preventDefault();
  };

  return (
    <Router>
      <div className={styles.body}>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/drinks">
              <CreateLatte openModal={() => openModal} />
              <Lattes latteList={latteList} />
              <LatteModal
                display={isModalOpen}
                closeModal={closeModal}
                handleForm={handleForm}
              />
            </Route>
            <Route exact path="/user">
              <User />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
