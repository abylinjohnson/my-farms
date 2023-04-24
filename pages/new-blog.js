// @ts-nocheck
import BlogForm from "../components/BlogForm";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
const BlogPage = () => {
const router = useRouter();
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(localStorage.getItem("jwt"));
  }, []);
  
  async function loginHandler(enteredRegisterData) {
    enteredRegisterData['token'] = token;
    console.log(enteredRegisterData);
    const response = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify(enteredRegisterData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (data.status === 200) {
      alert("Item Listed");
      router.push("/");
    } else {
      alert(data.error);
    }
  }

  if (!token) {
    return <h1>unauthorised</h1>;
  } else {
    return <BlogForm onLogin={loginHandler} />;
  }
};

export default BlogPage;
