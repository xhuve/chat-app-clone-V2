import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="https://avatar.iran.liara.run/public/boy?username=test" alt="user image" />
            </div>
        </div>
        <div className='chat-bubble text-white bg-blue-500'>Hello! What is up?</div>
        <div className=''></div>
    </div>
  )
}

export default Message