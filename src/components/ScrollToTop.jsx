import React, { useState, useEffect } from 'react'
import { ChevronUpIcon } from './Icons'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full hover:bg-secondary shadow-lg hover:shadow-xl transition-all duration-300 z-40 animate-scale-in"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon />
        </button>
      )}
    </>
  )
}
