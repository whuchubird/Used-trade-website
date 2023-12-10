//피카츄

import { useEffect, useState } from 'react'

type Product = {
  productImage: string
  productName: string
  productPrice: string
  productLink: string
}

export default function Test2() {
  const [data, setData] = useState<Product[] | null>(null)

  useEffect(() => {
    fetch('/api/users/test2')
      .then((res) => res.json())
      .then((data: Product[]) => {
        //console.log(data) // 콘솔에 데이터를 출력
        setData(data)
      })
  }, [])

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {data.map((item: Product, index: number) => (
        <div key={index}>
          <img src={item.productImage} alt="" />
          <a href={item.productLink} target="_blank" rel="noopener noreferrer">
            {' '}
            {}
            <h2>{item.productName}</h2>
          </a>
          <span>{item.productPrice}</span>
        </div>
      ))}
    </div>
  )
}
