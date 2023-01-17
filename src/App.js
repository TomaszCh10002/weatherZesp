import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./pages/Signup"
import Login from './pages/Login';
import Weather from './pages/Weather';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="Signup" element={<Signup/>}/>
          <Route path="Weather" element={<Weather/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
