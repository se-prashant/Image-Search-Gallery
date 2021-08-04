import React, { useState } from 'react';

function SearchBar({onSearchSubmit}) {
    
    const [term,setTerm] = useState("");

    const onFormSubmit = (e)=>{
        e.preventDefault();
        onSearchSubmit(term);
    }
    
    return (
        <div style={{textAlign: 'center'}}>
            <form onSubmit={onFormSubmit}>
                <input className="searchBox" type="text" 
                onChange={(e)=> setTerm(e.target.value)}
                value= {term}
                placeholder="Search Images"/>
            </form>
        </div>
    )
}

export default SearchBar;