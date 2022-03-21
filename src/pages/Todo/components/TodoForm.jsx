import { MyContext } from '../TodoApp';
import { useState, useContext } from 'react';
import './TodoForm.css';

function Form() {

  const [inputValue, setInputValue] = useState('');

  const context = useContext(MyContext);

  return (
    <div className='content'>
        <form onSubmit={(e)=>{
          e.preventDefault();
          context.onAdd(inputValue);
          setInputValue('');
        }}>
          <input placeholder='add todo...' className='inputAdd' type='text' onChange={(e)=> setInputValue(e.target.value)} value={inputValue}/>
          <button className='btnAdd'>Add</button>
        </form>
    </div>
  );
}

export default Form;
