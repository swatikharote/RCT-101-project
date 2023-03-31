import logo from './logo.svg';
import './App.css';
import { Navbar } from './Pages/Navbar';
import { Login } from './Pages/Login ';
import HomePage from './Pages/HomePage';
import { AllRoutes } from './Pages/AllRoutes';
import { useEffect } from 'react';
import Footer from './Pages/Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
