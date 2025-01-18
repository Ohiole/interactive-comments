import React from 'react'
import Image from "next/image"


interface User {
  image: { png: string; webp: string };
  username: string;
}

interface ReplyProps {
  currentUser?: User;
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replyingTo?: string,
  replies: ReplyProps[];
}

const Reply: React.FC<ReplyProps> = ({ currentUser, content, createdAt, score, user, replyingTo }) => {
  return (
    <section className='bg-white p-4 rounded-md flex items-start gap-4 w-[550px]'>
      <div className="flex flex-col p-2 items-center gap-2 bg-purple-100 rounded-md">
        <div className="group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            className="num-comments"
            viewBox="0 0 12 12"
          >
            <path
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
            />
          </svg>
        </div>

        <span className='text-purple font-semibold'>{score}</span>

        <div className="group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            className="num-comments"
            viewBox="0 0 12 12"
          >
            <path
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
            />
          </svg>
        </div>
      </div>
      <div className='w-full'>
        <div className='flex justify-between items-center'>
          <div className='flex justify-center items-center gap-3'>
            <Image src={user.image.png} alt="User Avatar" width={32} height={32} className='rounded-full cursor-pointer' />

            <span className="font-semibold text-sm text-gray-500">{user.username}</span>

            {
              user.username == currentUser?.username ?
                <p className='px-1 text-white bg-purple text-sm rounded-sm'>you</p> : ""
            }

            <span className="text-sm text-gray-400">{createdAt}</span>
          </div>

          {
            user.username == currentUser?.username ?
              <div className='flex items-center gap-3'>
                <div className='group flex items-center gap-2'>
                  <svg
                    width="12"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                    className='delete'
                  >
                    <path
                      d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                    />
                  </svg>
                  <span className='font-medium text-sm text-red group-hover:text-red-100 cursor-pointer transition duration-300'>Delete</span>
                </div>
                <div className='group flex items-center gap-2'>
                  <svg
                    width="14"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                    className='reply'
                  >
                    <path
                      d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                    />
                  </svg>
                  <span className='font-medium text-sm text-purple group-hover:text-[#C5C6EF] cursor-pointer transition duration-300'>Edit</span>
                </div>
              </div> :
              <div className='group flex items-center gap-2'>
                <svg
                  width="14"
                  height="13"
                  xmlns="http://www.w3.org/2000/svg"
                  className='reply'
                >
                  <path
                    d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                  />
                </svg>
                <span className='font-medium text-sm text-purple group-hover:text-[#C5C6EF] cursor-pointer transition duration-300'>Reply</span>
              </div>
          }

        </div>
        <div className='my-3 text-[14px] text-gray-400'>
          <p>
            <span className='font-bold text-purple'>@{replyingTo}</span> {content}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Reply