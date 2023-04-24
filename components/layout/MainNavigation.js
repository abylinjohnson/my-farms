// @ts-nocheck
import classes from './MainNavigation.module.css';
import Link from 'next/link'
import {useRouter} from 'next/router'
import React, { useState, useEffect } from "react";
function MainNavigation() {
  const [token, setToken] = useState();
  const router = useRouter();
  const logoutHandler = () =>{
    localStorage.removeItem("jwt");
    window.location.reload(false);
  }
  useEffect(() => {
    setToken(localStorage.getItem("jwt"));
  }, []);
  return (
    <header className={classes.header}>
      <Link href='/'>My Farms</Link>
      <nav>
        <ul>
          <li>
            <Link href='/blog'>Blog</Link>
          </li>
          <li>
            <Link href='/shop'>Shop</Link>
          </li>
          <li>
            {token?<div onClick={logoutHandler}>Logout</div>:<Link href="/login">Login</Link>}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
