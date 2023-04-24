//@ts-nocheck
import classes from "./PCard.module.css";
import React, { useState, useEffect } from "react";
function PCard(props) {
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(localStorage.getItem("jwt"));
  }, []);
  const data = props.props;
  console.log(data._id)
  const clickHandle = async (data) =>{
    if(token){
      const item = {
        data: data,
        jwt: token
      }
      const response = await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response)
      if(response.status==201){
        alert("Added To Cart");
      }else{
        alert("Unable to Add")
      }
    } else{
      alert("Login First")
    }

  }
  return <div className={classes.card}>
  <img src={data.img} alt={data.name} style={{width: "100%",height: "130px"}}/>
  <h1>{data.name}</h1>
  <p className={classes.price}>₹ {data.price}</p>
  <p>{data.descrption}</p>
  <p>By: {data.seller}</p>
  <p><button key={data._id} onClick={()=>{clickHandle(data)}}>Add to Cart</button></p>
</div>
}

export default PCard;