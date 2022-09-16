import type { NextPage } from 'next'
import Link from 'next/link';
const Home: NextPage = ({imageUrl,url,name}:any) => {
  const i = url.lastIndexOf('/')
  const id=url.substring(i+1);
  return (
      <div className='flex space-y-8 lg:space-y-0 md:space-y-10 lg:flex-row h-screen flex-col lg:justify-evenly justify-center flex-wrap items-center -mt-10 mb-10 lg:-mt-20' >
        {imageUrl && <img className=' rounded-xl' src={imageUrl} alt="" width="200" />}
        <div className='border-2 rounded-lg p-2 bg-blue-900 hover:bg-blue-500 duration-200 cursor-pointer'><Link href="/">Generate</Link> </div>
        <div className=' space-y-4 myfont text-center'>
          {name && <div className='text-2xl'>Name : {name}</div>}
          {id && <div className='text-2xl'>Disney Id : {id}</div>}
          <div><button className='border-2 bg-blue-900 hover:bg-blue-500 duration-200 rounded-lg p-2 text-xs'>Add to favourites</button></div>
        </div>
      </div>
  )
}

export default Home
export async function getServerSideProps() {
  const res = await fetch('https://api.disneyapi.dev/characters')
  const posts = await res.json()
  const post=posts.data
  const character = (post[Math.floor(Math.random() * 50) + 1])
  return {
    props: {
    //   heading:post.title,
    //   details:post.body
        imageUrl:character.imageUrl,
        url:character.url,
        name:character.name
    },
  }
}
