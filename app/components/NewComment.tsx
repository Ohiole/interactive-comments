import React from 'react'
import Image from "next/image"

const NewComment = () => {
  return (
    <section className='bg-white p-4 rounded-md flex justify-between items-start gap-4 w-[600px]'>
        <Image src="/images/avatars/image-juliusomo.png" alt='User avatar' width={40} height={42} className="rounded-full" />

        <textarea 
            name="new-comment" 
            placeholder='Add a comment...' 
            className='w-3/4 rounded-md px-4 py-2 border-gray-200 border-solid border-[1px] outline-purple-300 transition duration-200 h-[100px] text-sm  text-gray-400'>
        </textarea>

        <button className='py-2 px-4 bg-purple cursor-pointer text-sm text-background rounded-md hover:bg-purple-300 transition duration-200'>SEND</button>
    </section>
  )
}

export default NewComment