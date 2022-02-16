// modules
import { useState } from "react"
//components
import Top10Box from "./top10"
import Top10Mmo from "./TopTenMmo"
//style
import './gameContainer.css'


function GamesContainer (){

  const [pageNum , setPageNum]= useState()

    return (
        <>
        <section className="t20container">
        <div className="cards">
        {/* <!-- A card with given width --> */}
        <h2 className="Title" >Top 10 shooters</h2>
        <div className="cards__item">
          <Top10Box/>
        </div>
        <h2 className="Title" >Top 10 MMO's</h2>
        <div className="cards__item">
          <Top10Mmo/>
        </div>

    </div>
    </section>
    </>
    )
}

export default GamesContainer
