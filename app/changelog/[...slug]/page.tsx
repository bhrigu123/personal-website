import 'css/prism.css'
import 'katex/dist/katex.css'

import PageTitle from '@/components/PageTitle'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allAuthors, allChangeLogEntries } from 'contentlayer/generated'
import type { Authors, Blog, ChangeLogEntry } from 'contentlayer/generated'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import ChangeLogLayout, { ChangeLogEntryContent } from '@/layouts/ChangeLogLayout'

const isProduction = process.env.NODE_ENV === 'production'

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const post = allBlogs.find((p) => p.slug === slug)
  const changeLogEntries = allChangeLogEntries.filter((c) => c.changeLogId === slug)

  if (changeLogEntries === undefined || changeLogEntries.length === 0) {
    return
  }

  return {
    title: slug,
    description: '',
    openGraph: {
      title: slug,
      description: '',
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',

      url: './',
    },
    twitter: {
      card: 'summary_large_image',
    },
  }
}

export const generateStaticParams = async () => {
  const paths = allBlogs.map((p) => ({ slug: p.slug.split('/') }))

  return paths
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  const changeLogEntries = allChangeLogEntries.filter((c) => c.changeLogId === slug) as ChangeLogEntry[]
  changeLogEntries.sort((a, b) => {
    // TODO implement this
    return 1;
  })

  const entryContent: ChangeLogEntryContent[] = changeLogEntries.map((c) => {
    
    return {
      changeLogEntryContent: coreContent(c),
      mdx: c.body
    }
  })
  console.log(entryContent)

  return (
    <>
      <>
        <ChangeLogLayout content={entryContent}>
          
        </ChangeLogLayout>
      </>
    </>
  )
}
