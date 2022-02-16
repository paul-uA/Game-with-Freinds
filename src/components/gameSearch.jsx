import { useState, useEffect } from 'react'
import './gameSearch.css'

import SearchResults from './searchResult'

function GameSearch(props) {

    const tagList = ['mmorpg', 'shooter', 'strategy', 'moba',
        'racing', 'sports', 'social', 'sandbox', 'open-world', 'survival',
        'pvp', 'pve', 'pixel', 'voxel', 'zombie', 'turn-based', 'first-person',
        'third-Person', 'top-down', 'tank', 'space', 'sailing', 'side-scroller',
        'superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps',
        'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting',
        'action-rpg', 'action', 'military', 'martial-arts', 'flight', 'low-spec',
        'tower-defense', 'horror', 'mmorts']

        // let thing =''

 

        let URL='https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=' 

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY
                }
        };

    const [urltags, setURLTags] = useState([])
    const [searchData, setSearchData] = useState([])
    let [activeTags, setActiveTags] = useState('')
    let [pc, setPC] = useState(false) 
    let [browser, setBrowser] = useState(false) 
    let [alpha, setAlpha] = useState(false) 
    let [popular, setPopular] = useState(false)
    let [date, setDate] = useState(false) 
    const [noTags, setNoTags] = useState('Select at least 1 Tag')   


    const toggleTag = (e) => {
        const activeArray = [...urltags]
       let tagName = e.target.textContent

        if (activeArray.includes(tagName)) {
            activeArray.splice(activeArray.indexOf(tagName), 1)
        }
        else {
            activeArray.push(tagName)
        }
        setURLTags(activeArray)
        setActiveTags(activeArray.join('.'))
         

    }

       const tagButtons = tagList.map((ele, idx) => {

        return (
                <div name="tag" key={idx} className={`chip ${urltags.includes(ele) ? "activeON" : ''}`} onClick={toggleTag} >
                    {/* <!-- Content --> */}
                    <div className="chip__content">
                        {ele}
                    </div>
                </div>
        )
    })

    const handlePlatform =(e)=>{
        if (e.target.name ==="Pc" && e.target.checked === true){
            setPC(true)
        }
        if(e.target.name ==="Browser" && e.target.checked === true){
            setBrowser(true)
        }

    } 

    const handleSortBy =(e)=>{
        //  console.log(e.target.id)

        if(e.target.id ==='release' && e.target.checked === true){
            setDate(true)
            setPopular(false) 
            setAlpha(false)                         
        }
        if(e.target.id==='popular' && e.target.checked === true){
            setPopular(true)
            setDate(false)             
            setAlpha(false)                                    
        }
        if(e.target.id ==='alpha' && e.target.checked === true){
            setDate(false)
            setPopular(false) 
            setAlpha(true)                                  
        }
        // console.log(date,popular,alpha)
        
    }
    
    const submitForm = (e) => {
       e.preventDefault()
        // console.log('this is who called fetch', e)
        let platform
        let sortBy

        if ((pc && browser) || (!pc && !browser)){
            platform ='&platform=all' 
        }
        if(pc && !browser)(
            platform ='&platform=pc'
        )
        if(!pc && browser)(
            platform ='&platform=browser'
        )
        if(date && !popular && !alpha){
            sortBy ='&sort-by=release-date'
        }
        if((!date && popular && !alpha) || (!date && !popular && !alpha) ){
            sortBy ='&sort-by=popularity'
        }
        if(!date && !popular && alpha){
            sortBy ='&sort-by=alphabetical'
        }

        if(!activeTags){
            setNoTags('Select at least 1 Tag')           

        }else{
            setNoTags('')
            // console.log(sortBy)
        fetch(URL+activeTags+platform+sortBy,options)
        .then((res)=>res.json())
        .then((json)=>{
            setSearchData(json)
            // console.log(searchData)
        })
    }
    }
    

    return (
        <>

                <div className='serach-options'>
                    <form action="GET" onSubmit={submitForm}>
                        <div className='Tags-options'>
                            {tagButtons}
                        </div>
                        <div className='platform-choice'>
                        Platform:
                        <label className="label">
                           <input type="checkbox" name='Pc' onClick={handlePlatform} />
                            <p className='Platform'>PC</p>
                        </label>
                        <label className="label">
                            <input type="checkbox" name='Browser' onClick={handlePlatform}  />
                            <p className='Platform'>Browser</p>
                        </label>
                        </div>
                        <div className='platform-choice'>
                        Sort by:
                        <label className="label">
                           <input type="radio" name='sortBy' id='date' onClick={handleSortBy}   />
                            <p className='Platform'>release-date</p>
                        </label>
                        <label className="label">
                            <input type="radio" name='sortBy' id='popular' onClick={handleSortBy}   />
                            <p className='Platform'> popularity</p>
                        </label>
                        <label className="label">
                            <input type="radio" name='sortBy' id='alpha' onClick={handleSortBy}  />
                            <p className='Platform'> alphabetical</p>
                        </label>
                        <input type='submit' value="Search"/>
                        </div>
                    </form>
                    {noTags}
                </div>


            <section className='searched-games'>
                <SearchResults searchdata={searchData}/>
            </section>
        </>
    )


}

export default GameSearch