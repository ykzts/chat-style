import localForage from 'localforage'
import { useCallback, useEffect, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

type Set<T> = Dispatch<SetStateAction<T>>

function useStorage<T = unknown>(
  key: string
): [T | undefined, Set<T | undefined>, () => void]
function useStorage<T = unknown>(
  key: string,
  initialValue: T
): [T, Set<T | undefined>, () => void]
function useStorage<T = unknown>(
  key: string,
  initialValue?: T
): [T | undefined, Set<T | undefined>, () => void] {
  const [value, setValue] = useState(initialValue)

  const set = useCallback<Set<T | undefined>>(
    (newValue) => {
      const val =
        typeof newValue === 'function'
          ? (newValue as (prevState: T | undefined) => T | undefined)(value)
          : newValue

      if (val !== undefined) {
        localForage
          .setItem<T>(key, val)
          .then(setValue)
          .catch(() => {
            // do nothing
          })
      }
    },
    [value, key]
  )

  const remove = useCallback(() => {
    localForage.removeItem(key).catch(() => {
      // do nothing
    })
  }, [key])

  useEffect(() => {
    localForage
      .getItem<T>(key)
      .then((newValue) => {
        if (newValue !== null) {
          setValue(newValue)
        }
      })
      .catch(() => {
        // do nothing
      })
  }, [key])

  return [value, set, remove]
}

export default useStorage
