import React, { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';

const LoaderS = () => {

 const [ loadText, setLoadText ] = useState('Loading');
 
 

 useEffect(() => {
    
    let interval = setInterval(() => {
    
       setLoadText((prev) => prev + '.')
        
       if(loadText == 'Loading...'){
        setLoadText('Loading');
       }
       
       
        
    }, 621)
 
    return () => clearInterval(interval);
 
 }, [loadText]);


 return (
   <>
    <div className='flex flex-col items-center' >
    <Circles width="30px" height="30px" ariaLabel='Loading...'/>
    <p>{
        loadText
    }</p>
    </div>
    
   </>
  )
}


export default LoaderS;