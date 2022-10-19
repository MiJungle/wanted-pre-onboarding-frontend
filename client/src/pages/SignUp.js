import  {api}  from "../shared/api";
import  {url}  from "../shared/url";
import {Link, useNavigate} from "react-router-dom"
import {useState,useCallback, useEffect} from 'react';

function SignUp (){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [emailMessage, setEmailMessage] = useState('')
    const [isEmail, setIsEmail] = useState(false)

    const [passwordMessage, setPasswordMessage] = useState('')
    const [isPassword, setIsPassword] = useState(false)

    const onSubmit = 
        async (e) => {
          e.preventDefault()
          try {
            await api
              .post(`${url.SignUp}`, 
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
                console.log('response:', res)
                    navigate("/");
              })
          } catch (err) {
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
            회원가입 페이지 입니다.

        <form onSubmit= {onSubmit}>

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
            <button type='sumbit' className="activebton" >회원가입</button>: <button  type='sumbit' className="unactivebtn">회원가입</button>}
        </form>
            </>
        )// )onClick= {()=>{navigate("/") }}
    
}
export default SignUp;