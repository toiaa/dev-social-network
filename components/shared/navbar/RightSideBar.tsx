import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function RightSideBar() {
  const TopQuestions = [
    { _id: 1, title: 'Is it only me or the font is bolder than necessary?' },
    { _id: 2, title: 'Is it only me or the font is bolder than necessary?' },
    { _id: 3, title: 'Is it only me or the font is bolder than necessary?' },
    { _id: 4, title: 'Is it only me or the font is bolder than necessary?' },
    { _id: 5, title: 'Is it only me or the font is bolder than necessary?' },
  ]
  return (
    <section className='background-light900_dark200 light-border custom-scrollbar fixed inset-y-0 right-0 flex min-h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px]'>
      <div className=''>
        <h3 className='text-dark200_light900 h3-bold'>Top Questions</h3>
        <div className='mt-7 flex w-full flex-col gap-[30px]'>
          {TopQuestions.map((question) => {
            return (
              <Link
                href={`/questions/${question._id}`}
                key={question._id}
                className='flex cursor-pointer items-center justify-between gap-7'>
                <p className='text-dark500_light700 body-medium'>{question.title}</p>
                <Image
                  src='/assets/icons/chevron-right.svg'
                  alt='chevron right'
                  width={20}
                  height={20}
                  className='invert-colors'
                />
              </Link>
            )
          })}
        </div>
      </div>
      <div className='mt-16'>
        <p className='text-dark200_light900 h3-bold'>Popular Tags</p>
      </div>
    </section>
  )
}

export default RightSideBar
