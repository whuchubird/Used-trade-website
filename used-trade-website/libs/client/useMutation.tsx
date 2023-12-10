import { useState } from 'react'

interface UseMutationState<T> {
  loading: boolean
  data?: T
  error?: Object
}
type UseMutationResult<T = any> = [
  (data: any) => Promise<T>,
  { loading: boolean; data: T | undefined; error: any | undefined },
]

//api로 데이터를 POST하기
export default function useMutation<T = any>(
  url: string,
): UseMutationResult<T> {
  const [state, setState] = useState<UseMutationState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  })

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<undefined | any>(undefined)
  const [error, setError] = useState<undefined | any>(undefined)

  const mutation = async (data: any) => {
    setLoading(true)

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const responseData = await response.json()
      setData(responseData)
      setLoading(false)
      return responseData // Add this line
    } catch (error) {
      setError(error)
      setLoading(false)
      throw error
    }
  }

  return [mutation, { loading, data, error }]
}
