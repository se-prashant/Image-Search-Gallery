import React from 'react';
import ImageCard from './ImageCard';
function Images({images}){
  
    return(
        <div className="imageCard">
        {images.map((img)=>(
            <ImageCard key={images.id} image={img}/>
        ))}
        </div>
    )
    
}

export default Images;