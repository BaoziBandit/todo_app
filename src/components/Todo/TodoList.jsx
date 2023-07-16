import style from "./TodoList.module.css";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <>
      <ul className={style["todo-list"]}>
        {props.items.map((item, index) => {
          return (
            <TodoItem
              key={index}
              item={item}
              isEven={index % 2 === 0}
              onComplete={props.onComplete}
              onDelete={props.onDelete}
              onEdit={props.onEdit}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
