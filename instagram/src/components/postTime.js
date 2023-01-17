import React, { useState, useEffect } from 'react'
import { memo } from "react";
import moment from 'moment';


const CTime=()=>{
  //const time = null;

  let momentPost =  moment(new Date()).from(new Date());
  const [ctime,setDate] = useState(momentPost); 

  useEffect(()=>{
   // let time = new Date().toLocaleTimeString();
    setDate(ctime);
  },[])

  return(
    <>
      <span>{ctime}</span>
    </>

  )

}

export default memo(CTime);