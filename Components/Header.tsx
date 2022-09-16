import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <div className='flex justify-evenly pt-6'>
        <div className=' cursor-pointer'>
            <Link href="/"><img src="/home.png" alt="" /></Link>
        </div>
        <div className=' cursor-pointer'>
        <Link href="/"><img src="/disney.svg" alt="" /></Link>
        </div>
        <div className=' cursor-pointer'>
        <Link href="/Favourites"><img src="/heart.png" alt="" /></Link>
        </div>
    </div>
  )
}

export default Header