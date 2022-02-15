import { useEffect, useState } from "react";
import {Route,Routes,useNavigate, Link} from 'react-router-dom'

import './topTen.css'


function Top10Mmo (props) {



        
    const [gameData, setGameData] = useState()


    let  params = '?platform=pc&category=mmo&sort-by=popularity'
    const URL= "https://free-to-play-games-database.p.rapidapi.com/api/games"
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_API_KEY
            }
    };

    useEffect(()=>{
        fetch(URL+params,options)
        .then((res)=>res.json())
        .then((json)=>{
            //console.log(json)
            setGameData(json)
            // console.log(gameData)
        })

        
    },[])
            
    const TenInfo = !gameData ? <p>Loading Games.....</p> : gameData.slice(0,10).map((ele,idx)=>{
        return(
            <div key={idx}>
            <Link to={`/details/${ele.id}`} key={idx}>
            <div className="card" key={idx} >
                {/* <!-- Cover --> */}
                <div className="card__cover">
                    <img className='thumbNail' src={ele.thumbnail} />
                </div>
                {/* <!-- Content --> */}
                <div className="card__content">
                    <p>{ele.title}</p>
                </div>
                    <p className="genre-tag">{ele.genre}</p>
            </div>
            </Link>
            </div>
        )
    }) 

    return(
        <>
        {TenInfo}
        </>
    )
        
}

export default Top10Mmo