import React from 'react'
import { Spinner } from './ui/spinner';

function Loading() {
  return (
    <div className='h-screen w-full bg-white z-10 flex justify-center items-center'>
         <Spinner size="large" />
    </div>
  )
}

export default Loading;