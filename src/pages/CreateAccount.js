
function CreateAccount (){

//       // 비밀번호 확인
//   const onChangePasswordConfirm = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       const passwordConfirmCurrent = e.target.value
//       setPasswordConfirm(passwordConfirmCurrent)

//       if (password === passwordConfirmCurrent) {
//         setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요 : )')
//         setIsPasswordConfirm(true)
//       } else {
//         setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ')
//         setIsPasswordConfirm(false)
//       }
//     },
//     [password]
//   )


    return (
        <>
        회원가입 페이지 입니다
        <div> 이메일  <input placeholder="이메일"></input></div>
        <div> 비밀번호  <input placeholder="비밀번호"></input></div>
        <div> <button>제출 버튼 </button></div>

        </>
    )
}
export default CreateAccount;