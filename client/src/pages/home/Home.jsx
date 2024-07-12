import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import MessageContainer from '../../components/messages/MessageContainer.jsx'

function Home() {
  return (
    <div className='flex bg-white w-3/5 h-4/5 min-w-fit rounded-lg bg-opacity-30 py-2 gap-2'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home