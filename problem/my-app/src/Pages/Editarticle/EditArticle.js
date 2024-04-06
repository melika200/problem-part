import axios from "axios";
import { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";
import MyNavbar from "../../Components/navbar/MyNavbar";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

function EditArticle(){
  const articleId=useParams().articleId;
  const[articledata,setArticledata]=useState({});
  useEffect( ()=>{
    axios.get(`http://localhost/react/api/articles/?id=${articleId}`)
    .then(response=>setArticledata(response.data.data[0]))
  }
  ,[])

  const editarticlehandler=()=>{
 axios.put(`http://localhost/react/api/articles/?id=${articleId}`,articledata)
 Swal.fire(
  {
    title:'ویرایش با موفقیت انجام شد',
    timer:1500,
    timerProgressBar:true,
    showConfirmButton:false
  }
 )
  }

  const formhandler=(e)=>{
    setArticledata({ ...articledata, [e.target.name]: e.target.value });

  }

    return(
      <>
      <MyNavbar />
        <div className="form-container">
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>عنوان مقاله </Form.Label>
    <Form.Control value={articledata.title}
   name="title"
     onChange={formhandler} type="type" placeholder="عنوان مقاله را وارد کنید" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>توضیح کوتاه</Form.Label>
    <Form.Control value={articledata.description}  name="description" onChange={formhandler} type="type" placeholder="یه توضیح کوتاه در مورد مقاله بنویسید" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>نویسنده مقاله</Form.Label>
    <Form.Control value={articledata.writter}  name="writter" onChange={formhandler} type="type" placeholder="نام نویسنده را وارد کنید" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>موضوع مقاله</Form.Label>
    <Form.Control value={articledata.category}  name="category" onChange={formhandler} type="type" placeholder="موضوع مقاله را  وارد کنید" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>عکس مقاله</Form.Label>
    <Form.Control value={articledata.image}  name="image" onChange={formhandler} type="type" placeholder="آدرس مقاله وارد کنید" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>مدت زمان خواندن</Form.Label>
    <Form.Control value={articledata.readingtime}  name="readingtime" onChange={formhandler} type="number" placeholder="" />
    </Form.Group>

    <Button onClick={editarticlehandler} variant="primary" type="button">
    ساخت مقاله
    </Button>
    </Form>
       
        </div>
</>
    )
}
export default EditArticle