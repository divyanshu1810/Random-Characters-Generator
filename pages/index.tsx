import type { NextPage } from 'next'
const Home: NextPage = ({imageUrl,url,name}:any) => {
  const i = url.lastIndexOf('/')
  const id=url.substring(i+1);
  return (
      <div className='flex space-y-8 md:space-y-0 md:flex-row h-screen flex-col md:justify-evenly justify-center flex-wrap items-center -mt-20'>
        <img className=' rounded-xl' src={imageUrl} alt="" width="200" />
        <div className=' space-y-4 myfont text-center'>
          <div>Name : {name}</div>
          <div>Disney Id : {id}</div>
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
