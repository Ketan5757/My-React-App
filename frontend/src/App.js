import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Odd from './components/Odd';
import Textarea from './components/Textarea';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element ={<Navbar search ="search here"/>}></Route>
      <Route path='/Odd' element={<Odd title = "Enter Your Information"/>}></Route>
      <Route path='/textarea' element={<Textarea click ="click here to sort" preview ="Text Preview"/>}></Route>
      <Route path='/main' element={<Main heading = "List of Fruits" title ="Fill out the form" submit= "Submit form" reverse="Reverse the text" length="Typed Text"/>}></Route>
    </Routes>
     </BrowserRouter>
    
    </>
  );
}

export default App;
