import React from 'react'
import Image from "next/image"

interface NewCommentProps {
  text: string; // You can add more props if needed
  commentId?: number;
  isReplyId?: number | null;
  replyToReply?: boolean;
}

const NewComment: React.FC<NewCommentProps> = ({ text, commentId, isReplyId, replyToReply }) => {
  return (
    text === "reply" ?
      <section className={`bg-white p-4 rounded-md ${commentId === isReplyId ? 'scale-100 opacity-100' : 'scale-0 opacity-0 absolute'} flex justify-between items-start gap-4 ${ replyToReply ? 'w-[550px]' : 'w-[600px]' } mb-2 transition duration-200`}>
        <Image src="/images/avatars/image-juliusomo.png" alt='User avatar' width={30} height={30} className="rounded-full" />

        <textarea
          name="new-comment"
          placeholder='Add a comment...'
          className='w-3/4 rounded-md px-4 py-2 border-gray-200 border-solid border-[1px] outline-purple-300 transition duration-200 h-[100px] text-sm  text-gray-400'>
        </textarea>

        <button className='py-2 px-4 bg-purple cursor-pointer text-sm text-background rounded-md hover:bg-purple-300 transition duration-200'>REPLY</button>
      </section> :
      <section className={`bg-white p-4 rounded-md flex justify-between items-start gap-4 w-[600px] mb-2 transition duration-200`}>
        <Image src="/images/avatars/image-juliusomo.png" alt='User avatar' width={30} height={30} className="rounded-full" />

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