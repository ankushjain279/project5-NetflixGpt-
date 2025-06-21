import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className='px-16'>

    <h1 className='font-bold text-3xl'>{title}</h1>
    <p className='py-2 w-1/3'>{overview}</p>
    
    <div>
        <button className='border-1 rounded-lg px-4 py-2 bg-gray-500/40'>➤ Play</button>
        <button className='border-1 rounded-lg px-4 py-2 mx-2 bg-gray-500/40'>More Info</button>
    </div>

    </div>
  )
}

export default VideoTitle