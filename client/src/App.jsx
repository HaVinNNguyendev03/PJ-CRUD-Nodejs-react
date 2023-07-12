import React from 'react';
import './styles/App.css';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Feed from './Pages/Feed'
import  Home  from './Pages/Home';
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Register from './Pages/Register'
import Notifications from './Pages/Notifications';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home/>}></Route>
          <Route path='/Feed' element={<Feed/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Profile' element={<Profile/>}></Route>
          <Route path='/Register' element={<Register/>}></Route>
          <Route path='/Notifications' element={<Notifications/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
