/*import { NextApiRequest, NextApiResponse } from 'next'
import { checkIdExistence } from '@libs/utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { user_id } = req.body

  if (!user_id) {
    return res.status(400).json({ ok: false, error: '아이디가 비어 있습니다.' })
  }

  try {
    const isIdExists = await checkIdExistence(user_id)

    if (isIdExists) {
      return res.json({ ok: false, error: '이미 존재하는 아이디입니다.' })
    } else {
      return res.json({ ok: true })
    }
  } catch (error) {
    console.error('클라이언트에서 서버로 요청 중 에러 발생:', error)
    return res
      .status(500)
      .json({ ok: false, error: '서버 오류가 발생했습니다.' })
  }
}
*/
