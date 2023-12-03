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

  /**
   * Converts a given date into a human-readable time ago format.
   *
   * @param {Date} date - The date to be converted.
   * @returns {string} A string indicating the time difference between the given date and the current time.
   * The format is "X years ago", "X months ago", "X days ago", "X hours ago", "X minutes * ago", or "X seconds ago" based on the time difference.
   */

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
/**
 * Formats a given number into a human-readable abbreviated form.
 *
 * @param {number} num - The number to be formatted.
 * @returns {string} A string representation of the formatted number with abbreviations.
 * The format is either the original number (if less than 1000), "X.XK" for thousands, "X.* XM" for millions, or "X.XB" for billions.
 */
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
