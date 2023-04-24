// @ts-nocheck
import LoginForm from "../components/LoginForm";
import { useRouter } from "next/router";
import {Link} from "next/router";
import React, {useState, useEffect} from 'react';
const LoginPage = () => {
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(localStorage.getItem("jwt"));
  }, []);

  const router = useRouter();
  async function loginHandler(enteredRegisterData) {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(enteredRegisterData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.status === 200) {
      alert(data.token);
      localStorage.setItem("jwt", data.token);
      router.push("/");
      window.location.reload(false);
    } else {
      alert(data.error);
    }
  }
  if(!token){
    return <><LoginForm onLogin={loginHandler} /></>;
  }else{
    router.push("/");
    return <h1>Logged IN</h1>
  }
  
};

export default LoginPage;
