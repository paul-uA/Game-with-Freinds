import {useState} from 'react'
import './gameSearch.css'

function GameSearch (props) {

const tagList = [ 'mmorpg', 'shooter', 'strategy', 'moba', 
'racing', 'sports', 'social', 'sandbox', 'open-world', 'survival',
 'pvp', 'pve', 'pixel', 'voxel', 'zombie', 'turn-based', 'first-person', 
 'third-Person', 'top-down', 'tank', 'space', 'sailing', 'side-scroller', 
 'superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps',
  'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting', 
  'action-rpg', 'action', 'military', 'martial-arts', 'flight', 'low-spec', 
  'tower-defense', 'horror', 'mmorts']

  const [urltags, setURLTags] = useState(false)


  const toggleTag = ()=> {
    setURLTags(!urltags);

  }


const tagButtons = tagList.map((ele,idx)=>{
    
    return(
        <>
        <button className="chip" on>
         {/* <!-- Content --> */}
             <div className="chip__content">
            {ele}
             </div>
        </button>
        </>
    )
})



    return(
        <>
        <div className='serach-options'>
            <form action="">
                <div>
            {tagButtons}
            </div>
            <label class="label">
    {/* <!-- The real radio --> */}
    <input type="radio" class="label__input" />

    {/* <!-- The fake circle --> */}
    <div class="label__circle">
        {/* <!-- The inner circle --> */}
        <div class="label__radio label__radio--selected"></div>
    </div>

    {/* <!-- The text --> */}
    <p className='Platform'>PC</p>
</label>
<label class="label">
    {/* <!-- The real radio --> */}
    <input type="radio" class="label__input" />

    {/* <!-- The fake circle --> */}
    <div class="label__circle">
        {/* <!-- The inner circle --> */}
        <div class="label__radio label__radio--selected"></div>
    </div>

    {/* <!-- The text --> */}
    <p className='Platform'>Browser</p>
</label>

            

            </form>
        </div>
        </>
    )


}

export default GameSearch