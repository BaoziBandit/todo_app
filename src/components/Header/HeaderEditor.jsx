import style from './HeaderEditor.module.css';
import {useEffect, createRef} from 'react';


const HeaderEditor = props => {
  const inputRef = createRef();

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.select();
  }, []);

  const blurHandler = () => {
    props.onTitleUpdate(inputRef.current.value);
    props.onBlur();
  }
  const submitHandler = e => {
    e.preventDefault();
    props.onTitleUpdate(inputRef.current.value);
    props.onBlur();
  }

  return <form className={style.editor} onSubmit={submitHandler}>
      <input type='text' defaultValue={props.text} ref={inputRef} onBlur={blurHandler}/>
    </form>
}

export default HeaderEditor;