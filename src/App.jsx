import style from './App.module.css'
import { Cross } from './assets/Icons';

import { useState } from 'react';

import Header from './components/Header/Header';
import TodoList from './components/Todo/TodoList';
import TodoForm from './components/Todo/TodoForm';
import Container from './components/UI/Container';
import data from './assets/list-data.json';
import Divider from './components/UI/Divider';


const App = () => {
  const [todoList, setTodoList] = useState(data.items);
  const [listTitle, setListTitle] = useState(data.title);
  const [addingItem, setAddingItem] = useState(false);

  const toggleAddHandler = () => {
    setAddingItem(prev => !prev);
  };

  const titleChangeHandler = title => {
    setListTitle(title);
  }
  
  const addItem = (item) => {
    const newItem = {
      ...item,
      id:('item_' + (Math.random() * 1000000000).toFixed(0))
    };
    setTodoList(prev => ([
      ...prev, 
      newItem
    ]));
    setAddingItem(false);
  }
  const completeItem = (id) => {
    setTodoList(prev => {
      const newList = [];
      for( var i of prev){
        if(i.id === id){
          newList.push({...i, completed:!i.completed});
        } else {
          newList.push({...i});
        }
      }
      return newList;
    });
  }
  const deleteItem = (id) => {
    setTodoList(prev => prev.filter(item => item.id !== id));
  }
  const editItem = (id, text) => {
    setTodoList(prev => {
      const newList = [];
      for( var i of prev){
        if(i.id === id){
          newList.push({...i, title: text});
        } else {
          newList.push({...i});
        }
      }
      return newList;
    });
  } 

  return (
    <Container>
      <Header label={listTitle} onAdd={addItem} onTitleChange={titleChangeHandler}/>
      <TodoList items={todoList} onComplete={completeItem} onDelete={deleteItem} onEdit={editItem}/>
      <Divider/>
      <div className={style.add}>
        <Cross className={`${addingItem ? style.cross : style.plus}`} onClick={toggleAddHandler}/>
      </div>
      {addingItem && <TodoForm isVisible={addingItem} onAdd={addItem}/>}
    </Container>
  )
}

export default App
