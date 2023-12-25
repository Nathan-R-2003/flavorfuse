import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Missing from './pages/Missing'
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path = "/" element = {<Home/>} />    
        <Route path = "/login" element = {<Login/>}/>  
        <Route path = "/signup" element = {<Signup/>}/>    
        <Route path = "*" element = {<Missing/>} />
      </Routes>
      
    </div>
  );
}

export default App;
