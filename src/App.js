
import './App.css';
import {Link, Route, Routes} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Firstp from './components/Firstp';
import NextP from './NextP'
import SecondP from './components/SecondP';
import ThirdP from './ThirdP';
function App() {
  return (
    <div className="App">
  
    <Router>
   
    <nav class="nav" >
    {/* <div class="nav-link"><Link to='/'>1st</Link></div> */}
    {/* <div class="nav-link"><Link to='/secondP'>2nd</Link></div> */}
    {/* <div class="nav-link"><Link to='/third'>3rd</Link></div> */}
    {/* <div class="nav-link"><Link to='/nextp'>next</Link></div> */}
    </nav>
    
      <Routes>
        <Route path="/nextp" element={<NextP />} />
        <Route path='/' element={<Firstp />}/>
        <Route path='/secondP' element={<SecondP/>}/>
        <Route path='/third' element={<ThirdP />}/>
      </Routes>
    </Router>
   
    </div>
  );
}

export default App;
