import type { NextPage } from 'next'
import Layout from '@components/layout'
import useUser from '@libs/client/useUser'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'

type Product_Nara = {
  productImage: string
  productName: string
  productPrice: string
  productLink: string
}

type Product_Thunder = {
  productImage: string
  productName: string
  productPrice: string
  productLink: string
}

const Home: NextPage = () => {
  const { user, isLoading } = useUser()

  const [data, setData] = useState<Product_Nara[] | null>(null)

  const [data2, setData2] = useState<Product_Thunder[] | null>(null)

  useEffect(() => {
    axios.get('/api/users/test').then((response) => {
      setData(response.data)
    })
  }, [])

  useEffect(() => {
    fetch('/api/users/test2')
      .then((res) => res.json())
      .then((data2: Product_Thunder[]) => {
        //console.log(data) // 콘솔에 데이터를 출력
        setData2(data2)
      })
  }, [])

  if (!data) {
    return <div>Loading...</div>
  }

  if (!data2) {
    return <div>Loading...</div>
  }

  return (
    <Layout hasTabBar>
      <Head>
        <title>Home</title>
      </Head>
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
        {data2.map((item: Product_Thunder, index: number) => (
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
    </Layout>
  )
}

export default Home

/*import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return null;
};

*/
