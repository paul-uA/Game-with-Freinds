// modules
import { useState } from "react"
//components
import Top10Box from "./top10"
//style
import './gameContainer.css'


function GamesContainer (){

  const [pageNum , setPageNum]= useState()

    return (
        <>
        <section className="t20container">
        <div className="cards">
        {/* <!-- A card with given width --> */}
        <h2>Top 10 shooters</h2>
        <div className="cards__item">
          <Top10Box/>
        </div>

    </div>
    </section>
    </>
    )
}

export default GamesContainer
