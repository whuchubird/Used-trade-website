import { NextApiRequest, NextApiResponse } from 'next'
import { checkIdExistence, createUser } from '@libs/utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { user_id, password, name, email } = req.body

  if (!user_id || !password || !name || !password) {
    return res
      .status(400)
      .json({ ok: false, error: '모든 정보를 빠짐없이 적어주세요.' })
  }

  try {
    // 이미 아이디가 존재하는지 확인
    const isAccountExists = await checkIdExistence(user_id, email)

    if (isAccountExists) {
      return res
        .status(400)
        .json({ ok: false, error: '이미 존재하는 아이디 혹은 이메일입니다.' })
    }

    // 아이디&이메일이 존재하지 않으면 회원가입 진행
    const user = await createUser(user_id, password, name, email)

    if (user) {
      return res.json({ ok: true })
    } else {
      return res
        .status(500)
        .json({ ok: false, error: '회원가입 중 오류가 발생했습니다.' })
    }
  } catch (error) {
    console.error('회원가입 중 에러 발생:', error)
    return res
      .status(500)
      .json({ ok: false, error: '서버 오류가 발생했습니다.' })
  }
}
