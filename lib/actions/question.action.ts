'use server'

import Question from '@/database/question.model'
import Tag from '@/database/tag.models'
import User from '@/database/user.models'
import { connectToDatabase } from '../mongoose'
import { CreateQuestionParams, GetQuestionsParams } from './shared'
import { revalidatePath } from 'next/cache'

export async function getQuestions(params: GetQuestionsParams) {
  try {
    connectToDatabase()
    const questions = await Question.find({})
      .populate({ path: 'tags', model: Tag })
      .populate({ path: 'author', model: User })
      .sort({ createdAt: -1 }) // populate tags and author because in the question model the data is not kept and retrieved from the database you need to get it if you want it
    return { questions }
  } catch (error) {
    console.log(`getQuestions action error: ${error}`)
    throw error
  }
}

export async function createQuestion(params: CreateQuestionParams) {
  try {
    connectToDatabase()
    const { title, content, tags, author, path } = params

    const question = await Question.create({
      title,
      content,
      author,
    })
    const tagsDocuments = []
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, 'i') } }, // query for existing tag
        { $setOnInsert: { name: tag }, $push: { question: question._id } }, // update if exists
        {
          upsert: true, // create if not exists
          new: true, // return new document
        },
      )
      tagsDocuments.push(existingTag)
    }
    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagsDocuments } },
    })

    revalidatePath(path)
  } catch (error) {
    console.log(`createQuestion action error: ${error}`)
  }
}
