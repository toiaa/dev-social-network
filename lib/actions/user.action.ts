'use server'

import User from '@/database/user.models'
import { connectToDatabase } from '../mongoose'

export async function getUserById(params: any) {
  // eslint-disable-next-line no-empty
  try {
    connectToDatabase()
    const { userId } = params
    const user = await User.findOne({
      clerkId: userId,
    })
    return user
  } catch (error) {
    console.log(`getUserById action error: ${error}`)
  }
}
