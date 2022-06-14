import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Routes>
        <Route  path='/home' element={  <Home></Home>}></Route>
        <Route exact path='/' element={  <Home></Home>}></Route>
        <Route   path='/login' element={ <Login></Login>}></Route>
        <Route   path='/register' element={<Register></Register>}></Route>
        <Route  path='/appointment' element={ <Appointment></Appointment>}></Route>

      </Routes>
      </Router>
      </AuthProvider>
    
    </div>
  );
}

export default App;
