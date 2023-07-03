import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
 const Home = () =>{
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
      <p>Well Come Home {Id}</p>
      <Link to="/Login">Login</Link>
    </div>
  )
 }
export default Home;