import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useMutation from '@libs/client/useMutation'
import Input from '@components/input'
import { useRouter } from 'next/router'

interface RegisterForm {
  name: string
  user_id: string
  email: string
  password: string
}

interface MutationResult {
  ok: boolean
  error?: string
}

interface TokenForm {
  token: string
}

export default function Enter() {
  const [enter, { loading, data, error }] = useMutation<MutationResult>(
    '/api/users/register',
  )
  const [confirmToken, { loading: tokenLoading, data: tokenData }] =
    useMutation<MutationResult>('/api/users/confirm')

  const [submitting, setSubmitting] = useState(false)
  const { register, watch, handleSubmit, reset } = useForm<RegisterForm>()
  const {
    register: tokenRegister,
    handleSubmit: tokenHandleSubmit,
    getValues: tokenGetValues,
  } = useForm<TokenForm>()
  const [method, setMethod] = useState<'Personal'>('Personal')
  const [errorMessage, setErrorMessage] = useState('')

  const onPersonalClick = () => setMethod('Personal')
  const router = useRouter()

  const onValid = async (validForm: RegisterForm) => {
    if (loading) return

    try {
      const response = await enter(validForm) //api/users/register로 데이터 전송후 확인받기

      if (response.ok) {
        //유일한 id, 이메일이고 계정 잘 생성됌
        alert(validForm.name + '님, 회원가입이 완료되었습니다.')
        router.push('/enter')
      } else {
        // 로그인 실패
        console.error('회원가입 실패:', response.error) // 콘솔에 에러 출력
        setErrorMessage('이미 있는 아이디 혹은 이메일 주소입니다.')
      }
    } catch (error) {
      console.error('기타 에러 발생:', error)
    }
  }

  const onTokenValid = async (validForm: TokenForm) => {
    console.log('test2')
    if (tokenLoading) return
    confirmToken(validForm)
    console.log('토큰 값:', tokenGetValues('token'))
  }

  useEffect(() => {
    if (tokenData?.ok) {
      router.push('/enter')
    }
  }, [tokenData, router])

  /*
  const onValid = (validForm: EnterForm) => {
    if (loading) return
    enter(validForm)
    //enter({
    //user_id: validForm.user_id,
    //password: validForm.password,
    //})

    // 토큰 확인
    onTokenValid({
      token: tokenGetValues('token'),
    })
  }

  const onTokenValid = (validForm: TokenForm) => {
    if (tokenLoading) return
    confirmToken(validForm)
    console.log('토큰 값:', validForm.token)
  }*/

  //console.log(loading, data, error)
  console.log(data)

  return (
    <div className="mt-16">
      <h3 className="text-3xl font-bold text-center">
        베짱이마켓에 오신것을 환영합니다!
      </h3>
      <div className="mt-8">
        <div className="flex flex-col items-center">
          <h5 className="text-sm text-gray-500 font-medium">Enter using:</h5>
          <div className="grid pb-4 border-b w-full mt-8 gap-16">
            <button
              className="pb-4 border-b-2 text-green-400 font-medium"
              onClick={onPersonalClick}
            >
              회원 가입
            </button>
          </div>
        </div>

        {data?.ok ? (
          <form onSubmit={handleSubmit(onValid)} className="flex flex-col mt-8">
            <label className="text-sm font-medium text-gray-700">
              베짱이 마켓에 정상적으로 가입되었습니다!
            </label>

            <button className="mt-5 bg-green-500 hover:bg-green-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:outline-none">
              로그인 페이지로 가기!
            </button>
          </form>
        ) : (
          <>
            {/*data?.ok ? (
          <form onSubmit={tokenHandleSubmit(onTokenValid)}>
            <h5>Loading...</h5>
          </form>
        ) : null*/}

            <form
              onSubmit={handleSubmit(onValid)}
              className="flex flex-col mt-8"
            >
              {/*<label className="text-sm font-medium text-gray-700">이름</label>
          <div className="mt-1">
            <input
              {...register('name')}
              type="name"
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>*/}

              <label className="text-sm font-medium text-gray-700">
                아이디
              </label>
              <div className="mt-1">
                <input
                  {...register('user_id', {
                    required: true,
                  })}
                  type="user_id"
                  className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <label className="text-sm font-medium text-gray-700">
                비밀번호
              </label>
              <div className="mt-1">
                <input
                  {...register('password', {
                    required: true,
                  })}
                  type="password"
                  className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <label className="text-sm font-medium text-gray-700">이름</label>
              <div className="mt-1">
                <input
                  {...register('name', {
                    required: true,
                  })}
                  type="name"
                  className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <label className="text-sm font-medium text-gray-700">
                이메일 주소
              </label>
              <div className="mt-1">
                <input
                  {...register('email', {
                    required: true,
                  })}
                  type="email"
                  className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              {/*<label className="text-sm font-medium text-gray-700">
            이메일 주소
          </label>
          <div className="mt-1">
            <input
              {...register('email', {
                required: true,
              })}
              type="email"
              className="type="email" className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
              required
            />
            </div>*/}
              <button className="mt-5 bg-green-500 hover:bg-green-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:outline-none">
                {submitting ? 'Loading...' : '로그인하기'}
              </button>
              {errorMessage && (
                <h4 className="mt-2 text-green-500">{errorMessage}</h4>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  )
}
