import { faCartPlus, faStar, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card , Button } from 'react-bootstrap'

function Product(props){


    return(
        <Card >
        <Card.Img variant="top" src={"./images/"+props.data.image} />
        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
          <h5 className='badge bg-success'>{props.data.price } DT </h5>
          <Card.Text>
            {props.data.description}
          </Card.Text>
         
      

          <Button variant="primary" className='me-2' onClick={props.added}> <FontAwesomeIcon icon={faCartPlus} /></Button>
          <Button variant="danger" onClick={props.remove} ><FontAwesomeIcon icon={faXmarkCircle} /> </Button>
        </Card.Body>
      </Card>
    )
}

export default Product;