

import { Image } from 'next/image'
export default function Home() {
  return (
    <div className='flex flex-col  '>
       <div className='flex items-center justify-evenly my-4 position-fixed '>
      <a href="/signin" className='border-2 border-white rounded-3xl px-12 py-2 inline-block font-semibold text-white bg-green-500'>Sign In</a>
      <a href="/signup" className='border-2 border-white rounded-3xl px-12 py-2 inline-block font-semibold text-white bg-green-500'>Sign Up</a>
      </div>
      <img src="https://www.freecodecamp.org/news/content/images/2020/05/leetcode-hero.png" alt="" />
     
    </div>
    )
}
