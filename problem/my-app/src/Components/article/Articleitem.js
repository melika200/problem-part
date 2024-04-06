import Card from 'react-bootstrap/Card';
import './Articleitem.css';
import { MdAccessTime } from "react-icons/md";
import { CardFooter } from 'react-bootstrap';
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from 'react-router-dom';
function Articleitem(props){
    return(
        <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            {props.description}    
         </Card.Text>
          <Link to={`./article/${props.id}`}>
          <span className='read-more'>
            <span>ادامه مقاله</span>
            <span><TiArrowLeftThick /></span>
          </span>
          </Link>
      </Card.Body>
      <CardFooter className='d-flex justify-content-between py-3 align-items-center'>
        <span>نویسنده:{props.writter} </span>
        <span>{props.readingTime}دقیقه <MdAccessTime />  </span>
      </CardFooter>
    </Card>
    )
}
export default Articleitem