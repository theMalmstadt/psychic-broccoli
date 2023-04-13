import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import UploadAndDisplayImage from './components/uploadphoto';

function App() {
  return (
    <div>
      <Navbar />
      <UploadAndDisplayImage />
    </div>
  );
}

export default App;
