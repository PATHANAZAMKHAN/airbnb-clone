import React from "react";
import {Navbar, Uppersection} from "./Upper-section";
import Card from "./Lower-section";
import Data from "./Data";

function App() {

  let cards =  Data.map((data)=>{
    return(
      <Card coverImg = {data.coverImg} title = {data.title} desc = {data.description} price ={parseInt(data.price)} rating = {parseFloat(data.stats.rating)} reviewCount = {parseInt(data.stats.reviewCount)} />
    )
  })

  return (
    <>
      <Navbar />
      <Uppersection/>
      <div id = "app-cards">
        {cards}
      </div>
    </>
  );
}

export default App;
