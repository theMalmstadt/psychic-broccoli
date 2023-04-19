import './App.css';
import Navbar from './components/Navbar/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import SiteRoutes from './components/routing';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <SiteRoutes />
      </div>
    </Router>
  );
}

// <form action="../../post" method="post" className="form">
// <button type="submit">Connected?</button>
// </form>

export default App;
