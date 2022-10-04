import logo from './logo.svg';
import './App.css';
import DataProvider from './context/DataProvider';
import { BrowserRouter } from 'react-router-dom';

// components
import Login from './components/account/Login';
import Home from './components/home/Home';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div style={{ marginTop: 64 }}>
          <Login />
          <Home />
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
