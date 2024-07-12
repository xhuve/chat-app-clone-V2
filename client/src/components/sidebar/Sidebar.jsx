import React from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'
import LogoutButton from './LogoutButton.jsx'

function Sidebar() {
    return (
        <div className='flex flex-col'>
            <SearchInput />
            <div className='divider px-2 my-4' />
            <Conversations />
            <LogoutButton />
        </div>
      )
}

export default Sidebar