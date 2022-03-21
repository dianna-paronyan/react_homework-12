import { MyContext } from '../TodoApp';
import { useContext } from 'react';
import TodoItems from './TodoItems';

function TodoList(){

    const context = useContext(MyContext);

    return(
        <>
            {context.todos.map((todo)=>{
                return <TodoItems  key={todo.id} todo={todo} onDelete={context.onDelete} onChange={context.onChange}/>
            })}
        </>
    )
}

export default TodoList;