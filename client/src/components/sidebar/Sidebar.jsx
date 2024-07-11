import React from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'

function Sidebar() {
    return (
        <div className='flex-col'>
            <SearchInput />
            <div className='divider px-2 my-4' />
            <Conversations />
            {/* <LogoutButton /> */}
        </div>
      )
}

export default Sidebar