import React from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const getJoke = () => {
    Axios.get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        console.log(response);
        
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1>aslema</h1>
      <div>
        <button onClick={getJoke}>click Me</button>
      </div>
    </>
  );
}

export default App;
