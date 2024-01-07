
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import CreateAds from './components/CreateAds/CreateAds';
import TextMedia from './components/CreateText&Media/TextMedia';
import Miniform from './components/TextMedia/Miniform';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/createads' element={<CreateAds />}/>
        <Route path='/textmedia' element={<TextMedia />}/>
        <Route path='/miniform' element={<Miniform />}/>
        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
