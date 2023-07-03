import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
const Pages = () =>{
  const [Id,setId] = useState('')
  useEffect(() => {
    axios.get('http://localhost:9000/')
  .then(res => {
    if(res.data.Status === 'Success') {
      setId(res.data.id);
    } 
   })
  },[])
  return(
    <div>
      {Id}
    </div>
  )
}
export default Pages;