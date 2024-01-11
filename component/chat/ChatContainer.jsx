import React from 'react'
import Sidebar from './Sidebar'

function ChatContainer() {
  return (
    <div>
      <Sidebar/>
      <ChatContainer/>
    </div>
  )
}

export default ChatContainer