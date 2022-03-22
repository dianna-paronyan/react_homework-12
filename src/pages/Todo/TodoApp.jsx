import Form from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';
import { useReducer, useEffect } from 'react';
import { createContext } from 'react';
import './TodoApp.css';


const list = [
  {
    id: Math.random(),
    text: 'Learn React hooks',
    isCompleted:false,
  },
  {
    id: Math.random(),
    text: 'Learn React router',
    isCompleted:false,
  },
  {
    id: Math.random(),
    text: 'Learn React custom hooks',
    isCompleted:false,
  }
];

const MyContext = createContext(null);

function reducer(state, action){

  if(action.type === 'add'){
    return [
      ...state,
      {
        id:Math.random(),
        text: action.payload.value,
        isCompleted:false,
      }
    ]
  }
  else if(action.type === 'delete'){

      return state.filter((item)=> action.payload.id !== item.id)
  }
  else if(action.type === 'change'){

      return state.map((todo)=> {
          if(action.payload.id === todo.id){
            return action.payload.newTodo;
          }
          return todo;
        })
  }
 
}



function TodoApp(){

  const [todos, dispatch] = useReducer(reducer, list);


  useEffect(()=>{
    localStorage.setItem('todoItems', JSON.stringify(todos))
  },[todos])
  
  useEffect(()=>{
    if(localStorage.getItem('todoItems')){
      JSON.parse(localStorage.getItem('todoItems')) 
    }
     
  },[todos])

  function onAdd(value){


    dispatch({type: 'add', payload: {value:value}})
  }

  function onDelete(todo){

    dispatch({type:'delete', payload:{id:todo.id}})
  }

  function onChange(newTodo){

    dispatch({type:'change', payload: {newTodo: newTodo,id: newTodo.id}})
  }

  return (
    <div className="app">
        
      <div className='container'>
        <div className='todoBox'>
          <span className='heading'>
            <h3 className='text'>To-Do List</h3>
          </span>
          <MyContext.Provider value={{todos:todos, onAdd: onAdd, onChange:onChange, onDelete:onDelete}}>
            <Form  />
            <TodoList />
            <TodoFooter />
          </MyContext.Provider>  
        </div>
    
      </div>
    
   
    </div>     
          
        )  
}

export default TodoApp;
export {MyContext};
