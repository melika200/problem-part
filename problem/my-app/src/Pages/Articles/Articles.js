import { useEffect, useState } from "react";
import MyNavbar from "../../Components/navbar/MyNavbar";
import axios from "axios";
import { Accordion, Alert, Col, Container, Row } from "react-bootstrap";
import Articleitem from "../../Components/article/Articleitem";
import "./Articles.css";
import { TiArrowUnsorted } from "react-icons/ti";
import { MdCategory } from "react-icons/md";
import { Form } from "react-router-dom";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [sortType, setSortType] = useState("earliest");
  const[searchKey,setSearchKey]=useState('')

  useEffect(() => {
    if(sortType=='earliest'){
        getArticlByOrder('desc','id')
    }
    else if(sortType=='latesst'){
        getArticlByOrder('asc','id')
  
    }
    else if(sortType=='longest'){
        getArticlByOrder('desc','readingTime')
    }
    else if(sortType=='shortest'){
        getArticlByOrder('asc','id')

    }
  }, [sortType]);
  const sortHandler = (e) => {
    setSortType(e.target.id)
  };
  const getArticlByOrder=(order,column)=>{
    axios
    .get(`http://localhost/react/api/articles/?order=${order}&column=${column}`)
    .then((Response) => setArticles(Response.data.data)); 
  }
  const searchInputhandler=(e)=>{
    setSearchKey(e.target.value)
  }
  const searchButtonhandler=()=>{
    axios
    .get(`http://localhost/react/api/articles/?search=${searchKey}&column=writter`)
    .then((Response) => setArticles(Response.data.data)); 
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
                      id="longest"
                      name="sort"
                      label="طولانی ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="shortest"
                      name="sort"
                      label="کوتاه ترین"
                      onChange={sortHandler}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <MdCategory />
                  <b>دسته بندی</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p>دسته بندی مقالات</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col className="col-12 col-lg-9">
            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 py-3 gy-4">
              {articles.map((article) => (
                <Col>
                  <Articleitem {...article} />
                </Col>
              ))}
            </Row>
          {
            articles.length==0 && (
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
export default Articles;
