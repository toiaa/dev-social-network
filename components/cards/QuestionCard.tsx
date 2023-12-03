import { QuestionCardProps } from '@/types'
import Link from 'next/link'
import React from 'react'
import RenderTag from '../shared/RenderTag'

import Metric from '../shared/Metric'
import { formatNumbers, getTimeStamp } from '@/lib/utils'

const QuestionCard = ({ title, tags, author, upvotes, createdAt, views, answers, _id }: QuestionCardProps) => {
  return (
    <div className='card-wrapper rounded-[10px] p-9 sm:px-11'>
      <div className='flex flex-col-reverse items-start justify-between gap-5 sm:flex-row'>
        <div>
          <span className='subtle-regular text-dark400_light700 line-clamp-1 sm:hidden'>{getTimeStamp(createdAt)}</span>
          <Link href={`/question/${_id}`}>
            <h3 className='sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1'>{title}</h3>
          </Link>
        </div>
      </div>

      <div className='mt-3.5 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <RenderTag key={`${tag._id}${tag.name}`} _id={tag._id} name={tag.name} />
        ))}
      </div>
      <div className='flex-between mt-6 flex w-full flex-wrap gap-3 '>
        <Metric
          imgUrl='/assets/icons/avatar.svg'
          title={` - asked ${getTimeStamp(createdAt)}`}
          value={author.name}
          alt='user icon'
          isAuthor
          href={`/profile/${author._id}`}
          textStyles='body-medium  text-dark400_light700'
        />
        <Metric
          imgUrl='/assets/icons/like.svg'
          title=' Votes'
          value={formatNumbers(upvotes)}
          alt='upvotes icon'
          textStyles='small-medium text-dark400_light800'
        />
        <Metric
          imgUrl='/assets/icons/message.svg'
          title=' Answers'
          value={formatNumbers(answers.length)}
          alt='answers icon'
          textStyles='small-medium text-dark400_light800'
        />
        <Metric
          imgUrl='/assets/icons/eye.svg'
          title=' Views'
          value={formatNumbers(views)}
          alt='eye icon'
          textStyles='small-medium text-dark400_light800'
        />
      </div>
    </div>
  )
}

export default QuestionCard
