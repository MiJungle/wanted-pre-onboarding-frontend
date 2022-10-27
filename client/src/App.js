import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import SignIn from './pages/SignIn'
import TodoList from './pages/TodoList'
import SignUp from './pages/SignUp';
import { Home, Auth } from './pages/'

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home/>}></Route>

    <Route path='/auth' element={<Auth/>}></Route>
      {/* <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/todo" element={<TodoList/>}></Route>
      <Route path="/" element={<SignIn/>}></Route> 
       <Route path="/" element={<Home/>}></Route>
       <Route path="/auth" element={<Auth/>}></Route> */}
  </Routes>
 );
}

export default App;
