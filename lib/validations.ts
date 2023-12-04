import { z } from 'zod'

export const questionSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: 'Title must be at least 5 characters.',
    })
    .max(130),
  explanation: z
    .string()
    .min(10, {
      message: 'Explanation must be at least 10 characters.',
    })
    .max(500, {
      message: 'Excedes the maximum of 500 characters.',
    }),

  tags: z
    .array(z.string().min(1).max(15))
    .min(1, {
      message: 'You must add at least 1 tag.',
    })
    .max(3, { message: 'You can only add up to 3 tags.' }),
})
