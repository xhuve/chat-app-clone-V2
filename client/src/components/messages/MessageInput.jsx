import React from 'react'
import { useState } from 'react'
import { BsSend } from "react-icons/bs";
import useSendMessage from '../hooks/useSendMessage';

const MessageInput = () => {
    const [message, setMessage] = useState("")
    const { loading, sendMessage } = useSendMessage()

    const handleSubmit = async (e) => {
      e.preventDefault()

      if(!message) return;
      await sendMessage(message)
      setMessage("")
    }

    return (
      <form onSubmit={handleSubmit}>
        <div className='my-2 mx-2'>
            <div className='w-full relative'>
                <input onChange={(e) => setMessage(e.target.value)} type="text" placeholder='Send a message...' className='py-2 px-2 border rounded-lg text-sm block w-full bg-gray-700 border-gray-600 text-white' />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                    {loading ? 
                    <span className='ml-2 loading loading-spinner'></span>
                    : <BsSend color='white' />}
                </button>
            </div>
        </div>
      </form>
    )
}

export default MessageInput