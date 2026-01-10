import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {
  return (
    <>
    <Navbar search ="search here"/>
    <Textarea click ="click here to sort" preview ="Text Preview"/>
    </>
  );
}

export default App;
