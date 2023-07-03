import axios from "axios";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [data,Setdata] = useState({
    email : '',
    password : '',
    name :'',
    info :'',
    img :''
  })
  const navigate = useNavigate();
  const handleSubmit = (event) =>{
    event.preventDefault();
    const formData = new FormData();
    formData.append("email",data.email);
    formData.append("password",data.password);
    formData.append("name",data.name);
    formData.append("info",data.info);
    formData.append("img",data.img)
    axios.post('http://localhost:9000/Create',formData)
    .then(res => {
      navigate('/Login')
    })
    .catch(err => console.log(err))
  }
  return(
    <Form onSubmit={handleSubmit} enctype="multipart/form-data"  className="w-50 m-auto">
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="email" placeholder="Enter email" 
        onChange={e => Setdata({...data,email : e.target.value})}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  type="password" placeholder="Password" 
        onChange={e => Setdata({...data,password : e.target.value})}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tên</Form.Label>
        <Form.Control  type="text" placeholder="Enter name" 
        onChange={e => Setdata({...data,name : e.target.value})}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Thông Tin Mô Tả</Form.Label>
        <Form.Control  type="text" placeholder="Enter info" 
        onChange={e => Setdata({...data,info : e.target.value})}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ảnh Đại Diện</Form.Label>
        <Form.Control  type="file" name = 'image'
        onChange={e => Setdata({...data,img : e.target.files[0]})}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
export default Register;