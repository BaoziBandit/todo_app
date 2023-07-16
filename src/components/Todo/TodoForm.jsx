import style from './TodoForm.module.css';

import { useState, createRef, useEffect } from 'react';

const TodoForm = props => {
  const [itemTitle, setItemTitle] = useState('');
  const inputRef = createRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  const submitHandler = e => {
    e.preventDefault();
    if(itemTitle.trim() !== ''){
      props.onAdd({title: itemTitle});
    }
  };

  const textChangeHandler = e => {
    setItemTitle(e.target.value);
  };

  return <form className={style.form} onSubmit={submitHandler}>
    <input className={style.input} id='title' type="text" placeholder='Enter objective...' onChange={textChangeHandler} ref={inputRef}/>
    <button className={style.button} type='submit'>OK</button>
  </form>;
}

export default TodoForm;