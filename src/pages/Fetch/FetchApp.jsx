import useFetch from './hooks/useFetch';
import './FetchApp.css';

function FetchApp() {

  const {data, loading, error} = useFetch('https://restcountries.com/v3.1/all');

  return (
    <div className="App">

      {loading && <h1>Loading...</h1>}
      {data && <h1>Countries</h1>}
      <div className='fetchContent'>
          {data && data.map((data,i)=>{

            return(
                
                <div key={i}>
                  <h3>Country: {data.name.common}</h3>
                  <h3>Capital: {data.capital}</h3>
                  <img  src={data.flags.svg}  />
                </div>
                
            )
            })}
      </div>
     
      {error && <h2>{error}</h2>}

    </div>
  )
}

export default FetchApp;
