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

    const [urltags, setURLTags] = useState([])
    // const [searchTag, setSearchTag] = useState([])


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
                <button name="tag" className={`chip ${urltags.includes(ele) ? "active" : ''}`} onClick={toggleTag} key={idx}>
                    {/* <!-- Content --> */}
                    <div className="chip__content">
                        {ele}
                    </div>
                </button>
            </>
        )
    })

    const SubmitTags = (e) => {
        e.preventDefault()

    }

 const handleSubmit = (e) =>{
     let platform = ''
        let checkbox1 = ((e.target.form[45].value === 'on') ? true : false )
        let checkbox2 = ((e.target.form[46].value === 'on') ? true : false )
        if (checkbox1 && checkbox2 ){
            platform = 'all'
        }
        if(checkbox1 && !checkbox2){
            platform == 'pc'
        }
        if(!checkbox1 && checkbox2){
            platform= 'browser'
        }



    }


    useEffect(() => {

    })





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