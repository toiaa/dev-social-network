'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { set, useForm } from 'react-hook-form'
import { useRef, useState } from 'react'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { questionSchema } from '@/lib/validations'
import { Editor } from '@tinymce/tinymce-react'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import error from 'next/error'

const type: any = 'create'
export function Question() {
  const editorRef = useRef({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<z.infer<typeof questionSchema>>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      title: '',
      explanation: '',
      tags: [],
    },
  })

  const onSubmit = (values: z.infer<typeof questionSchema>) => {
    setIsSubmitting(true)
    try {
      // make an async call to the server (API) -> create a question
      // contain all form data
      // navigate back to the home page
    } catch (e) {
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: any) => {
    if (e.key === 'Enter' && field.name === 'tags') {
      e.preventDefault()
      const tagInput = e.target as HTMLInputElement
      const tagValue = tagInput.value.trim()
      if (tagValue !== '') {
        if (tagValue.length > 15) {
          return form.setError('tags', {
            type: 'required',
            message: 'Tag length must be less than 15 characters',
          })
        }
        if (!field.value.includes(tagValue) as never) {
          form.setValue('tags', [...field.value, tagValue])
          tagInput.value = ''
          form.clearErrors('tags')
        }
      } else {
        form.trigger()
      }
    }
  }
  const handleTagRemove = (tag: string, field: any) => {
    const newTags = field.value.filter((t: string) => t !== tag)
    form.setValue('tags', newTags)
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex w-full flex-col gap-10'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col'>
                <FormLabel className='paragraph-semibold text-dark400_light800'>
                  Question title <span className='text-primary-500'>*</span>
                </FormLabel>
                <FormControl className='mt-3.5'>
                  <Input
                    className='no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border  '
                    {...field}
                  />
                </FormControl>
                <FormDescription className='body-regular mt-2.5 text-light-500'>
                  Be specific and imagine you’re asking a question to another person
                </FormDescription>
                <FormMessage className='text-red-500' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='explanation'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-3'>
                <FormLabel className='paragraph-semibold text-dark400_light800'>
                  Detailed explanation of your problem <span className='text-primary-500'>*</span>
                </FormLabel>
                <FormControl className='mt-3.5'>
                  <Editor
                    apiKey={process.env.NEXT_PUBLIC_TINY_MCE_API_KEY}
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue=''
                    init={{
                      height: 350,
                      menubar: false,
                      plugins: [
                        'advlist',
                        'autolink',
                        'lists',
                        'link',
                        'image',
                        'charmap',
                        'preview',
                        'anchor',
                        'searchreplace',
                        'visualblocks',
                        'codesample',
                        'fullscreen',
                        'insertdatetime',
                        'media',
                        'table',
                      ],
                      toolbar:
                        'undo redo | ' +
                        'codesample | bold italic forecolor | alignleft aligncenter |' +
                        'alignright alignjustify | bullist numlist',
                      content_style: 'body { font-family:Inter; font-size:16px }',
                    }}
                  />
                </FormControl>
                <FormDescription className='body-regular mt-2.5 text-light-500'>
                  Introduce the problem you&apos;re experiencing and expand on what you put in the title
                </FormDescription>
                <FormMessage className='text-red-500' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='tags'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col'>
                <FormLabel className='paragraph-semibold text-dark400_light800'>
                  Tags <span className='text-primary-500'>*</span>
                </FormLabel>
                <FormControl className='mt-3.5'>
                  <Input
                    placeholder='e.g. react, javascript, css'
                    className='no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border  '
                    onKeyDown={(e) => {
                      handleInputKeyDown(e, field)
                    }}
                  />
                </FormControl>
                {field.value.length > 0 && (
                  <div className='flex-start mt-3.5 gap-2.5'>
                    {field.value.map((tag: any) => {
                      return (
                        <Badge
                          key={tag}
                          className='subtle-medium text-dark400_light500 background-light800_dark300 flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize'>
                          {tag}
                          <Image
                            alt='Close icon'
                            className='cursor-pointer object-contain invert-0 dark:invert'
                            src='/assets/icons/close.svg'
                            width={12}
                            height={12}
                            onClick={() => {
                              handleTagRemove(tag, field)
                            }}
                          />
                        </Badge>
                      )
                    })}
                  </div>
                )}
                <FormDescription className='body-regular mt-2.5 text-light-500'>
                  Add up to 5 tags to describe what your question is about
                </FormDescription>
                <FormMessage className='text-red-500' />
              </FormItem>
            )}
          />
          <Button
            type='submit'
            className='primary-gradient mt-9 min-h-[46px] w-fit !text-light-900'
            disabled={isSubmitting}>
            {isSubmitting ? (
              <>{type === 'edit' ? 'Editing...' : 'Posting...'}</>
            ) : (
              <>{type === 'edit' ? 'Edit Question' : 'Ask Question'}</>
            )}
          </Button>
        </form>
      </Form>
    </>
  )
}

export default Question
