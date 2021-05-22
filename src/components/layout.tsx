import Link from 'next/link'
import type { ReactNode, VFC } from 'react'

type Props = {
  children: ReactNode
}

const Layout: VFC<Props> = ({ children }) => {
  return (
    <>
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-2">
          <Link href="/">
            <a className="font-black md:w-auto overflow-hidden text-2xl w-10">
              Chat Styles
            </a>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">{children}</div>

      <footer className="bg-gray-100 p-4">
        <nav>
          <ul className="text-right">
            <li>
              <span className="text-gray">Inspired by </span>
              <a
                className="hover:text-blue-600 hover:underline text-blue-400"
                href="https://chatv2.septapus.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Chat v2.0 Style Generator
              </a>
            </li>
            <li>
              <span className="text-gray">Created by </span>
              <a
                className="hover:text-blue-600 hover:underline text-blue-400"
                href="https://ykzts.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Yamagishi Kazutoshi
              </a>
            </li>
            <li>
              <a
                className="hover:text-blue-600 hover:underline text-blue-400"
                href="https://github.com/ykzts/chat-styles"
                rel="noopener noreferrer"
                target="_blank"
              >
                Source code
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  )
}

export default Layout
