import React from "react";
import { Navbar, Uppersection } from "./Upper-section";
import Card from "./Lower-section";
import Data from "./Data";

function App() {

  let cards = Data.map((data) => {
    return (
      <Card key={data.id} items = {data} />
    )
  })

  return (
    <>
      <Navbar />
      <Uppersection />
      <div id="app-cards">
        {cards}
      </div>
    </>
  );
}

export default App;
