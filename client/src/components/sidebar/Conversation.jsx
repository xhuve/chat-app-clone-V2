import React from 'react'

function Conversation({ convo, lastIdx }) {

    return (
      <>
        <div className='flex gap-2 items-center hover:bg-cyan-400 py-2 px-2 cursor-pointer'>
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src={convo.profilePic} />
            </div>
          </div>

          <div className='flex flex-col flex-1'>
              <p className='font-bold'>{convo.fullname}</p>
          </div>
        </div>

        {!lastIdx ? <div className='divider my-0 py-0 h-1' /> : null}
      </>
    )
}

export default Conversation