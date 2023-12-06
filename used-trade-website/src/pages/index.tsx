import type { NextPage } from 'next'
import Layout from '@components/layout'
import useUser from '@libs/client/useUser'
import Head from 'next/head'

const Home: NextPage = () => {
  const { user, isLoading } = useUser()
  return (
    <Layout hasTabBar>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col space-y-5 divide-y">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <div
            key={i}
            className="flex px-4 pt-5 cursor-pointer justify-between"
          >
            <div className="flex space-x-4">
              <div className="w-20 h-20 bg-gray-400 rounded-md" />
              <div className="pt-2 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">
                  New iPhone 14
                </h3>
                <span className="text-xs text-gray-500">Black</span>
                <span className="font-medium mt-1 text-gray-900">$95</span>
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
