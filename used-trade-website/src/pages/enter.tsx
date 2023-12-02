import { useState } from 'react'
import { useForm } from 'react-hook-form'
import useMutation from '@libs/client/useMutation'
//import Input from '@components/input'

interface EnterForm {
  name?: string
  user_id?: string
  user_password?: string
  email?: string
  password?: string
}

export default function Enter() {
  const [enter, { loading, data, error }] = useMutation('/api/users/enter')
  const [submitting, setSubmitting] = useState(false)
  const { register, watch, handleSubmit, reset } = useForm<EnterForm>()
  const [method, setMethod] = useState<'Personal'>('Personal')
  const onPersonalClick = () => setMethod('Personal')
  const onValid = (validForm: EnterForm) => {
    if (loading) return
    enter(validForm)
    /*setSubmitting(true)
    fetch('/api/users/enter', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      setSubmitting(false)
    })*/
  }
  console.log(loading, data, error)

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
              className="pb-4 border-b-2 text-orange-400 font-medium"
              onClick={onPersonalClick}
            >
              회원 정보 입력
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit(onValid)} className="flex flex-col mt-8">
          {/*<label className="text-sm font-medium text-gray-700">이름</label>
          <div className="mt-1">
            <input
              {...register('name')}
              type="name"
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>*/}

          <label className="text-sm font-medium text-gray-700">아이디</label>
          <div className="mt-1">
            <input
              {...register('user_id', {
                required: true,
              })}
              type="user_id"
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          <label className="text-sm font-medium text-gray-700">비밀번호</label>
          <div className="mt-1">
            <input
              {...register('password', {
                required: true,
              })}
              type="password"
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
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
              className="type="email" className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
            </div>*/}
          <button className="mt-5 bg-green-500 hover:bg-green-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:outline-none">
            {submitting ? 'Loading...' : '로그인하기'}
          </button>
        </form>
      </div>
    </div>
  )
}
