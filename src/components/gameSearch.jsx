import { useState, useEffect } from 'react'
import './gameSearch.css'

function GameSearch(props) {

    const tagList = ['mmorpg', 'shooter', 'strategy', 'moba',
        'racing', 'sports', 'social', 'sandbox', 'open-world', 'survival',
        'pvp', 'pve', 'pixel', 'voxel', 'zombie', 'turn-based', 'first-person',
        'third-Person', 'top-down', 'tank', 'space', 'sailing', 'side-scroller',
        'superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps',
        'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting',
        'action-rpg', 'action', 'military', 'martial-arts', 'flight', 'low-spec',
        'tower-defense', 'horror', 'mmorts']

        let platform = ''
        let sortBy = ''
 

        let URL='https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=' 

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY
                }
        };

    const [urltags, setURLTags] = useState([])
    const [searchData, setSearchData] = useState()
    const [activeTags, setActiveTags] =useState('')
    

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

    
    const handleSubmit = (e) =>{
        //  console.log(e.target.form)
        let checkbox1 = e.target.form[45].checked
        let checkbox2 = e.target.form[46].checked
        let checkbox3 = e.target.form[47].checked
        let checkbox4 = e.target.form[48].checked
        let checkbox5 = e.target.form[49].checked
        if ((checkbox1 && checkbox2) || (!checkbox1 && !checkbox2)){
            platform = '&platform=all'
        }
        if(checkbox1 && !checkbox2){
            platform = '&platform=pc'
        }
        if(!checkbox1 && checkbox2){
            platform = '&platform=browser' 
        }        
        if(checkbox3 && !checkbox4 && !checkbox5){
            sortBy = '&sort-by=release-date'            
        }
        if(!checkbox3 && checkbox4 && !checkbox5){
            sortBy = '&sort-by=popularity'            
        }
        if((checkbox3 && !checkbox4 && !checkbox5) || (!checkbox3 && !checkbox4 && !checkbox5 )){
            sortBy = '&sort-by=alphabetical'
            
        }
        
    }
    const SubmitTags = (e) => {
        e.preventDefault()
    }
    useEffect(() => {
        setActiveTags(urltags.join('.'))
        fetch(URL+activeTags+platform+sortBy,options)
        .then((res)=>{console.log(res)})
  


    },[])
    
    return (
        <>

                <div className='serach-options'>
                    <form action="GET" onSubmit={SubmitTags}>
                        <div className='Tags-options'>
                            {tagButtons}
                        </div>
                        <div className='platform-choice'>
                        Platform:
                        <label className="label">
                           <input type="checkbox" name='Platform' />
                            <p className='Platform'>PC</p>
                        </label>
                        <label className="label">
                            <input type="checkbox" name='Platform'  />
                            <p className='Platform'>Browser</p>
                        </label>
                        </div>
                        <div className='platform-choice'>
                        Sort by:
                        <label className="label">
                           <input type="radio" name='sort' />
                            <p className='Platform'>release-date</p>
                        </label>
                        <label className="label">
                            <input type="radio" name='sort'  />
                            <p className='Platform'> popularity</p>
                        </label>
                        <label className="label">
                            <input type="radio" name='sort'  />
                            <p className='Platform'> alphabetical</p>
                        </label>
                        <button type='submit' onClick={handleSubmit}>Search</button>
                        </div>
                    </form>
                </div>


            <section className='searched-games'>

            </section>
        </>
    )


}

export default GameSearch