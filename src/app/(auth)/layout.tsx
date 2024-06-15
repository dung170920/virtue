import React from 'react'

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='h-screen w-screen overflow-hidden relative flex flex-col'>
      {children}
      <div className='absolute top-1/2 w-[2398px] h-[2398px] bg-secondary opacity-5 rounded-full' />
    </div>
  )
}

export default AuthLayout