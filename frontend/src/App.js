import './App.css';
import Navbar from './components/Navbar/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import UploadListing from './components/uploadphoto';

function App() {

  return (
    <div>
      <Navbar />
      <UploadListing />
    </div>
  );
}

// <form action="../../post" method="post" className="form">
// <button type="submit">Connected?</button>
// </form>

export default App;
