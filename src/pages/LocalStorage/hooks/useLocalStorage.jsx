import {useState} from 'react';


function useLocalStorage(key, initValue){
    const [data, setData] = useState();
    
    function getItem(key, initValue){
           
        let savedValue = localStorage.getItem(key);
        if(savedValue){
            return savedValue;
        }
        
        return initValue;
    }

    const setItem1 = (value)=>{
        setData(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    const setItem2 = (value)=>{
        setData(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    const removeItem = () =>{
        setData(initValue);
        localStorage.removeItem(key);
      }
    
      const clear = ()=> {
        setData(initValue);
        localStorage.clear();
      }

    return {data, getItem, setItem1, setItem2, removeItem, clear};

}

export default useLocalStorage;