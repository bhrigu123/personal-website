import SectionContainer from '@/components/SectionContainer'
import { ChangeLogEntry, MDX } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { CoreContent } from 'pliny/utils/contentlayer'
import { ReactNode } from 'react'

export interface ChangeLogEntryContent {
  changeLogEntryContent: CoreContent<ChangeLogEntry>
  mdx: MDX
}

export interface ChangeLogProps {
  content: ChangeLogEntryContent[]
}

export default function ChangeLogLayout({ content }: ChangeLogProps) {
  return (
    <SectionContainer>

      <>{content.map((entry) => {
        return (
          <article className="md:flex">
            <h2 className='h-full mt-px pl-7 text-xs sm:text-sm leading-6 text-slate-500 md:w-1/4 md:pl-0 md:pr-12 md:text-right'>{entry.changeLogEntryContent.year}</h2>
            <div className='content-block relative pt-2 pl-7 md:w-3/4 md:pt-0 md:pl-12 pb-16'>
              <div className='feed-border absolute -bottom-2 left-0 w-px bg-slate-200 -top-3 md:top-2.5'></div>
              <div className='feed-dot absolute -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-slate-300 bg-white md:top-[0.4375rem]'></div>
              <h2 className='title text-xl sm:text-2xl font-bold mb-4'>{entry.changeLogEntryContent.title}</h2>
              <div className='max-w-none prose-h3:mb-4 prose-h3:text-base prose-h3:leading-6 prose-sm prose prose-pre:text-base prose-slate prose-a:font-semibold prose-a:text-primary hover:prose-a:text-sky-600'>
                <MDXLayoutRenderer code={entry.mdx.code} />
              </div>
            </div>
            
            
          </article>);
      })}</>

    </SectionContainer>
  );
}
