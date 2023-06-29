import LoginCard from '@/components/LoginCard'
import React from 'react'

const Login = () => {
  return (
    <div className='w-screen h-screen bg-gradient-to-r from-primary to-secondary'>
        <div className='flex justify-center items-center h-full'>
            <LoginCard />
        </div>
    </div>
  )
}

export default Login