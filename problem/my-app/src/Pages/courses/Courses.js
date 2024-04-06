import { useEffect, useState } from "react";
import MyNavbar from "../../Components/navbar/MyNavbar";
import axios from "axios";
import { Accordion, Alert, Col, Container, Row } from "react-bootstrap";
import Articleitem from "../../Components/article/Articleitem";
import { TiArrowUnsorted } from "react-icons/ti";
import { MdCategory } from "react-icons/md";
import { Form } from "react-router-dom";
import Course from "../../Components/course/Course";
import { FaFilter } from "react-icons/fa6";
import './Courses.css'

function Courses(){
    const [courses, setCourses] = useState([]);
  const [sortType, setSortType] = useState("earliest");
  const[searchKey,setSearchKey]=useState('')
  const [category , setCategory] = useState("")
  const [coursestate , setCoursestate] = useState("")


  useEffect(() => {
    if(sortType=='earliest'){
        getCoursesByOrder('desc','id')
    }
    else if(sortType=='latesst'){
        getCoursesByOrder('asc','id')
  
    }
    else if(sortType=='expensivnest'){
        getCoursesByOrder('desc','mainPrice')
    }
    else if(sortType=='cheapest'){
        getCoursesByOrder('asc','mainPrice')

    }
  }, [sortType]);

  useEffect(()=>{
    if(category=='frontend')
    getCoursesByCategory('فرانت اند')
  else if(category=='backend')
  getCoursesByCategory('بک اند')
  },[category])



  useEffect(()=>{
    if(coursestate=='compeleted')
    getCoursesByState('compeleted')
    else if(coursestate=='presell')
    getCoursesByState('presell')
    else if(coursestate=='recording')
    getCoursesByState('recording')
  },[coursestate])
  


  const sortHandler = (e) => {
    setSortType(e.target.id)
  };
  const getCoursesByOrder=(order,column)=>{
    axios
    .get(`http://localhost/react/api/courses/?order=${order}&column=${column}`)
    .then((Response) => setCourses(Response.data.data)); 
  }
  const getCoursesByCategory=(category)=>{
    axios
    .get(`http://localhost/react/api/courses/?category=${category}`)
    .then((Response) => setCourses(Response.data.data)); 
  }
  const getCoursesByState=(state)=>{
    axios
    .get(`http://localhost/react/api/courses/?state=${state}`)
    .then((Response) => setCourses(Response.data.data)); 
  }

  const searchInputhandler=(e)=>{
    setSearchKey(e.target.value)
  }
  const searchButtonhandler=()=>{
    axios
    .get(`http://localhost/react/api/courses/?search=${searchKey}&column=writter`)
    .then((Response) => setCourses(Response.data.data)); 
  }
  const categoryHandler=(e)=>{
    setCategory(e.target.value)
  }
  const courseStateHandler=(e)=>{
  setCoursestate(e.target.value)
  }
  return (
    <>
      <MyNavbar />
      <Container>
        <div className="searchSection">
          <h1>درباره ی مقالات</h1>
          <div className="searchBoxContainer">
            <input className="searchInput" type="text" onChange={searchInputhandler} />
            <button className="searchButton"onClick={searchButtonhandler}>جستجو</button>
          </div>
        </div>
        <Row>
          <Col className="col-12 col-lg-3">
            <Accordion className="py-3" alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <TiArrowUnsorted />
                  <b>مرتب سازی</b>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Check
                      type="radio"
                      id="earliest"
                      name="sort"
                      label="جدید ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="latest"
                      name="sort"
                      label="قدیمی ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="expensivenst"
                      name="sort"
                      label="گران ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="cheapest"
                      name="sort"
                      label="ارزان ترین"
                      onChange={sortHandler}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
             
            </Accordion>
            <div className="filterWrapper ">
              <div className="filterIcon">
                <MdCategory />
                <b>دسته بندی</b>
              </div>
              <Form>
              <Form.check
                type='checkbox'
                value='frontend'
                label='فرانت اند'
                onChange={categoryHandler}
                checked={category =='frontend' ? true:false}
                />
                    <Form.check
                type='checkbox'
                value='backend'
                label='بک اند'
                onChange={categoryHandler}
                checked={category =='backend' ? true:false}
                />
              </Form>
            </div>

            <div className="filterWrapper ">
              <div className="filterIcon">
              <FaFilter />
                <b>وضعیت دوره</b>
              </div>
              <Form>
              <Form.check
                type='switch'
                value='compeleted'
                label='تکمیل شده'
                onChange={courseStateHandler}
                checked={coursestate =='compeleted' ? true:false}
                />
                    <Form.check
                type='switch'
                value='presell'
                label='پیش فروش'
                onChange={courseStateHandler}
                checked={coursestate =='presell' ? true:false}
                />
                        <Form.check
                type='switch'
                value='recording'
                label='در حال ضبط'
                onChange={courseStateHandler}
                checked={coursestate =='recording' ? true:false}
                />
              </Form>
            </div>

          </Col>
          <Col className="col-12 col-lg-9">
            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 py-3 gy-4">
              {courses.map((course) => (
                <Col key={course.id}>
                  <Course {...course} />
                </Col>
              ))}
            </Row>
          {
            courses.length==0 && (
              <Alert variant='warning' className="py-3 gy-4 mt-2">
              <p>مقاله ای یافت نشد</p>
              </Alert>
            )
          }
          </Col>
        </Row>
      </Container>
    </>
  );

}
export default Courses