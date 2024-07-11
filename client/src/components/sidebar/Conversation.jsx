import React from 'react'

function Conversation() {
  return (
    <div className='flex gap-2 items-center hover:bg-cyan-400 py-2 px-2'>
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>

      <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
          <p className='font-bold'>John Doe</p>
          <span className='text-xl'>B</span>
        </div>
      </div>
    </div>
  )
}

export default Conversation