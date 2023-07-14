import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home';
import PandalList from './components/pages/PandalList';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/pandals' element={<PandalList/>}/>


    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
