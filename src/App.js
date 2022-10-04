import logo from './logo.svg';
import './App.css';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import Login from './components/account/Login';
import Home from './components/home/Home';
import Header from './components/header/Header';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <div style={{ marginTop: 64 }}>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
