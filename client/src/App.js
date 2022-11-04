import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import { Home, Auth, Question, Result } from './pages'
import HeaderContainer from './containers/Base/HeaderContainer'
import { Login, Register } from './containers/Auth'
function App() {
  return (
  <Routes>
    {/* <Route element={<HeaderContainer/>}> */}
      <Route path='/' element={<Home/>}></Route>
      <Route path='/auth' element={<Auth/>}></Route>
    {/* </Route> */}
      <Route path='/question' element = {< Question/>}/>
      <Route path="result" element={<Result/>}/> 

      <Route path="/auth/login" element={<Login/>}/>
      <Route path="/auth/register" element={<Register/>}/> 

        {/* <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/todo" element={<TodoList/>}></Route>
        <Route path="/" element={<SignIn/>}></Route> 
        <Route path="/" element={<Home/>}></Route>
        <Route path="/auth" element={<Auth/>}></Route> */}

  </Routes>
 );
}

export default App;
