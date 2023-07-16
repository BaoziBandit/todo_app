import { useEffect, createRef, useState } from 'react';
import style from './TodoItemEditor.module.css';


const TodoItemEditor = (props) => {
  const [text, setText] = useState(props.text);
  const textRef = createRef();

  useEffect(() => {
    textRef.current.focus();
    textRef.current.select();
  }, []);

  const submitHandler = e => {
    e.preventDefault();
    props.onEdit(text);
  }
  const textChangeHandler = e => {
    setText(e.target.value);
  }
  const blurHandler = () => {
    props.onEdit(text);
    props.onBlur();
  }
  
  return <form onSubmit={submitHandler} className={style.editor}>
    <input type="title" value={text} onChange={textChangeHandler} onBlur={blurHandler} ref={textRef}/>
  </form>;
}

export default TodoItemEditor;