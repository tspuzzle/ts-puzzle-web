'use client'
import { useState, useEffect } from 'react'

export const ThemeToggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
      return
    }
    // If no saved preference, check system preference
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }, [])

  // Effect to update body class and localStorage when theme changes
  useEffect(() => {
    // Update the body class
    if (isDarkMode) {
      document.body.classList.add('dark')
      document.body.classList.remove('light')
    } else {
      document.body.classList.add('light')
      document.body.classList.remove('dark')
    }

    // Save preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div
      onClick={toggleTheme}
      className="relative bg-gray-100 dark:bg-gray-700 rounded-full cursor-pointer flex items-center p-0.5"
      style={{ width: '62px', height: '32px', borderRadius: '16px' }}
    >
      {/* Sliding indicator */}
      <div
        className="absolute rounded-full bg-white shadow-md transition-transform duration-300 z-10"
        style={{
          width: '28px',
          height: '28px',
          transform: isDarkMode ? 'translateX(31px)' : 'translateX(2px)',
        }}
      />

      {/* Sun icon */}
      <div className="w-1/2 h-full flex items-center justify-center z-20">
        <div className={`text-yellow-400 ${isDarkMode ? 'opacity-40' : 'opacity-100'}`}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
            <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M22 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path
              d="M19.7782 4.22183L18.364 5.63604"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M5.63608 18.364L4.22187 19.7782"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M19.7782 19.7782L18.364 18.364"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M5.63608 5.63603L4.22187 4.22182"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Moon icon */}
      <div className="w-1/2 h-full flex items-center justify-center z-20">
        <div className={`text-gray-400 ${isDarkMode ? 'opacity-100' : 'opacity-40'}`}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
