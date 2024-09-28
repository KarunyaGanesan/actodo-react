
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
 import Login from "./pages/login";
 import SignUp from "./pages/signup";
 import Landing from "./pages/landing";
 import { useState } from "react";


const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [user, setuser] = useState([
    {
      username: "Karunya",
      password: '3578'
    }
  ])

  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Login user ={user} setuser ={setuser} />}></Route>
          <Route path='/signup' element={<SignUp user ={user} setuser ={setuser} />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
        </Routes>

      </BrowserRouter>



    </div>)

}

export default App


