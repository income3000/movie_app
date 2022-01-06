import React from 'react'
import { useState } from 'react';
export default function SecondP(props) {
    
    
    const [input, setInput] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setQuery(input)
        setInput(" ")
    }
    const handleChange = (e) => {
        console.log(input)
      setInput(e.target.value);
  
    }
    return (
        <div>
            <h1 className='title'>Find A Movie</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor='movieTitle'>Title</label>
            <input
                id="movieTitle"
                type="text"
                value={input}
                onChange={handleChange}
                />
            <input type="submit" value="Find Movie info" />

            </form>
        </div>
    )
}
