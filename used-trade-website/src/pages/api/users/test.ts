// 아름다운 나라 API

import axios, { AxiosResponse } from 'axios'
import cheerio, { CheerioAPI, Element } from 'cheerio'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { inputValue } = req.body

  try {
    const response: AxiosResponse = await axios.get(
      `https://web.joongna.com/search/${encodeURIComponent(inputValue)}`,
    )

    const html: string = response.data
    const $: CheerioAPI = cheerio.load(html)

    let productData_Nara: {
      productImage: string
      productName: string
      productPrice: string
      productLink: string
    }[] = []

    $('ul.search-results > li').each((_index: number, element: Element) => {
      const productName: string = $(element).find('h2').text()
      const productImage: string = $(element).find('img').attr('src') || ''
      const productUrl: string =
        'https://web.joongna.com' + ($(element).find('a').attr('href') || '')
      const productPrice: string = $(element).find('.font-semibold').text()

      productData_Nara.push({
        productName: productName,
        productImage: productImage,
        productLink: productUrl,
        productPrice: productPrice,
      })
    })

    res.status(200).json(productData_Nara)
  } catch (error) {
    console.error(error)
  }
}
