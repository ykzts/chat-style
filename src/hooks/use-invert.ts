import { useCallback } from 'react'
import useStorage from './use-storage'

function useInvert(): [boolean, () => void] {
  const [invert, setInvert] = useStorage('preview.invert', false)

  const toggle = useCallback(() => {
    setInvert((prevState) => !prevState)
  }, [setInvert])

  return [invert, toggle]
}

export default useInvert
