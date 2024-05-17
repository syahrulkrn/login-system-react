import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrivateRoutes Component={Home} />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    // ini adalah perubahan
  );
}

export default App;
