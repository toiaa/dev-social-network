'use client'
import { Input } from '@/components/ui/input'
import { CustomInputProps } from '@/types'
import Image from 'next/image'
import React from 'react'

function LocalSearchBar({ route, iconPosition, imgSrc, placeholder, otherClases }: CustomInputProps) {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-1 rounded-[10px] px-4 ${otherClases}`}>
      {iconPosition === 'left' && (
        <Image src={imgSrc} width={24} height={24} className='cursor-pointer' alt='Search Icon' />
      )}
      <Input
        type='text'
        placeholder={placeholder}
        value=''
        className='paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none'
        onChange={() => {
          console.log('searching')
        }}
      />
      {iconPosition === 'right' && (
        <Image src={imgSrc} width={24} height={24} className='cursor-pointer' alt='Search Icon' />
      )}
    </div>
  )
}

export default LocalSearchBar
