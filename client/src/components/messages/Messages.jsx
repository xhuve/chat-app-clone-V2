import React from 'react'
import Message from './Message.jsx'
import useGetMessages from '../hooks/useGetMessages.js'

const Messages = () => {
    const { loading, messages } = useGetMessages()
    console.log("🚀 ~ Messages ~ messages:", messages)
    console.log("🚀 ~ Messages ~ loading:", loading)


    return (
      <div className='px-4 flex-1 overflow-auto'>
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
      </div>
)
}

export default Messages