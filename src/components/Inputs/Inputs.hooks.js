import { useEffect, useMemo, useState } from 'react'

/**
 * The Input's custom hook.
 */
export const useInput = ({ errorCallbacks = [], errorMessage = '', initialValue = '', normalize = value => value }) => {
  const [value, setValue] = useState(initialValue)
  const [count, setCount] = useState(0)
  const handleChange = event => {
    const updatedValue = normalize(event?.target?.value)

    if (event.type === 'blur') {
      return setCount(count + 1)
    }

    setValue(updatedValue)
  }
  const error = useMemo(() => {
    if (errorMessage !== '') {
      return errorMessage
    }

    if (count === 0) {
      return ''
    }

    return errorCallbacks.reduce((message, callback) => {
      if (message !== '') {
        return message
      }

      return callback(value)
    }, '')
  }, [count, value])

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return { error, value, onChange: handleChange }
}

/**
 * The Select' custom hook.
 */
export const useSelect = ({ errorCallbacks = [], errorMessage = '', initialValue = '' }) => {
  const [value, setValue] = useState(initialValue)
  const [count, setCount] = useState(0)
  const handleChange = event => {
    if (event.type === 'blur') {
      return setCount(count + 1)
    }

    setValue(event?.target?.value)
  }
  const error = useMemo(() => {
    if (errorMessage !== '') {
      return errorMessage
    }

    if (count === 0) {
      return ''
    }

    return errorCallbacks.reduce((message, callback) => {
      if (message !== '') {
        return message
      }

      return callback(value)
    }, '')
  }, [count, value])

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return { error, value, onChange: handleChange }
}
