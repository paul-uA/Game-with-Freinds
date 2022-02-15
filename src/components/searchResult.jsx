import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

function SearchResults (props) {
    const {searchdata} =props
    console.log(searchdata)
   
            
    const itemsSearch = !searchdata ? <p>Loading Games.....</p> : searchdata.slice(0,10).map((ele,idx)=>{
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
        {itemsSearch}
        </>
    )
        
}

export default SearchResults