import styled from "styled-components";

const SignupContainer = styled.div`
    text-align: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
`
const SignupForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 420px;
    box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
    padding-top: 30px;
    padding-bottom: 20px;
    border-radius: 8px;
    background-color: white;
`
const SignupFormbox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Input = styled.input`
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 80%;
`
const WarningMessage = styled.div`
    font-size: 11px;

`

const ActiveBtn = styled.button `
    background-color:hsl(155, 71%, 53%);
    border: 1px solid  hsl(155, 71%, 53%);
    color: white;
    transition: transform 3ms ease-in;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    margin-top: 7px;
    width: 60%;
    transition: transform 3ms ease-in;
    text-transform: uppercase;
    align-self: center;
`

const UnactiveBtn  = styled.button `
    background-color: lightgrey;
    color: white;
    border: 1px solid  lightgrey;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    margin-top: 7px;
    width: 60%;
    transition: transform 3ms ease-in;
    text-transform: uppercase;
    align-self: center;
`

const TodoListFormContainer  = styled.div`
    margin: 50px auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    width: 30vw;
    height: 60vh;
    text-align: center;
    justify-content: flex-start;
    font-family: 'Montserrat', sans-serif;
`

const TodoListContainer  = styled.form`
    width: 100%;
`
const TodoListContainerInput  = styled.input`
    width: 40%;
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 70%;

`

const SmallBtn = styled.button`
    margin-left: 5px;
    width: 60px;
    height: 30px;
    letter-spacing: 1px;
    font-weight: bold;
    padding: 1px 5px;
    align-self: center;
    border: none;
    border-radius: 20px;
`

const TodoDiv = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    
    
`
const Checkbox = styled.input`
    margin: 0 5px;
    width: 20px;
`

const TodoText = styled.input`
    width: 100%;
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;

`

//   input.todo-text {
//     width: 100%;
//   }
//   input.todo-text- {
//     border: 5px solid hsl(155, 71%, 53%);
//     border-radius: 20px; 
//   }

  

export {
    SignupContainer,
    SignupForm,
    SignupFormbox,
    WarningMessage,
    ActiveBtn,
    UnactiveBtn,
    TodoListFormContainer,
    TodoListContainer,
    TodoListContainerInput,
    Input,
    SmallBtn,
    TodoDiv,
    Checkbox,
    TodoText

};


