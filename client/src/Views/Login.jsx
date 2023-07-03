import React, { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Register from "./Register";
// import Cookies from 'js-cookie'

const Login = () =>{
  const [Values,setValues] = useState({
    email:'',
    password:''
  })
 
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  const [Error,setError] = useState('')
 
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('http://localhost:9000/Login',Values)
     .then(res => {
      if(res.data.Status === 'Success') {
          navigate('/');
      } else {
        setError(res.data.Error)
      }
     })
     .catch(err => console.log(err));
  }
  const [Id,setId] = useState('')
  useEffect(() => {
    axios.get('http://localhost:9000/',
      {withCredentials: true}
    )
  .then(res => {
    console.log(res);
    if(res.data.Status === 'Success') {
      setId(res.data.id);
    } 
   })
  },[])
  
  return(
    <div>
      { Id ? 
      <>
         <p>Đã đăng nhập</p>
      </> 
      :
      <Form onSubmit={handleSubmit} className="w-50 m-auto">
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label> {Error && Error}</Form.Label>
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={e => setValues({...Values,email: e.target.value})} type="email" placeholder="Enter email" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={e => setValues({...Values,password: e.target.value})} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button className="btn btn-light" type="submit">
        <Link  to="/Register">Đăng Ký</Link>
      </Button>
    </Form>
      }
    </div>
    
  )
 }
export default Login;