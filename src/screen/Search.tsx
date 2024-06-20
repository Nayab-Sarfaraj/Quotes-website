import { log } from 'console';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [author, setAuthor] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(author);

        author && navigate(`/quotes/${author}`)

    }
    return (
        <form className='text-center mt-10' onSubmit={(e) => handleSubmit(e)}>
            <input type="text" className='border-none outline-none text-md w-80 rounded-md py-2 px-3' placeholder='Author name' value={author} onChange={(e) => setAuthor(e.target.value)} />
        </form>
    )
}

export default Search