import { MetricProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Metric = ({ imgUrl, title, value, alt, textStyles, href, isAuthor }: MetricProps) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`invert-colors object-contain ${href ? 'rounded-full' : ''}`}
      />

      <p className={`flex items-center gap-1 ${textStyles}`}>
        {value}
        <span className={`small-regular line-clamp-1 ${isAuthor ? 'max-sm:hidden' : ''}`}>{title}</span>
      </p>
    </>
  )
  if (href)
    return (
      <Link href={href} className='flex-center gap-1'>
        {metricContent}
      </Link>
    )
  return <div className='flex-center flex-wrap gap-1'>{metricContent}</div>
}

export default Metric
