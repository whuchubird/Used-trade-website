import { useState } from 'react'

interface UseMutationState<T> {
  loading: boolean
  data?: T
  error?: Object
}
type UseMutationResult<T> = [(data: any) => void, UseMutationState<T>]

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

  function mutation(data: any) {
    setLoading(true)

    console.log('data1', data)

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then((responseData) => {
        setData(responseData)
        setLoading(false)
        console.log('data2', responseData)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }

  return [mutation, { loading, data, error }]
}
