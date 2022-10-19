import  {api}  from "../shared/api";
import  {url}  from "../shared/url";
import {Link, useNavigate, Router} from "react-router-dom"
import {useState, useCallback, useEffect} from 'react'
import '../App.css';

function SignIn (){
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [emailMessage, setEmailMessage] = useState('')
    const [isEmail, setIsEmail] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const [password, setPassword] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [isPassword, setIsPassword] = useState(false)

useEffect(()=> {
  if(localStorage.getItem(url.TOKEN_NAME)){
    navigate("/todo")
  }
})


const onSubmit = 
async (e) => {
  e.preventDefault()
  try {
    await api
      .post(`${url.SignIn}`, 
      {
        email: email,
        password: password,
      },
      {
        headers: {
            "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const accessToken = res.data.access_token;
        localStorage.setItem(url.TOKEN_NAME, accessToken);
        navigate("/todo");   
      })
  } catch (err) {
    setErrorMessage("로그인 실패!")
    console.error(err)
  }
};

//이메일
  const onChangeEmail= useCallback((e) => {
    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const emailCurrent = e.target.value
    setEmail(emailCurrent)

    if (!emailRegex.test(emailCurrent)) {
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
        로그인 페이지 입니다.
        <form onSubmit= {onSubmit}>
          {errorMessage}
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
            {/* // <button className="activebton" onClick={checkValue}>제출</button> : <button onClick={checkValue} className="unactivebtn">제출</button>} */}

        <button type='sumbit'>로그인</button>
        
        </form>
        </>
    )
}
export default SignIn;