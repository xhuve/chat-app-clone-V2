import React from 'react'
import { IoMdSearch } from "react-icons/io";

function SearchInput() {
    return (
        <>
            <form className='flex items-center gap-1'>
                <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
                <button type='submit' className='btn btn-circle'>
                    <IoMdSearch className='w-5 h-5'/>
                </button>
            </form>
        </>
    )
}

export default SearchInput