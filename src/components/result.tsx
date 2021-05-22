import classNames from 'classnames'
import Highlight, { defaultProps } from 'prism-react-renderer'
/* eslint-disable-next-line import/no-extraneous-dependencies */
import prismTheme from 'prism-react-renderer/themes/nightOwl'
import { useCallback, useRef } from 'react'
import { MdCode, MdContentCopy } from 'react-icons/md'
import { useStyleSheet } from '../hooks'
import Headline from './headline'
import type { VFC } from 'react'

const Result: VFC = () => {
  const codeRef = useRef<HTMLElement>(null)
  const styleSheet = useStyleSheet()

  const handleCopyClick = useCallback(() => {
    if (!codeRef.current) return

    void import('copy-text-to-clipboard').then(({ default: copy }) => {
      copy(styleSheet)
    })

    const selection = window.getSelection()

    selection?.selectAllChildren(codeRef.current)
  }, [styleSheet])

  return (
    <section className="mt-10">
      <Headline
        actions={
          <button
            className="bg-gray-200 flex focus:shadow-inner focus:outline-none items-center px-3 py-1 rounded-full"
            onClick={handleCopyClick}
            type="button"
          >
            <MdContentCopy className="mr-2" />
            コピーする
          </button>
        }
        icon={<MdCode />}
        label="カスタムCSS"
      />

      <Highlight
        {...defaultProps}
        code={styleSheet}
        language="css"
        theme={prismTheme}
      >
        {({ className, getLineProps, getTokenProps, style, tokens }) => (
          <pre
            className={classNames(
              'max-h-96',
              'overflow-auto',
              'p-2',
              'rounded',
              'text-base',
              className
            )}
            style={style}
          >
            <code ref={codeRef}>
              {tokens.map((line, i) => (
                <span
                  key={`line-${i}`}
                  {...getLineProps({ key: `line-${i}`, line })}
                >
                  {line.map((token, key) => (
                    <span
                      key={`token-${key}`}
                      {...getTokenProps({ key: `token-${key}`, token })}
                    />
                  ))}
                  {'\n'}
                </span>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </section>
  )
}

export default Result
