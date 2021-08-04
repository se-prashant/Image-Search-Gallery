import React, { useState } from 'react';

function ImageCard({ image }) {
    const { urls, description } = image;
    return (
        <div>
            <a href ={urls.full} target="_blank">
            <img src={urls.regular}  alt={description}></img>
            </a>
        </div>
    )
}

export default ImageCard;