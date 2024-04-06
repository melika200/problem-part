import { Col, Container, Row } from 'react-bootstrap'
import './Hero.css'
import heroImage from '../../assets/images/undraw_my_code_snippets_re_4adu.svg'
import HeroBox from '../HeroBox/HeroBox'
import { FaUserLarge } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { IoPlaySkipBack } from "react-icons/io5";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Hero(){
    useEffect(()=>{
        Aos.init()
    },[])
    return(
        <>
        <div className="heroContainer">
            <Container>
                <Row className='align-items-center'>
                    <Col className='col-12 col-md-6' data-aos="zoom-in">
                     <img src={heroImage} className='hero-img img-fluid' />
                    </Col>
                    <Col className='col-12 col-md-6'data-aos="zoom-in">
                    <h2 className="heroTitle">آمارها افتخار ما هستند</h2>
                    <Row className='justify-content-center row-cols-1 row-cols-xl-2 gy-4 '>
                    <Col>
                        <HeroBox title='تعداد دانشجو' count={3500}>
                        <FaUserLarge size='30px' />
                        </HeroBox>
                        </Col>
                        <Col>
                        <HeroBox title='مقالات' count={960}>
                        <FaBook size='30px' />
                        </HeroBox>
                        </Col>
                        <Col>
                        <HeroBox title='تعداد دوره' count={19}>
                        <FaCode size='30px' />
                        </HeroBox>
                        </Col>
                        <Col>
                        <HeroBox title='پروژه موفق' count={15}>
                        <ImBooks size='30px' />
                        </HeroBox>
                        </Col>

                    </Row>

                    <p className="startLearning"><b>شروع آموزش</b> <IoPlaySkipBack size='40px' /></p>
                    </Col>
                </Row>
            </Container>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#eee" fillOpacity="1" d="M0,64L48,96C96,128,192,192,288,186.7C384,181,480,107,576,106.7C672,107,768,181,864,208C960,235,1056,213,1152,170.7C1248,128,1344,64,1392,32L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </>
    )
}
export default Hero