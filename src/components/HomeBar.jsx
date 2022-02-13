import {Route,Routes,useNavigate, Link} from 'react-router-dom'

import './homebar.css'

function Homebar () {

    return (
    <>
    <ul className="nav justify-content-center">
        <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
        <li className="nav-item">
            <Link to='/' className="nav-link active" aria-current="page" href="#">Game With Friends</Link>
        </li>

    </ul>
    </>
    )
}

export default Homebar