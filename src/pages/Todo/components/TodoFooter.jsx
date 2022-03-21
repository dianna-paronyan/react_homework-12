import { MyContext } from '../TodoApp';
import { useContext } from 'react';
import './TodoFooter.css';

function TodoFooter(){

    const context = useContext(MyContext);

    const lengthOfComleted = context.todos.filter((todo)=> todo.isCompleted).length;

    return(
        <div className='content'>
            <span style={{textAlign: 'center', color:'#fff'}}>{lengthOfComleted}/{context.todos.length} completed</span>

        </div>
    )
}

export default TodoFooter;