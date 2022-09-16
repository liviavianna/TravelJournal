import React from "react";
import data from "./data";
import Card from "./components/Card"
import Navbar from "./components/Navbar";

const cards = data.map( item => {
  return (
    <Card 
    {...item}
    />
  )
})

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="cards--list">
        {cards}
      </section>
    </div>
  );
}

export default App;
