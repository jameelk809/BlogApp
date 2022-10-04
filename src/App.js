import logo from './logo.svg';
import './App.css';
import DataProvider from './context/DataProvider';

// components
import Login from './components/account/Login';
import Home from './components/home/Home';

function App() {
  return (
    <DataProvider>
      <div style={{ marginTop: 64 }}>
        <Login />
        <Home />
      </div>
    </DataProvider>
  );
}

export default App;
