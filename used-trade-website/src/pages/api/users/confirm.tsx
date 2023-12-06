import { NextApiRequest, NextApiResponse } from 'next'
import withHandler, { ResponseType } from '@libs/server/withHandler'
import client from '@libs/server/client'
import { withApiSession } from '@libs/server/withSession'

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number
    }
  }
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  //console.log(req.session)
  const { token } = req.body //res.body에 token을 담아 보냄
  //console.log('confirm token:' + token)
  const foundToken = await client.token.findUnique({
    where: {
      payload: token,
    },
  })
  if (!foundToken) return res.status(404).end()
  req.session.user = {
    id: foundToken.userId, //token 발견시 그 유저의 id를 req.session.user에 넣음
  }
  await req.session.save()
  await client.token.deleteMany({
    //token 한번만 사용하도록 삭제.
    where: {
      userId: foundToken.userId,
    },
  })
  res.json({ ok: true })
}

export default withApiSession(
  withHandler({ method: 'POST', handler, isPrivate: false }),
)
