import React from 'react'
import Link from 'next/link'
import { cls } from '../libs/utils'
import { useState } from 'react'

interface LayoutProps {
  title?: string
  canGoBack?: boolean
  hasTabBar?: boolean
  children: React.ReactNode
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleButtonClick = () => {
    console.log('입력한 단어:', inputValue)
  }

  return (
    <div>
      <div className="bg-white w-full max-w-xl text-lg font-medium py-3 fixed text-gray-800 border-b top-0 justify-around flex items-center">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <div className="flex px-3 items-center">
          <Link href="/" legacyBehavior>
            <button onClick={handleButtonClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <div className={cls('pt-14', hasTabBar ? 'pb-20' : '')}>{children}</div>
      {hasTabBar ? (
        <nav className="bg-white w-full max-w-xl text-gray-700 border-t fixed bottom-0 px-10 pb-5 pt-3 flex justify-around text-xs">
          <Link href="/" legacyBehavior>
            <a className="flex flex-col items-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <span>홈</span>
            </a>
          </Link>
          <Link href="/profile" legacyBehavior>
            <a className="flex flex-col items-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span>프로필</span>
            </a>
          </Link>
        </nav>
      ) : null}
    </div>
  )
}
