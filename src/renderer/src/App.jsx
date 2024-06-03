import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';


export default function App() {
  return (
    <BrowserRouter>

    <div>

      <Routes>
          <Route  path="/" element={<Login />}></Route>
          <Route  path="/login" element={<Login />}></Route>
          <Route  path="/register" element={<Register />}></Route>
          <Route  path="/Dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}