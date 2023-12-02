import { PrismaClient } from '@prisma/client'

//const client = new PrismaClient()

export default new PrismaClient()

/*client.user.create({
  data: {
    //id: 1,
    name: 'Jeong',
    user_id: 'JeongJeong',
    email: 'fredkid@naver.com',
    password: '1234',
    //createdAt: new Date(),
    //updatedAt: new Date(),
  },
})
*/
