import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import SignIn from './pages/SignIn'
import TodoList from './pages/TodoList'
import SignUp from './pages/SignUp';
import { Home, Auth } from './pages'
import HeaderContainer from './containers/Base/HeaderContainer'
import { Login, Register } from './containers/Auth'
function App() {
  return (
  <Routes>
    <Route element={<HeaderContainer/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/auth' element={<Auth/>}></Route>
    </Route>

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
