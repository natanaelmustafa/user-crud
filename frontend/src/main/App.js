import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Footer from '../components/template/Footer';
import Nav from '../components/template/Nav';
import Logo from '../components/template/Logo';
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Logo></Logo>
        <Nav></Nav>
        <Routes></Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
