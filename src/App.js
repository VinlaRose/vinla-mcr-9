
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home/Home';
import { LeftNav } from './components/LeftNavBar/LeftNav';
import { IndieCategory } from './Pages/IndieCategoryPage/IndieCategoryPage';

function App() {
  return (
    <div className="App">
      <div className='leftNav'>
        <LeftNav/>
      </div>
      <div className='main'>

       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:category" element={<IndieCategory/>} /> 
       </Routes>
      </div>

    </div>


  );
}

export default App;
