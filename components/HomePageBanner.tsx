'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SocialIcon from './social-icons'

interface CarouselImage {
  src: string
  alt: string
  hoverText?: string
  link?: string
}

const images: CarouselImage[] = [
  { src: '/static/images/homepagebanner/chai.jpeg', alt: 'chai' },
  { src: '/static/images/homepagebanner/drums.png', alt: 'drums' },
  { src: '/static/images/homepagebanner/coffee.jpeg', alt: 'coffee' },
  { src: '/static/images/homepagebanner/guitar.jpg', alt: 'guitar' },
  { src: '/static/images/homepagebanner/guitar2.jpeg', alt: 'guitar' },
  { src: '/static/images/homepagebanner/workspace.jpeg', alt: 'workspace' },
]

const IntroSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth
      if (direction === 'left') {
        carouselRef.current.scrollLeft -= scrollAmount
      } else {
        carouselRef.current.scrollLeft += scrollAmount
      }
    }
  }

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="w-full lg:w-2/3">
          <h1 className="prose dark:prose-invert text-4xl font-bold mb-6">Hello 👋🏼</h1>
          <p className="prose dark:prose-invert text-lg mb-8">
            I am Bhrigu and I am a software development engineer in Seattle. I like to build apps on
            the web and mobile. <br />
            <br />I also enjoy writing and I like venturing into productivity tools, routines, and
            habits. This website is just me with my thoughts and a medium for sharing my writings
            around technology, development, and philosophies.
          </p>
        </div>
        <div className="relative -mx-8">
          {' '}
          {/* Negative margin to extend beyond container */}
          <div
            ref={carouselRef}
            className="flex space-x-4 overflow-x-scroll scrollbar-hide overflow-y-hidden scroll-smooth h-64 sm:h-56 md:h-64 px-4 md:px-8"
          >
            {images.map((image, index) => (
              <Link href={image.link ?? '#'} key={index}>
                <div
                  className="relative w-56 h-56 flex-shrink-0 transform hover:scale-105 transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})`,
                    marginTop: index % 2 === 0 ? '0.5rem' : '0',
                  }}
                  onMouseEnter={() => {
                    if (image.link) {
                      setHoveredIndex(index)
                    }
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                  />
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                      <span className="text-white text-lg font-semibold">{image.hoverText}</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 shadow-md z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 shadow-md z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex space-x-3 pt-6">
          <h2 className="text-xl">Find me on: </h2>
          <SocialIcon kind="mail" href="mailto:captain.bhrigu@gmail.com" />
          <SocialIcon
            kind="youtube"
            href="https://www.youtube.com/channel/UCqgqCOWlxpYDPH5whE6mb3Q"
          />
          <SocialIcon kind="github" href="https://github.com/bhrigu123" />
          <SocialIcon
            kind="linkedin"
            href="https://www.linkedin.com/in/bhrigu-srivastava-48493294/"
          />
          <SocialIcon kind="twitter" href="https://twitter.com/CaptainBhrigu" />
        </div>
      </div>
    </section>
  )
}

export default IntroSection
