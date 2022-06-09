import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appointment from './Pages/Appointment/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route  path='/home' element={  <Home></Home>}></Route>
        <Route  path='/' element={  <Home></Home>}></Route>
        <Route  path='/appointment' element={ <Appointment></Appointment>}></Route>

      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
