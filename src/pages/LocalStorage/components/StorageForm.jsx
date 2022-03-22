import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import './StorageForm.css';

function StorageForm(){
    const [emailInput, setEmailInput] = useState('');
    const [pwordlInput, setPwordInput] = useState('');

    const {setItem1, clear} = useLocalStorage('E-mail', '');

    const {setItem2 } = useLocalStorage('Password', '');

    function handleEmailInput(e){
        setEmailInput(e.target.value);
    }

    function handlePwordlInput(e){
        setPwordInput(e.target.value);
    }

    function handleBtnClick(){
        setItem1(emailInput);
        setItem2(pwordlInput);
    }

    function clearStorage(){
        clear();
    }

    return(
        <>
            <h1>Sign In</h1>
    
            <form className='form' >

                <input type='text'  placeholder='E-mail' name='email' className='emailInput' onChange={handleEmailInput} value={emailInput} />
                <input type='password' placeholder='Password' name='password' className='pwordInput' onChange={handlePwordlInput} value={pwordlInput}/>
                <button className='btn'  onClick={handleBtnClick}>Sign In</button>
            </form>
            <button className='btn' onClick={clearStorage}>clear storage</button>
        </>
    )
}

export default StorageForm;