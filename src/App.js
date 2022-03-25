import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.js';
import ContactMainScreen from './components/contactScreen/ContactMainScreen.js';
import CoursesScreen from './components/coursesScreen/CoursesScreen.js';
import CareerContactMainScreen from './components/careersContactForm/CareerContactMainScreen.js';



function App() {
  return (
    <div className="mainDivOuter">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/contact' element={<ContactMainScreen/>} />
          <Route path='/courses' element={<CoursesScreen/>} />
          <Route path='/careers' element={<CareerContactMainScreen/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
