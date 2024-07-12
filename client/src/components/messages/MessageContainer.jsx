import React from 'react'
import Messages from './Messages.jsx'
import MessageInput from './MessageInput.jsx'

const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center h-full w-full'>
      <div className='text-xl font-bold text-white'>
          Welcome
      </div>
      <div className='text-2xl font-bold text-white'>
          Select someone to talk to
      </div>
    </div>
  )
}

const MessageContainer = () => {
  return (
    <div className='w-full flex flex-col'>
        {/* Header
        <div className="bg-slate-500 px-4 py-3 mb-2 rounded-lg">
            <span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John Doe</span>
        </div>

        <Messages />
        <MessageInput /> */}
        <NoChatSelected />
    </div>
  )
}



export default MessageContainer