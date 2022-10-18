import {Link} from "react-router-dom"
import {useState, useCallback} from 'react'
import '../App.css';

function Login (){
    const [email, setEmail] = useState('')
    const [emailMessage, setEmailMessage] = useState('')
    const [isEmail, setIsEmail] = useState(false)

    const [password, setPassword] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [isPassword, setIsPassword] = useState(false)

    const onSubmit = useCallback(
        async (e) => {
          e.preventDefault()
          try {
            await axios
              .post(REGISTER_USERS_URL, {
                username: name,
                password: password,
                email: email,
              })
              .then((res) => {
                console.log('response:', res)
                if (res.status === 200) {
                  router.push('/sign_up/profile_start')
                }
              })
          } catch (err) {
            console.error(err)
          }
        },
        [email, name, password, router]
      )


//이메일
  const onChangeEmail= useCallback((e) => {
    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const emailCurrent = e.target.value
    setEmail(emailCurrent)

    if (!emailRegex.test(emailCurrent)) {
        console.log(emailCurrent)

        setEmailMessage('이메일 형식이 올바르지 않습니다!')
        setIsEmail(false)
    } else {
        setEmailMessage(',')
        setIsEmail(true)
    }

  }, [])


  //비밀번호
    const onChangePassword = useCallback((e) => {
        const passwordRegex = /(?=.{8,})/
        const passwordCurrent = e.target.value
        setPassword(passwordCurrent)

        if (!passwordRegex.test(passwordCurrent)) {
            setPasswordMessage('8자리 이상 입력해주세요!')
            setIsPassword(false);

        } else {
            setIsPassword(true);
            setPasswordMessage('')
        }

      }, [])


    return (
        <>
        <div className="formbox">
          이메일<input
            onChange={ (e) => {onChangeEmail(e); } }
            passwordText=" "
            title="이메일 확인"
            placeholder="이메일"
            typeTitle="emailConfirm"
          />
          {email.length >0 && (
            <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>
          )}
        </div>
        <div className="formbox">
          비밀번호<input
            onChange={(e)=> {onChangePassword(e);}}
            passwordText=" "
            title="비밀번호 확인"
            placeholder="비밀번호"
            typeTitle="passwordConfirm"
          />
          {password.length <=8 && (
            <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>
          )}
        </div>
        {isEmail && password.length>=8? 
            <button className="activebton">제출</button> : <button className="unactivebtn">제출</button>}

        <Link to="/createaccount"><button>회원 가입</button></Link>
        

        </>
    )
}
export default Login;