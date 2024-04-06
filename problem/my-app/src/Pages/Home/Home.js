import { Col, Container, Row } from "react-bootstrap"
import Articleitem from "../../Components/article/Articleitem"
import MyNavbar from "../../Components/navbar/MyNavbar"
import { useEffect, useState } from "react"
import axios from "axios"
import Footer from "../../Components/footer/Footer"
import Hero from "../../Components/hero/Hero";
import {Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import 'swiper/css';
import SwiperButton from "../../Components/SwiperButton/SwiperButton"
import './Home.css'
import Course from "../../Components/course/Course"

function Home(){
    const [articles,setArticles]=useState([])
    const [courses,setCourses]=useState([])
    useEffect(()=>{
        axios.get('http://localhost/react/api/articles/?page=1&limit=6')
        .then(Response=>setArticles(Response.data.data))

        axios.get('http://localhost/course/api/courses/?page=1&limit=6')
        .then(Response=>setCourses(Response.data.data))
    },[])
    return(
       <>
       <MyNavbar />
       <Hero />
       <Container >
        

        <Row className="py-3">
        <h1 style={{marginTop:'20px'}}>درباره ی  دوره ها</h1>
            <Swiper
            className="customSwiperStyle"
            spaceBetween={30}
            autoplay={{
                delay:2000,
                disableOnInteraction:false
            }}
            modules={[Autoplay]}
            breakpoints={{
                1200:{
                    slidesPerView:4
                },
                992:{
                    slidesPerView:3
                },
                768:{
                    slidesPerView:2
                },
                500:{
                    slidesPerView:1
                }
            }}

            >
                       <div className="swiperTopSection">
                <h2 className="sectionTitle">جدیدترین  دوره ها</h2>
                <SwiperButton />
                 </div>
                {
                    courses.map(
                        course=>(
                            <SwiperSlide>
                                 <Course {...course} />
                           </SwiperSlide>
                        )
                    )
                }
            <SwiperSlide>
                    <Course {...courses[0]} />
                </SwiperSlide>
                <SwiperSlide>
                    <Course {...courses[1]} />
                </SwiperSlide>
                <SwiperSlide>
                    <Course {...courses[2]} />
                </SwiperSlide>
            </Swiper>

        </Row>

         
        
       {/* 
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 py-3 gy-4">
            {
                articles.map(article=>(
                    <Col>
                    <Articleitem {...article} />
                    </Col>
                ))
            }
         
        </Row> */}
        <Row className="py-3">
        <h1 style={{marginTop:'20px'}}>درباره ی مقالات</h1>
            <Swiper
            className="customSwiperStyle"
            spaceBetween={30}
            autoplay={{
                delay:3000,
                disableOnInteraction:false
            }}
            modules={[Autoplay]}
            breakpoints={{
                1200:{
                    slidesPerView:4
                },
                992:{
                    slidesPerView:3
                },
                768:{
                    slidesPerView:2
                },
                500:{
                    slidesPerView:1
                }
            }}

            >
                       <div className="swiperTopSection">
                <h2 className="sectionTitle">جدیدترین مقالات</h2>
                <SwiperButton />
                 </div>
                {
                    articles.map(
                        article=>(
                            <SwiperSlide>
                                 <Articleitem {...article} />
                           </SwiperSlide>
                        )
                    )
                }
            <SwiperSlide>
                    <Articleitem {...articles[0]} />
                </SwiperSlide>
                <SwiperSlide>
                    <Articleitem {...articles[1]} />
                </SwiperSlide>
                <SwiperSlide>
                    <Articleitem {...articles[2]} />
                </SwiperSlide>
            </Swiper>

        </Row>
       </Container>
       
       <Footer />
       </>


      )
}
export default Home