import mongoose from 'mongoose'

let isConnected = false
export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true)
  if (!process.env.MONGODB_URL) return console.log('Missing MONGODB_URL')
  if (isConnected) console.log('Mongo DB is already connected')
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: 'dev-social-ntw',
    })
    isConnected = true
    console.log('MongoDB connected')
  } catch (error) {
    console.log(`there was an error with the db connection: ${error}`)
  }
}
