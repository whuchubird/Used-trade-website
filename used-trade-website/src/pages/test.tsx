// 아름다운 나라

import { useEffect, useState } from 'react'
import axios from 'axios'

type Product = {
  name: string
  image: string
  url: string
  price: string
}

export default function Test() {
  const [data, setData] = useState<Product[] | null>(null)

  useEffect(() => {
    axios.get('/api/users/test').then((response) => {
      setData(response.data)
    })
  }, [])

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {data.map((item: Product, index: number) => (
        <div key={index}>
          <img src={item.image} alt="" />
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <h2>{item.name}</h2>
          </a>
          <span>{item.price}</span>
        </div>
      ))}
    </div>
  )
}
