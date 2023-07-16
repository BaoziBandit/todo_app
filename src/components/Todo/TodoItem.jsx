import style from "./TodoItem.module.css";

import { useState } from "react";

import { CheckBoxActive, CheckBoxOutline, Edit, TrashCan } from "../../assets/Icons";
import TodoItemEditor from './TodoItemEditor';

const TodoItem = (props) => {
  const [isHover, setIsHover] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const deleteHandler = () => {
    props.onDelete(props.item.id);
  };

  const mouseEnterHandler = () => {
    setIsHover(true);
  }
  const mouseOutHandler = () => {
    setIsHover(false);
  }
  const completeHandler = () => {
    props.onComplete(props.item.id);
  }
  const editHandler = () => {
    setIsEditMode(true);
  }
  const textUpdateHandler = text => {
    props.onEdit(props.item.id, text);
    setIsEditMode(false);
  }
  const editBlurHandler = () => {
    setIsEditMode(false);
  }

  return (
    <section className={`${style.item} ${props.isEven && style.even}`} onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseOutHandler} onDoubleClick={editHandler}>
      <span className={style.icon} onClick={completeHandler}>
        {props.item.completed ? <CheckBoxActive /> : <CheckBoxOutline />}
      </span>
      {
        isEditMode ? <TodoItemEditor text={props.item.title} onEdit={textUpdateHandler} onBlur={editBlurHandler}/>
      : <>
        <li>{props.item.completed ? <s>{props.item.title}</s> : props.item.title}</li>
        <span className={`${style.icon} ${style.right} ${style.edit}`} onClick={editHandler}>{isHover && !isEditMode && <Edit/>}</span>
        <span className={`${style.icon} ${style.right} ${style.delete}`} onClick={deleteHandler}>
          {isHover && !isEditMode && <TrashCan/>}
        </span>
      </>
      }
    </section>
  );
};

export default TodoItem;
