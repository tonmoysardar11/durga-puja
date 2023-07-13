import './App.css';
import bg from './media/bg.webp'
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <img src={bg} alt="" className='fixed top-0 left-0 right-0 opacity-70 z-[-10]'/>
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>


    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
