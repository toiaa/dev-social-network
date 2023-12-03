import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimeStamp = (date: Date): string => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(months / 12)

  if (years > 0) {
    return `${years} years ago`
  } else if (months > 0) {
    return `${months} months ago`
  } else if (days > 0) {
    return `${days} days ago`
  } else if (hours > 0) {
    return `${hours} hours ago`
  } else if (minutes > 0) {
    return `${minutes} minutes ago`
  } else {
    return `${seconds} seconds ago`
  }
}

export const formatNumbers = (num: number): string => {
  if (num < 1000) {
    return num.toString()
  } else if (num < 1000000) {
    return `${(num / 1000).toFixed(1)}K`
  } else if (num < 1000000000) {
    return `${(num / 1000000).toFixed(1)}M`
  } else {
    return `${(num / 1000000000).toFixed(1)}B`
  }
}
