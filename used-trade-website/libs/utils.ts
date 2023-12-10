import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export function cls(...classnames: string[]) {
  return classnames.join(' ')
}

export async function checkAccountExistence(user_id: string, password: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        user_id,
      },
    })

    return !!(user && user.password === password) //아이디 비번 동시에 같은지 확인
  } catch (error) {
    console.error('util쪽에서 에러 발생:', error)
    throw new Error('util쪽에서 에러 발생')
  }
}

export async function checkIdExistence(user_id: string, email: string) {
  try {
    const userId = await prisma.user.findUnique({
      where: {
        user_id,
      },
    })
    const userEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    return !!userId || !!userEmail //아이디 이미 존재하는지 확인
  } catch (error) {
    console.error('util쪽에서 에러 발생:', error)
    throw new Error('util쪽에서 에러 발생')
  }
}

// 새로운 사용자 생성
export async function createUser(
  user_id: string,
  password: string,
  name: string,
  email: string,
): Promise<any> {
  try {
    const user = await prisma.user.create({
      data: {
        user_id,
        password,
        name,
        email,
      },
    })

    return user
  } catch (error) {
    console.error('회원가입 중 에러 발생:', error)
    return null
  }
}
