import logo from './logo.svg';
import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import Login from './pages/Login'
import Todo from './pages/Todo'
import CreateAccount from './pages/CreateAccount';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/todo" element={<Todo/>}></Route>
      <Route path="/createaccount" element={<CreateAccount/>}></Route>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
