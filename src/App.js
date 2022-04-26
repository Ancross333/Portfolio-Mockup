import {Routes, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import style from './mystyle.module.css';
import Home from './Home';
import About from './About';
import PastWork from './PastWork';
import './Home.css';

function App() {
  return (

    <Router>
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path = "/About" element = {<About/>} />
      <Route exact path = "/PastWork" element = {<PastWork/>}/>
      </Routes>
        
          <div >
          <Link to="/" className={style.links}>
           Home
          </Link>
          

          
          <Link to = "/About" className={style.links}>
            About
          </Link>

          <Link to = "/PastWork" className={style.links}>
            Past Work
          </Link>
          </div>
          
        
      
    </div>
    </Router>
  );
}

export default App;
