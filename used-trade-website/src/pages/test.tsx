// 아름다운 나라

import { useEffect, useState } from 'react'
import axios from 'axios'

type Product_Nara = {
  productImage: string
  productName: string
  productPrice: string
  productLink: string
}

export default function Nara() {
  const [data, setData] = useState<Product_Nara[] | null>(null)

  useEffect(() => {
    axios.get('/api/users/test').then((response) => {
      setData(response.data)
    })
  }, [])

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col space-y-5 divide-y">
      {data.map((item: Product_Nara, index: number) => (
        <div
          key={index}
          className="flex px-4 pt-5 cursor-pointer justify-between"
        >
          <div className="flex space-x-4">
            <img
              src={item.productImage}
              alt=""
              style={{ width: '100px', height: '100px' }}
            />
            <div className="pt-2 flex flex-col">
              <a
                href={item.productLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-sm font-medium text-gray-900">
                  {item.productName}
                </h3>
              </a>
              <span className="font-medium mt-1 text-gray-900">
                {item.productPrice}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
