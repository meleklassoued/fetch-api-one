import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [data, setdata] = useState("");

  const getJoke = () => {
    Axios.get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        console.log(response);
        setdata(`ekteb esmek ya stak o bara nikomek ${response.data.title}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1>aslema</h1>
      <div>
        <button onClick={getJoke}>click Me</button>
        <h4> {data}</h4>
      </div>
    </>
  );
}

export default App;
