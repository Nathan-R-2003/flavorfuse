import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import Missing from './pages/Missing'
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path = "/" element = {<Home/>} />
        <Route path = "/welcome" element = {<Welcome/>} />        
        <Route path = "*" element = {<Missing/>} />
      </Routes>
      
    </div>
  );
}

export default App;
