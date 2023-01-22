import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import LogOut from './LogOut'
import SignIn from './SignIn'
const style = {
  nav: `bg-[#20273D] h-20 flex justify-between items-center p-4 `,
  heading: `text-white text-3xl hidden sm:block`,
}

const Navbar = () => {
  const [user] = useAuthState(auth)
  return (
    <div className={style.nav}>
      <img
        src='/assets/logo-steambid.png'
        alt='StreamBid Company Logo White'
        width='50px'
        height='50px'
      />
      <h1 className={style.heading}>Chat App</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  )
}

export default Navbar
