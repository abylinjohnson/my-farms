//@ts-nocheck
import React, { useState, useEffect } from "react";
import BCard from "../components/ui/BCard";
import classes from "./shop.module.css";
import Link from "next/link";
const Blog = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  if (data) {
    console.log(data);
    return (
      <>
        <div
          style={{
            backgroundColor: "#1C6758",
            width: "90px",
            padding: "5px",
            color: "white",
            borderRadius: "5px",
          }}
        >
          <Link href="/new-blog" className={classes.additem}>
            New Blog
          </Link>
        </div>
        <div>
        {data.data.map((blog) => {
          return <div style={{padding: "15px"}}><BCard data={blog} /></div>;
        })}
        </div>
        
      </>
    );
  }
};

export default Blog;
