import React from 'react'
import { Outlet } from "react-router-dom"
import NavBar from './NavBar'

export default function RootLayout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='h-20'>
        <NavBar/>
      </div>
      <main className='flex-grow'>
        <Outlet />
      </main>
      <div className='h-20 flex-shrink-0 pt-16'>
        Footer
      </div>
    </div>
  )
}
