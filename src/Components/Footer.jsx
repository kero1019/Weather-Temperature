import React from 'react'

export default function Footer({lastUpdate}) {
  return (
    <div className='text-center font-bold bg-white text-[1.5rem] rounded-b-lg flex-wrap'>
        <p className='w-fill h-1 bg-gray block'></p>
        <p>Last Update at {lastUpdate} </p>
    </div>
  )
}
