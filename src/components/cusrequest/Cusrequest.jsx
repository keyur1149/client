import React, { useEffect, useState } from 'react'

export default function Cusrequest() {
    const [requests,setrequests]=useState();
    const temp=<div>done</div>
    /*
    useEffect(async()=>{
        const temp=<div> done</div>;
        setrequests(temp);
    },[])
    */
    
    useEffect(  ()=>{
        var user=localStorage.getItem("user");
        user=JSON.parse(user);
        const customer_id=user.user_id;
        
        const res= fetch("/customerandproviderlist",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                customer_id
            })
        })
        const y= res.json();
        // setrequests(y);
        // const temp=y.map((element)=>{
        //     console.log(element);
        //     return (<div>{element}</div>)
        // });
        // setrequests(temp);
},[])
  return (
    <div>
        <div>all requests</div>
        <div>{temp}</div>
        {/* <div>{requests}</div> */}
    </div>
  )
}
