
import {Link} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'

function SearchResults (props) {
    const {searchdata} =props
    // console.log(searchdata)
   
            
    const itemsSearch = !searchdata ? <p>Loading Games.....</p> : searchdata.map((ele,idx)=>{
        return(
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

    return(
        <>
        {itemsSearch}
        </>
    )
        
}

export default SearchResults