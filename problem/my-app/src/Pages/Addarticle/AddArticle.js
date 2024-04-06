import MyNavbar from "../../Components/navbar/MyNavbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddArticle.css'
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function AddArticle(){
    
     const [formData,setFormData]=useState({})
     const resetFormData=()=>{
      setFormData({
            title : '',
            description: '',
            image : '',
            writter : '',
            category : '',
            readingTime : ''
        })
     }
     const formhandler = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }

      const addarticlehandler=()=>{
            axios.post('http://localhost/react/api/articles/',formData)
            .then(response=>{
                  if(response.status===200){
                        Swal.fire({
                              title:'مقاله جدید با موفقیت ساخته شد',
                              timer:1000,
                              timerprogressbar:true
                        })
                  }
                  
            })
            .catch(error=>{
                  Swal.fire({
                        title:'مقاله جدید با موفقیت ساخته نشد',
                        timer:1000,
                        timerprogressbar:true
                  })
            })
            
                
               
          
            resetFormData()

      }
     
    return(
    <>
          <MyNavbar />
            <div className="form-container">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>عنوان مقاله </Form.Label>
        <Form.Control value={formData.title}
       name="title"
         onChange={formhandler} type="type" placeholder="عنوان مقاله را وارد کنید" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>توضیح کوتاه</Form.Label>
        <Form.Control value={formData.description}  name="description" onChange={formhandler} type="type" placeholder="یه توضیح کوتاه در مورد مقاله بنویسید" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>نویسنده مقاله</Form.Label>
        <Form.Control value={formData.writter}  name="writter" onChange={formhandler} type="type" placeholder="نام نویسنده را وارد کنید" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>موضوع مقاله</Form.Label>
        <Form.Control value={formData.category}  name="category" onChange={formhandler} type="type" placeholder="موضوع مقاله را  وارد کنید" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>عکس مقاله</Form.Label>
        <Form.Control value={formData.image}  name="image" onChange={formhandler} type="type" placeholder="آدرس مقاله وارد کنید" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>مدت زمان خواندن</Form.Label>
        <Form.Control value={formData.readingtime}  name="readingTime" onChange={formhandler} type="number" placeholder="" />
        </Form.Group>

        <Button onClick={addarticlehandler} variant="primary" type="button">
        ساخت مقاله
        </Button>
        </Form>
           
            </div>
    </>
      )
}
export default AddArticle