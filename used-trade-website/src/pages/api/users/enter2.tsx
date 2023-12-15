import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import withHandler, { ResponseType } from '@libs/server/withHandler'
import { checkAccountExistence, cls } from '@libs/utils'
import client from 'libs/server/client'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import { withApiSession } from '@libs/server/withSession'

const handler_2: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { user_id, password } = req.body //아이디 비번 받아와서

    try {
      const isAccountValid = await checkAccountExistence(user_id, password)
      //utile에 있는 checkAccountExistence 함수로 아이디 비번 확인

      if (isAccountValid) {
        //있는 아이디 비번이다!
        const user = await client.user.findUnique({
          where: { user_id: user_id },
        }) // 실제 사용자를 아이디로 조회
        if (user) {
          req.session.user = { id: user.id } //쿠키 보내기 스타트
          await req.session.save()
        }
        return res.json({ ok: true })
      } else {
        //없는 아이디 비번이다!
        return res
          .status(401)
          .json({ ok: false, error: '아이디나 비밀번호가 일치하지 않습니다.' })
      }
    } catch (error) {
      console.error('기타 에러 발생:', error)
      return res.status(500).json({ ok: false, error: '서버 에러' })
    }
  } else {
    return res.status(405).json({ ok: false, error: '기타 에러' })
  }
}

//export default handler_2

export default withApiSession(
  withHandler({
    methods: ['POST'],
    handler: handler_2,
    isPrivate: false,
  }),
)
