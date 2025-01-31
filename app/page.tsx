import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import { permanentRedirect } from 'next/navigation'
import { headers } from 'next/headers'

export default async function Page() {
  const header = await headers()
  if (header.get('host') === 'bhrigu.me') {
    permanentRedirect('https://bhrigu.dev')
  }

  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
