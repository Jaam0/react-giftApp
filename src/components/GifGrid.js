// import React, { useState,useEffect } from 'react'
import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ( {category} ) => {

  const {data:images, loading} = useFetchGifs(category);
 

  return (
    <>
      <h3 className='animate__bounceIn'> {category} </h3>
      { loading && <p className='animate__fadeInBottomRight'>Loading...</p> }
      <div className='card-grid'>
        {
            images.map( img => (
                  <GifGridItem 
                    key={img.id}  
                    { ...img }  
                  />  
            ) )
        }
    </div>
    </>
    
  )
}

export default GifGrid