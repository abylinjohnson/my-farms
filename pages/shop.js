//@ts-nocheck
import React, { useState, useEffect } from "react";
import PCard from "../components/ui/PCard";
import classes from "./shop.module.css";
import Link from 'next/link';
const shop = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("/api/shop")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  if (data) {
    return (
      <>
      <div style={{backgroundColor : "#1C6758", width: "90px", padding:"5px", color: "white",borderRadius: "5px"}}>
      <Link href="/add-item" className={classes.additem}>Sell Item</Link>
      </div>
        <div className={classes.gridcontainer}>
          {data.data.map((item) => {
            console.log(item._id)
            return (
              <div className={classes.griditem}>
                <PCard key={item._id}  props={item} />
              </div>
            );
          })}
        </div>
      </>
    );
  }
};

export default shop;
