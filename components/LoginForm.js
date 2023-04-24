// @ts-nocheck
import { useRef } from 'react';
import Link from 'next/link';
import Card from './ui/Card';
import classes from './Login.module.css';

function LoginForm(props) {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;
    
    const loginData = {
      username: username,
      password: password,
    };

    props.onLogin(loginData);
  }

  return (
    <>
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Username</label>
          <input type='text' required id='title' ref={usernameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Password</label>
          <input type='password' required id='image' ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Login</button>
        </div>
      </form>
    </Card>
    <br/>
    <Link href="register">Register</Link>
    </>
  );
}

export default LoginForm;
