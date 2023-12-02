import { useForm } from 'react-hook-form'

export default function Form() {
  //useform hook 사용해서 form 만들기
  const { register } = useForm() //register: input과 state 연결함
  //console.log(watch())
  return (
    <form>
      <input
        {...register('username')}
        type="text"
        placeholder="이름"
        required
      />
      <input
        {...register('user_id')}
        type="text"
        placeholder="user_id"
        required
        minLength={4}
      />
      <input
        {...register('password')}
        type="password"
        placeholder="password"
        required
        minLength={4}
      />
      <input {...register('email')} type="email" placeholder="email" />
      <input type="submit" value="회원가입" />
    </form>
  )
}

/*const [username, setUsername] = useState('')
  const [user_id, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [formErrors, setFormErrors] = useState<string | undefined>(undefined)
  const [emailErrors, setEmailError] = useState<string | undefined>(undefined)

  const onUsernameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event
    setUsername(value)
  }
  const onUserIdChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event
    setUserId(value)
  }
  const onUserPasswordChange = (
    event: React.SyntheticEvent<HTMLInputElement>,
  ) => {
    const {
      currentTarget: { value },
    } = event
    setPassword(value)
  }
  const onEmailChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event
    setEmailError('')
    setEmail(value)
  }

  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (username === '' || user_id === '' || password === '') {
      setFormErrors('이름, 아이디, 패스워드 모두를 입력해주세요.')
    }
    if (!email.includes('@')) {
      setEmailError('이메일 형식이 아닙니다.')
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        value={username}
        onChange={onUsernameChange}
        type="text"
        placeholder="이름"
        required
      />
      <input
        value={user_id}
        onChange={onUserIdChange}
        type="text"
        placeholder="user_id"
        required
        minLength={4}
      />
      <input
        value={password}
        onChange={onUserPasswordChange}
        type="password"
        placeholder="password"
        required
        minLength={4}
      />
      <input
        value={email}
        onChange={onEmailChange}
        type="email"
        placeholder="email"
      />
      <input type="submit" value="회원가입" />
    </form>
  )
}
*/
