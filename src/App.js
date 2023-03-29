import logo from './logo.svg';
import './App.css';
import { Navbar } from './Pages/Navbar';
import { Login } from './Pages/Login ';
import HomePage from './Pages/HomePage';
import { AllRoutes } from './Pages/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
