import { UserButton } from '@clerk/nextjs';
import React from 'react'

const HomePage = () => {
  return (
    <div>
      HomePage
      <div>
        <UserButton afterSwitchSessionUrl='/' afterSignOutUrl='/'></UserButton>
      </div>
    </div>
  )
}

export default HomePage;