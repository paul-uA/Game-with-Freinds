import { Nav, Navbar,Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'

import './homebar.css'

function Homebar () {

    return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand >
    <Link to='/' className="nav-link active" aria-current="page" href="#">
    <img
        src='https://raw.githubusercontent.com/paul-uA/game-with-freinds/main/public/gamelogo.png'
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt="game with friends logo"
      />
      </Link>
    </Navbar.Brand>
    <Nav className="me-auto">
    <Link to='/' className="nav-link active" aria-current="page" href="#">Game With Friends</Link>
    <Link to='/searchgames' className="nav-link active" aria-current="page" href="#">Search</Link>
    </Nav>
    </Container>
  </Navbar>
  <br />
    </>
    )
}

export default Homebar