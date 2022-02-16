import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Card, Button } from "react-bootstrap";

import './topTen.css'


function Top10Box(props) {




    const [gameData, setGameData] = useState()


    let params = '?platform=pc&category=shooter&sort-by=popularity'
    const URL = "https://free-to-play-games-database.p.rapidapi.com/api/games"
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_API_KEY
        }
    };

    useEffect(() => {
        fetch(URL + params, options)
            .then((res) => res.json())
            .then((json) => {
                //console.log(json)
                setGameData(json)
                //console.log(gameData)
            })


    }, [])

    const TenInfo = !gameData ? <p>Loading Games.....</p> : gameData.slice(0, 10).map((ele, idx) => {
        return (
        
            <Card key={idx} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ele.thumbnail} />
  <Card.Body>
    <Card.Title>{ele.title}</Card.Title>
    <Card.Text>
        {ele.short_description}
    </Card.Text>
    <Link to={`/details/${ele.id}`} key={idx}>
    <Button variant="dark">Details</Button></Link>
  </Card.Body>
</Card>

        )
    })

    return (
        <>
            {TenInfo}
        </>
    )

}

export default Top10Box