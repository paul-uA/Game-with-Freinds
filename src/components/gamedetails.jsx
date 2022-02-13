import { useEffect, useState } from "react";
import {useNavigate, Link, useParams} from 'react-router-dom'

import './gamedetails.css'


function GameDetails () {
    let id = useParams()
    //console.log(id)

    const [gameDetails, setGameDetails] = useState()



    const URL= "https://free-to-play-games-database.p.rapidapi.com/api/game?id="+`${id.id}`
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_API_KEY
            }
    };


    useEffect(async()=>{
        await fetch(URL,options)
        .then((res)=> res.json())
        .then((json)=>{
            console.log(json)
            setGameDetails(json)
           // console.log(gameDetails)
        })

        
    },[])
    
    const GameDes = !gameDetails ? <p>Loading Game Details....</p> :  
<div className="container">
    <header>
        ...
    </header>
    <main className="container__main">
        {/* <!-- Left sidebar --> */}
        <aside className="container__left">
           <img className="thumbNail"  src={gameDetails.screenshots[0].image} alt="game thumbnail one" />
           <img className="thumbNail" src={gameDetails.screenshots[1].image} alt="game thumbnail two" />
           <img className="thumbNail" src={gameDetails.screenshots[2].image} alt="game thumbnail three"/>
            </aside>

        {/* <!-- Main content --> */}
        <article className="container__middle">
            <h1>{gameDetails.title}</h1> <br/>
            <h4>Description</h4>
            <p>{gameDetails.description}</p>


        </article>

        {/* <!-- Right sidebar --> */}
        <nav className="container__right">
            <h3>Publisher</h3> <br/>
            <p>{gameDetails.publisher}</p> <br/>
            <h3>Developer</h3> <br/>
            <p>{gameDetails.developer}</p> <br/>
            <h3>Genre</h3> <br/>
            <p>{gameDetails.genre}</p> <br/>
            <h3>Released</h3> <br/>
            <p>{gameDetails.release_date}</p> <br/>
        </nav>
    </main>
    <footer>
        ...
    </footer>
</div>
        
    

    return(
        <>
        {GameDes}
        </>
    )
}

export default GameDetails