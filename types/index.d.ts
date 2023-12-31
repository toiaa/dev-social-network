import { BADGE_CRITERIA } from '@/constants'

export interface SidebarLink {
  imgURL: string
  route: string
  label: string
}

export interface Job {
  id?: string
  employer_name?: string
  employer_logo?: string | undefined
  employer_website?: string
  job_employment_type?: string
  job_title?: string
  job_description?: string
  job_apply_link?: string
  job_city?: string
  job_state?: string
  job_country?: string
}

export interface Country {
  name: {
    common: string
  }
}

export interface ParamsProps {
  params: { id: string }
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined }
}

export interface URLProps {
  params: { id: string }
  searchParams: { [key: string]: string | undefined }
}

export interface BadgeCounts {
  GOLD: number
  SILVER: number
  BRONZE: number
}

export type BadgeCriteriaType = keyof typeof BADGE_CRITERIA

export interface RenderTagProps {
  _id: string
  name: string
  totalQuestions?: number
  showCount?: boolean
}

export interface CustomInputProps {
  route: string
  iconPosition: string
  imgSrc: string
  placeholder: string
  otherClasses: string
}

export interface FilterProps {
  filters: {
    name: string
    value: string
  }[]
  otherClasses?: string
  containerClasses?: string
}

export interface NoResultProps {
  title: string
  description: string
  linkTitle: string
  link: string
}
export interface QuestionCardProps {
  _id: string
  title: string
  tags: {
    _id: string
    name: string
  }[]
  author: {
    _id: string
    name: string
    picture: string
  }
  upvotes: number
  views: number
  answers: Array<object>
  createdAt: Date
}

export interface MetricProps {
  imgUrl: string
  title: string
  value: string | number
  alt: string
  textStyles?: string
  href?: string
  isAuthor?: boolean
}
