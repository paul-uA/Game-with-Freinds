import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'

import './gamedetails.css'


function GameDetails() {
    let id = useParams()
    //console.log(id)

    const [gameDetails, setGameDetails] = useState()



    const URL = "https://free-to-play-games-database.p.rapidapi.com/api/game?id=" + `${id.id}`
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_API_KEY
        }
    };


    useEffect(async () => {
        await fetch(URL, options)
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                setGameDetails(json)
                // console.log(gameDetails)
            })
    }, [])

    const GameDes = !gameDetails ? <p>Loading Game Details....</p> :
        <Container>
            <Row>
                <Col>
                    <h1>{gameDetails.title}</h1> <br />
                </Col>
            </Row>
            <Row>
                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="thumbNail"
                                src={gameDetails.screenshots[0].image}
                                alt="game thumbnail one" />
                            <Carousel.Caption>
                                <h3></h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="thumbNail"
                                src={gameDetails.screenshots[1].image}
                                alt="game thumbnail two" />

                            <Carousel.Caption>
                                <h3></h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="thumbNail"
                                src={gameDetails.screenshots[2].image}
                                alt="game thumbnail three" />

                            <Carousel.Caption>
                                <h3></h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </Container>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <h4>Description</h4>
                    </Row>
                    <Row>
                        <p>{gameDetails.description}</p>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <h3>Publisher</h3> <br />
                        <p>{gameDetails.publisher}</p> <br />
                    </Row>
                    <Row>
                        <h3>Developer</h3> <br />
                        <p>{gameDetails.developer}</p> <br />
                    </Row>
                    <Row>
                        <h3>Genre</h3> <br />
                        <p>{gameDetails.genre}</p> <br />
                        
                    </Row>
                    <Row>
                        <h3>Released</h3> <br />
                        <p>{gameDetails.release_date}</p> <br />
                    </Row>

                </Col>
            </Row>

        </Container >



    return (
        <>
            {GameDes}
        </>
    )
}

export default GameDetails

