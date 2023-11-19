import React from 'react'
import { RenderTagProps } from '@/types'
import Link from 'next/link'
import { Badge } from '../ui/badge'

function RenderTag({ _id, name, totalQuestions, showCount }: RenderTagProps) {
  return (
    <Link href={`/tags/${_id}`} className='flex justify-between gap-2'>
      <Badge className='subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase'>
        {name}
      </Badge>
      {showCount && <p className='text-dark500_light700 small-medium'>{totalQuestions} </p>}
    </Link>
  )
}

export default RenderTag
