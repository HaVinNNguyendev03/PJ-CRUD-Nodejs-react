import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import './main.css'
const UserIcon = () =>{
  const [img,setImg] = useState('')
  useEffect(() => {
    axios.get('http://localhost:9000/User',
      {withCredentials: true}
    )
  .then(res => {
    console.log(res);
    if(res.data.Status === 'Success') {
      setImg(res.data.img)
    } 
   })
  },[])
  return(
    <div className="w-25 height-50 d-flex justify-content-around ">
      <img className="width img-fluid rounded-circle" src ={`http://localhost:9000/images/`+img} alt="" />
    </div>
  )
}
export default UserIcon;