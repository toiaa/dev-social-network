import LocalSearchBar from '@/components/shared/search/LocalSearchBar'
import { Button } from '@/components/ui/button'
import { HomePageFilters } from '@/constants/filters'
import Filter from '@/components/shared/Filter'
import Link from 'next/link'
import HomeFilters from '@/components/home/HomeFilters'
import NoResult from '@/components/shared/NoResult'
import QuestionCard from '@/components/cards/QuestionCard'

const questionCards = [
  {
    _id: '1',
    title: 'How to use TypeScript with React?',
    tags: [
      { _id: '1', name: 'TypeScript' },
      { _id: '2', name: 'React' },
    ],
    author: {
      _id: '1',
      name: 'John Doe',
      picture: '/assets/icons/avatar.svg',
    },
    upvotes: 1050,
    views: 5000,
    answers: [
      { _id: '1', text: 'You can use tsx files for React components.' },
      { _id: '2', text: 'Make sure to install @types/react.' },
    ],
    createdAt: new Date('2023-12-03T10:30:00'),
  },
  {
    _id: '2',
    title: 'Best practices for Express.js middleware?',
    tags: [
      { _id: '3', name: 'Express.js' },
      { _id: '4', name: 'Node.js' },
    ],
    author: {
      _id: '2',
      name: 'Jane Smith',
      picture: '/assets/icons/avatar.svg',
    },
    upvotes: 8,
    views: 440060,
    answers: [
      { _id: '3', text: 'Always use middleware in the correct order.' },
      { _id: '4', text: 'Handle errors gracefully in middleware.' },
    ],
    createdAt: new Date('2022-11-15T15:45:00'),
  },
  {
    _id: '3',
    title: 'How to deploy a React app to AWS S3?',
    tags: [
      { _id: '5', name: 'React' },
      { _id: '6', name: 'AWS' },
    ],
    author: {
      _id: '3',
      name: 'Bob Johnson',
      picture: '/assets/icons/avatar.svg',
    },
    upvotes: 15,
    views: 6500000,
    answers: [
      { _id: '5', text: 'Use the AWS CLI to sync your build folder.' },
      { _id: '6', text: 'Set up the correct S3 bucket policies.' },
    ],
    createdAt: new Date('2023-10-01T08:00:00'),
  },
]
export default function Home() {
  return (
    <>
      <div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
        <h1 className='h1-bold text-dark100_light900 '>All Questions</h1>
        <Link href='/ask-question' className='max-sm:[640px] flex justify-end'>
          <Button className='primary-gradient min-h-[46px] px-4 py-3 !text-light-900'>Ask Question</Button>
        </Link>
      </div>
      <div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
        <LocalSearchBar
          route='/'
          iconPosition='left'
          imgSrc='/assets/icons/search.svg'
          placeholder='Search for questions'
          otherClasses='flex-1'
        />
        <Filter
          filters={HomePageFilters}
          otherClasses='min-h-[56px] sm:min-w-[170px]'
          containerClasses='hidden max-md:flex'
        />
      </div>
      <HomeFilters />
      <div className='mt-10 flex w-full flex-col gap-6'>
        {questionCards.length > 0 ? (
          questionCards.map((question) => (
            <QuestionCard
              title={question.title}
              tags={question.tags}
              _id={question._id}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
              key={`${question._id}${question.title}`}
            />
          ))
        ) : (
          <NoResult
            title='There is no questions to show'
            description='Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next
          big thing others learn from. Get involved! 💡'
            link={'/ask-question'}
            linkTitle='Ask Question'
          />
        )}
      </div>
    </>
  )
}
