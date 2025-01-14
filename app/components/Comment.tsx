import React from 'react'
import Image from "next/image"

const Comment = () => {
  return (
    <section className='bg-white p-4 rounded-md flex items-start gap-4 w-[600px]'>
        <div className="flex flex-col p-2 items-center gap-2 bg-purple-100 rounded-md">
            {/* <Image src="/images/icon-plus.svg" alt='plus sign' width={12} height={12} className='num-comments'/> */}
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

            <span className='text-purple font-semibold'>2</span>

            {/* <Image src="/images/icon-minus.svg" alt='plus sign' width={12} height={12} className='num-comments'/> */}

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
              <Image src="/images/avatars/image-amyrobson.png" alt="User Avatar" width={32} height={32} className='rounded-full cursor-pointer' />

              <span className="font-semibold text-sm text-gray-500">amyrobson</span>

              <span className="text-sm text-gray-400">1 month ago</span>
            </div>

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
              <span className='font-medium text-base text-purple hover:text-[#C5C6EF] cursor-pointer transition duration-300'>Reply</span>
            </div>
          </div>
          <div className='my-3 text-[14px] text-gray-400'>
            <p>
              Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.You&#39;ve nailed the design and the responsiveness at various breakpoints works really well.
            </p>
          </div>
        </div>
    </section>
  )
}

export default Comment