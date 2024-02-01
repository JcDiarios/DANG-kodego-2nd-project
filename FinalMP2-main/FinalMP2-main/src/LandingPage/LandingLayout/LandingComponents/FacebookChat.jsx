"use client"
import { CustomChat, FacebookProvider } from 'react-facebook';

const FacebookChat = () => {
  return (
    <FacebookProvider appId="886578262937544" chatSupport>
        <CustomChat pageId="140534082484292" minimized="true"/>
      </FacebookProvider> 
  )
}

export default FacebookChat
