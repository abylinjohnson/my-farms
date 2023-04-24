// @ts-nocheck
import { useRef } from 'react';

import Card from './ui/Card';
import classes from './Login.module.css';

function BlogForm(props) {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const username = nameInputRef.current.value;
    const image = imageInputRef.current.value;
    const description = descriptionInputRef.current.value;

    
    const loginData = {
      title: username,
      image: image,
      description: description,
    };

    props.onLogin(loginData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Title</label>
          <input type='text' required id='title' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Image URL</label>
          <input type='text' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea rows="20" type='textarea' required id='description' ref={descriptionInputRef} />
        </div>
        <div className={classes.actions}>
          <button>PUBLISH</button>
        </div>
      </form>
    </Card>
  );
}

export default BlogForm;
