import { useCallback, useEffect, useRef, useState } from 'react'
import { useStyleSheet } from '../../hooks'
import type { VFC } from 'react'

type Message = {
  frameHeight: number
}

const PreviewFrame: VFC = () => {
  const frameRef = useRef<HTMLIFrameElement>(null)
  const [frameHeight, setFrameHeight] = useState<number>(0)
  const [styleSheet] = useStyleSheet()

  const handleLoadStyleSheet = useCallback(
    (event: MessageEvent<Message>): void => {
      setFrameHeight(event.data.frameHeight)
    },
    [setFrameHeight]
  )

  useEffect(() => {
    window.addEventListener('message', handleLoadStyleSheet)

    return () => {
      window.removeEventListener('message', handleLoadStyleSheet)
    }
  }, [handleLoadStyleSheet])

  useEffect(() => {
    const win = frameRef.current && frameRef.current.contentWindow

    if (!win) return

    const styleSheetURL = URL.createObjectURL(
      new Blob([styleSheet], { type: 'text/css' })
    )

    if (frameHeight > 0) {
      win.postMessage({ url: styleSheetURL }, win.origin)
    } else {
      win.addEventListener('load', () =>
        win.postMessage({ url: styleSheetURL }, win.origin)
      )
    }
  }, [frameHeight, styleSheet])

  return (
    <iframe
      className="block border-0 h-0 w-full"
      ref={frameRef}
      src="/preview/preview.html"
      style={{ height: `${frameHeight}px` }}
      title="chat preview"
    />
  )
}

export default PreviewFrame
