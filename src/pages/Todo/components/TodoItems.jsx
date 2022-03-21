import { MyContext } from '../TodoApp';
import { useContext } from 'react';
import './TodoItems.css';

function TodoItems({todo}){

    const context = useContext(MyContext);

    return(
        <div className='item'>
            <div className='box'>
                <div>
                    <input  type='checkbox' checked={todo.isCompleted} onChange={(e)=> context.onChange({...todo, isCompleted:e.target.checked})}/>
                    <span className={todo.isCompleted ? 'strike' : ''}>{todo.text}</span>
                </div>
                <button className='btnDelete'   onClick={()=>context.onDelete(todo)}>x</button>
            </div>
        </div>
    )
}

export default TodoItems;