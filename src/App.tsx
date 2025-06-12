
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import {Home} from './pages/home'
import {Login} from './pages/login'
import {Register} from './pages/register'
import {Dashboard} from './pages/dashboard'
import {CarDetail} from './pages/Car/Car'
import { NewCar } from './pages/dashboard/new'

import {Layout} from './components/Layout/Layout'
import {Private} from './routes/Privates'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/dashboard" element={<Private><Dashboard /></Private>} />
          <Route path="/dashboard/new" element={<Private><NewCar /></Private>} />
        </Route>
          
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;