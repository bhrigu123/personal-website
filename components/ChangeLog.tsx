import SectionContainer from './SectionContainer'

export interface ChangeLogEntry {
  date: string
  title?: string
  content?: string
}

export interface ChangeLogProps {
  entries: ChangeLogEntry[]
}

export default function ChangeLog(props: ChangeLogProps) {
  return (
    <SectionContainer>
      <>
        {props.entries.map((entry) => {
          return (
            <article className="md:flex" key={entry.title}>
              <h2 className="h-full mt-px pl-7 text-xs sm:text-sm leading-6 text-slate-500 md:w-1/4 md:pl-0 md:pr-12 md:text-right">
                {entry.date}
              </h2>
              <div className="content-block relative pt-2 pl-7 md:w-3/4 md:pt-0 md:pl-12 pb-16">
                <div className="feed-border absolute -bottom-2 left-0 w-px bg-slate-200 -top-3 md:top-2.5"></div>
                <div className="feed-dot absolute -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-slate-300 bg-white md:top-[0.4375rem]"></div>
                <h3 className="title text-xl mb-4">{entry.title}</h3>
                <div className="max-w-none">{entry.content}</div>
              </div>
            </article>
          )
        })}
      </>
    </SectionContainer>
  )
}
