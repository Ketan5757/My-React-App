import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {
  return (
    <>
    <Navbar search ="search here"/>
    <Textarea click ="click here to sort" preview ="Text Preview"/>
    <Main heading = "List of Fruits" title ="Fill out the form" submit= "Submit form" reverse="Reverse the text" length="Typed Text"/>
    
    </>
  );
}

export default App;
