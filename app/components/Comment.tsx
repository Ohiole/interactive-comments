"use client"

import React, { useEffect, useState } from 'react'
import Image from "next/image"
import dataJson from '../data/data.json';
import Reply from './Reply';
import { increaseScore, decreaseScore } from '@/lib/utils';
import { User, Comments, Data } from '@/lib/types';
import NewComment from './NewComment';

const Comment = () => {

  const defaultUser: User = {
    image: { png: '', webp: '' },
    username: 'Guest',
  };


  const [data, setData] = useState<Data | null>(null);

  const [comments, setComments] = useState<Comments[] | null>(null)

  const [currentUser, setCurrentUser] = useState<User | null>(defaultUser)

  const [isReplying, setIsReplying] = useState<number | null>(null)

  useEffect(() => {
    setData(dataJson as Data);

    if (data) {
      setComments(data.comments)
      setCurrentUser(data.currentUser)
    }
  }, [data]);


  const handleIncreaseScore = (id: number) => {
    setComments((prevComments) => {
      // Ensure prevComments is an array of comments
      if (!prevComments) return null;

      // Call increaseScore with an array of comments
      return increaseScore(prevComments, id) as Comments[] | null;
    });
  };


  const handleDecreaseScore = (id: number) => {
    setComments((prevComments) => {
      // Ensure prevComments is an array of comments
      if (!prevComments) return null;

      // Call increaseScore with an array of comments
      return decreaseScore(prevComments, id) as Comments[] | null;
    });
  };

  const showReply = (commentId: number ) => {
    
    setIsReplying((prev) => (prev === commentId ? null : commentId))
  }

  return (
    <div className="flex flex-col gap-3 items-center mt-6">
      {
        comments && comments.map((comment) => {
          return (
            <React.Fragment key={comment.id} >
              <div className='flex flex-col gap-2 overflow-hidden'>
                <section className='bg-white p-4 rounded-md flex items-start gap-4 w-[600px]'>
                  <div className="flex flex-col p-2 items-center gap-2 bg-purple-100 rounded-md">
                    <div className="group"
                      onClick={() => handleIncreaseScore(comment.id)}
                    >
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

                    <span className='text-purple font-semibold'>{comment.score}</span>

                    {/* <Image src="/images/icon-minus.svg" alt='plus sign' width={12} height={12} className='num-comments'/> */}

                    <div className="group"
                      onClick={() => handleDecreaseScore(comment.id)}
                    >
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
                        <Image src={comment.user.image.png} alt="User Avatar" width={32} height={32} className='rounded-full cursor-pointer' />

                        <span className="font-semibold text-sm text-gray-500">{comment.user.username}</span>

                        <span className="text-sm text-gray-400">{comment.createdAt}</span>
                      </div>

                      <div className='group flex items-center gap-2' onClick={() => showReply(comment.id)}>
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
                    </div>
                    <div className='my-3 text-[14px] text-gray-400'>
                      <p>
                        {comment.content}
                      </p>
                    </div>
                  </div>
                </section>
                <NewComment text='reply' commentId={comment.id} isReplyId={isReplying}/>
              </div>
              {
                comment.replies.length > 0 ?
                  <div className="flex w-full gap-4 justify-end items-center">
                    <div className="w-[1px] h-full border-[1px] bg-gray-300"></div>
                    <div className='flex flex-col gap-2'>
                      {
                        comment.replies.map((reply) => {
                          return (
                            <Reply
                              key={reply.id}
                              id={reply.id}
                              currentUser={currentUser || defaultUser}
                              commentReplies={comment.replies}
                            />
                          )
                        })
                      }
                    </div>
                  </div> : ""
              }       
            </React.Fragment>

          )
        })
      }
    </div>
  )
}

export default Comment