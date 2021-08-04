import React, { useState } from 'react';
import SearchBar from './SearchBar';
import api from './Api';
import Images from "./Images";


function App() {
  
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term) => {
    
    const response = await api.get('/search/photos', {
      params: { 
        query: term,
        orientation:"squarish"
      }
    });
  
    setImages(response.data.results)
  
  }

  return (
    <div>
      <h1> Image Search Gallery </h1>
      <div className="info"><em>Created by <a href="https://github.com/se-prashant" target="_blank"> se-prashant</a>. Powered by <strong>Unsplash</strong></em></div>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <Images images={images} />
    </div>
  );

}

export default App;