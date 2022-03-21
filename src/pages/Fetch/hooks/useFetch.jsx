import { useEffect, useState } from "react";

export default function useFetch(url){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

       fetch(url).then((res)=>{ 
           return res.json();
       }).then((res)=>{
        console.log(res)
            setLoading(false);
            setData(res);
       }).catch (err=>{
            setLoading(false);
            setError(err.message);
       }) 
        
    },[url]);

    return {data, loading, error};
}