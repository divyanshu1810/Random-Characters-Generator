import React from 'react'

function favourite() {
  return (
    <div className='h-screen'>
      <div className='flex flex-col items-center mt-20 space-y-10'>
        <div className='flex justify-between space-x-56'>
          <img src="/disney.svg" alt="" />
          <div className=' space-y-4 myfont text-center'>
          <div>Name : Divyanshu</div>
          <div>Disney Id : 18</div>
          <div><button className='border-2 bg-blue-900 hover:bg-blue-500 duration-200 rounded-lg p-2 text-xs'>Add to favourites</button></div>
          </div>
        </div>
        <div className='flex justify-between space-x-56'>
          <img src="/disney.svg" alt="" />
          <div className=' space-y-4 myfont text-center'>
          <div>Name : Divyanshu</div>
          <div>Disney Id : 18</div>
          <div><button className='border-2 bg-blue-900 hover:bg-blue-500 duration-200 rounded-lg p-2 text-xs'>Add to favourites</button></div>
          </div>
        </div>
        <div className='flex justify-between space-x-56'>
          <img src="/disney.svg" alt="" />
          <div className=' space-y-4 myfont text-center'>
          <div>Name : Divyanshu</div>
          <div>Disney Id : 18</div>
          <div><button className='border-2 bg-blue-900 hover:bg-blue-500 duration-200 rounded-lg p-2 text-xs'>Add to favourites</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default favourite