import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Todo from './pages/Todo'
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/todo" element={<Todo/>}></Route>
      <Route path="/" element={<SignIn/>}></Route>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
