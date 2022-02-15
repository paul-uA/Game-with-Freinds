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
    let [platform, setPlatform] = useState('') 
    let [sortBy, setSortBy] = useState('')   

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
        // console.log(urltags)

    }

       const tagButtons = tagList.map((ele, idx) => {

        return (
            <>
                <button name="tag"  className={`chip ${urltags.includes(ele) ? "active" : ''}`} onClick={toggleTag} >
                    {/* <!-- Content --> */}
                    <div className="chip__content">
                        {ele}
                    </div>
                </button>
            </>
        )
    })

    const handlePlatform =(e)=>{
        let checkbox1 = e.target.form[45].checked
        let checkbox2 = e.target.form[46].checked
        if ((checkbox1 && checkbox2) || (!checkbox1 && !checkbox2)){
            // thing = 'this thing'
            setPlatform('&platform=all')
            // console.log(platform)
            //  console.log(thing)
        }
        if(checkbox1 && !checkbox2){
            setPlatform('&platform=pc')
        }
        if(!checkbox1 && checkbox2){
            setPlatform('&platform=browser')
        } 

    } 

    const handleSortBy =(e)=>{
        let checkbox3 = e.target.form[47].checked
        let checkbox4 = e.target.form[48].checked
        let checkbox5 = e.target.form[49].checked
        if(checkbox3 && !checkbox4 && !checkbox5){
            setSortBy('&sort-by=release-date')            
        }
        if(!checkbox3 && checkbox4 && !checkbox5){
            setSortBy('&sort-by=popularity')          
        }
        if((!checkbox3 && !checkbox4 && checkbox5) || (!checkbox3 && !checkbox4 && !checkbox5 )){
            setSortBy('&sort-by=alphabetical')
            
        }
        
    }

    const submitForm = (e) => {
        e.preventDefault()
        setActiveTags(urltags.join('.'))
        // console.log(activeTags,sortBy,platform)
        fetch(URL+activeTags+platform+sortBy,options)
        .then((res)=>res.json())
        .then((json)=>{
            setSearchData(json)
            // console.log(searchData)
        })
    }
        
            useEffect(()=>{

    },[])
        


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
                           <input type="checkbox" name='Platform' onClick={handlePlatform} />
                            <p className='Platform'>PC</p>
                        </label>
                        <label className="label">
                            <input type="checkbox" name='Platform' onClick={handlePlatform}  />
                            <p className='Platform'>Browser</p>
                        </label>
                        </div>
                        <div className='platform-choice'>
                        Sort by:
                        <label className="label">
                           <input type="radio" name='sort' onClick={handleSortBy} />
                            <p className='Platform'>release-date</p>
                        </label>
                        <label className="label">
                            <input type="radio" name='sort' onClick={handleSortBy}  />
                            <p className='Platform'> popularity</p>
                        </label>
                        <label className="label">
                            <input type="radio" name='sort' onClick={handleSortBy} />
                            <p className='Platform'> alphabetical</p>
                        </label>
                        <input type='submit' value="Search"/>
                        </div>
                    </form>
                </div>


            <section className='searched-games'>
                <SearchResults searchdata={searchData}/>
            </section>
        </>
    )


}

export default GameSearch