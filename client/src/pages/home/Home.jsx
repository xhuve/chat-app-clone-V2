import Sidebar from '../../components/sidebar/Sidebar.jsx'
import MessageContainer from '../../components/messages/MessageContainer.jsx'
import { useEffect, useState } from 'react'
import useConversation from '../../zustand/useConversation.js'

function Home() {
  const { selectedConvo, setSelectedConvo } = useConversation()
  const [isMobile, setMobile] = useState(window.innerWidth <= 768)
  
  useEffect(() => {
    return () => setSelectedConvo(null);
  }, [setSelectedConvo]);
  
  useEffect(() => {
    console.log("🚀 ~ Home ~ isMobile:", isMobile)
    const handleResize = () => {
      setMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='flex bg-white w-full md:w-3/5 h-full md:h-4/5 min-w-fit rounded-lg bg-opacity-30 py-2 gap-2'>
      {!isMobile &&
        <>
          <Sidebar />
          <MessageContainer />
        </>
      }
      {isMobile && selectedConvo == null &&
        <Sidebar />
      }
      {isMobile && selectedConvo != null &&
        <MessageContainer mobile={isMobile}/>
      }
    </div>
  )
}

export default Home