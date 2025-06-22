import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className='px-16 absolute top-0 left-0 h-full w-full bg-gradient-to-r from-black/80 to-transparent '>
      <div className='mt-28'>
        <h1 className='font-bold text-4xl text-white/80 drop-shadow-lg '>{title}</h1>
        <p className='py-4 w-1/3 text-gray-200 text-lg leading-relaxed'>{overview}</p>

        <div className='flex space-x-4'>
          <button className='bg-red-600 text-white rounded-lg px-6 py-2 hover:bg-red-700 transition duration-200 cursor-pointer'>➤ Play</button>
          <button className='bg-gray-700 text-white rounded-lg px-6 py-2 hover:bg-gray-800 transition duration-200 cursor-pointer'>More Info</button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle