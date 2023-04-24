// @ts-nocheck
import { useRef } from 'react';

import Card from './ui/Card';
import classes from './Login.module.css';

function ItemForm(props) {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const priceInputRef = useRef();
  const sellerInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const username = nameInputRef.current.value;
    const image = imageInputRef.current.value;
    const description = descriptionInputRef.current.value;
    const price = priceInputRef.current.value;
    
    const loginData = {
      name: username,
      image: image,
      description: description,
      price: price,

    };

    props.onLogin(loginData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Name</label>
          <input type='text' required id='title' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Image URL</label>
          <input type='text' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <input type='text' required id='description' ref={descriptionInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='price'>Price</label>
          <input type='text' required id='price' ref={priceInputRef} />
        </div>
        <div className={classes.actions}>
          <button>ADD ITEM</button>
        </div>
      </form>
    </Card>
  );
}

export default ItemForm;
