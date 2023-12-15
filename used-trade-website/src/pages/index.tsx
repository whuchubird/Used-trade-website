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

  const [searchData, setSearchData] = useState<Product_Nara[] | null>(null)

  const [searchData2, setSearchData2] = useState<Product_Thunder[] | null>(null)

  useEffect(() => {
    axios.get('/api/users/test').then((response) => {
      setData(response.data)
    })
  }, [searchData])

  useEffect(() => {
    fetch('/api/users/test2')
      .then((res) => res.json())
      .then((data2: Product_Thunder[]) => {
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
    <Layout
      hasTabBar
      setSearchData={setSearchData}
      searchData={searchData}
      setSearchData2={setSearchData2}
      searchData2={searchData2}
    >
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col space-y-5 divide-y">
        {searchData &&
          searchData.map((item: Product_Nara, index: number) => (
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
                <svg
                  className="w-6 h-6" // 추가
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
            </div>
          ))}

        {searchData2 &&
          searchData2.map((item: Product_Thunder, index: number) => (
            // Add this block to display searchData2
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
