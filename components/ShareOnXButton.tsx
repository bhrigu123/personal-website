import { SVGProps } from 'react'
import { X } from './social-icons/icons'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'

export const ShareOnXButton = ({ size = 5, path }: { size?: number; path: string }) => {
  return (
    <Link
      href={`https://x.com/share?url=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center text-gray-500 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400">
        Share on <X className={`pl-1 fill-current h-${size} w-${size}`} />
      </div>
    </Link>
  )
}
