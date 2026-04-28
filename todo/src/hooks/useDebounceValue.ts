import { useEffect, useState } from 'react'

export const useDebounceValue = <T>(value: T, delay: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
      return () => clearTimeout(handler)
    }, delay)
  }, [value, delay])

  return debouncedValue
}
