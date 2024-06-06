
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/Sign';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Review from './Components/Review';
import Navbar from './Components/Navbar';
import Owner from './Components/Owner';

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path = '/sign' element={<SignUp/>}></Route>
      <Route path='/about' element={<Owner/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/menu'  element={<Menu/>}></Route>
      <Route path='/review/:food_item' element={<Review/>}></Route>
    </Routes>
    </>
  );
}

export default App;
