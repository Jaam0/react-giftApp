import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddCategory } from './AddCategory';
import GifGrid from './GifGrid';

const GiftExpertApp = (  ) => {


    const [ categories,setCategories ] = useState(['Naruto']);

    // const handleAdd = () => {
    //     // setCategories( ['Naruto',...categories] );
    //     setCategories( c => [...c,'Naruto'] );
    // };

        return (
        <>
            <h2 className='text-center'>Gift Expert App</h2>
            <AddCategory  setCategories={ setCategories }/>
            <hr></hr>

            <ol>
               {
                   categories.map( category => (
                         <GifGrid
                            key={ category }
                            category={ category} 
                         />                          
                    ))
               }
            </ol>
        </>
    );
};

export default GiftExpertApp;