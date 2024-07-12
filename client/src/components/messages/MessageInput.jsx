import React from 'react'
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <div className='my-2 mx-2'>
        <div className='w-full relative'>
            <input type="text" placeholder='Send a message...' className='py-2 border rounded-lg text-sm block w-full bg-gray-700 border-gray-600 text-white' />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                <BsSend color='white' />
            </button>
        </div>
    </div>
  )
}

export default MessageInput