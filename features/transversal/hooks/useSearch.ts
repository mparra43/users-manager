import { useState } from 'react';


export const useSearch = ( ) => {
    
    const [value, setValues] = useState<string>('');

    const reset = () => {
        setValues('');
    }


    const handleFilterChange  = (event: React.ChangeEvent<HTMLInputElement>)  => {
        const value = event.target.value;
         setValues(value)
     }
          

    return {value, reset, handleFilterChange};

}