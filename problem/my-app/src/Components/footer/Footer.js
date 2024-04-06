import './Footer.css'
import { Container,Row,Col } from 'react-bootstrap'
function Footer(){
  return(
    <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L48,224C96,192,192,128,288,128C384,128,480,192,576,224C672,256,768,256,864,240C960,224,1056,192,1152,197.3C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    
        <footer className='bg-primary'>
            <Container>
                <Row>
                <Col>
                    <p>ستون 1</p>
                    </Col>
                    <Col>
                    <p>ستون2</p>
                    </Col>
                    <Col>
                    <p>ستون 3</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    </>
    )
}
export default Footer