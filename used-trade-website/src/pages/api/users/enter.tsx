import { NextApiRequest, NextApiResponse } from 'next'
import withHandler, { ResponseType } from '@libs/server/withHandler'
import { cls } from '@libs/utils'
import client from 'libs/server/client'
import bcrypt from 'bcrypt'

//export default async function handler(
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  //if (req.method !== 'POST') {
  //  res.status(401).end()
  //}
  const { user_id, password } = req.body
  //const user 안한 이유: 아이디 비번쓰기 때문
  const payload = Math.floor(10000 + Math.random() * 90000) + ''
  /*const user = await client.user.upsert({
    where: {
      user_id: String(user_id),
      password: String(password),
    },
    create: {
      name: 'Anonymous',
      user_id: String(user_id),
      password: String(password),
    },
    update: {},
  })
  console.log(user)*/

  /*user = await client.user.findUnique({
    where: {
      user_id,
      password,
    },
  })*/

  //디버그용
  /*
  try {
    user = await client.user.create({
      data: {
        name: 'Anonymous',
        user_id: user_id,
        password: password,
      },
    })
  } catch (error) {
    console.error('Error during user creation:', error)
  }*/

  /*
  if (user) console.log('found it.')

  if (!user) {
    console.log('해당 사용자 찾지 못해서 추가함')
    //const hashedPassword = await bcrypt.hash(password, 10)
    if (user_id && password) {
      user = await client.user.create({
        data: {
          name: 'Annoymous',
          user_id: user_id,
          password: password,
        },
      })
    } else {
      console.log('user_id나 password가 비어 있습니다.')
    }
  }*/

  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            user_id: String(user_id),
            password: String(password),
          },
          create: {
            name: 'Anonymous',
            user_id: String(user_id),
            password: String(password),
          },
        },
      },
    },
  })
  console.log(token)
  return res.json({
    ok: true,
  })

  //데이터베이스 서버에 전송되는지 디버그용
  /*await client.user.create({
    data: {
      //id: 1,
      name: 'Jeong',
      user_id: 'JeongJeong',
      email: 'fred@naver.com',
      password: '1234',
      //createdAt: new Date(),
      //updatedAt: new Date(),
    },
  })

  res.json({
    ok: true,
  })*/
}

//enter.tsx에서 withHandler를 호출하면
//withHandler.ts에서 return async function를 return
/* export default async function (req: NextApiRequest, res: NextApiResponse) {
    res.json({ hello: true }) 와 동치
  }*/
//POST 요청인지 아닌지에 확인한 후 handler 를 실행

export default withHandler({ method: 'POST', handler, isPrivate: false })
