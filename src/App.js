import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Hero}/>  
          <Route exact path='/about' component={About} /> 
          <Route exact path='/projects' component={Projects} /> 
          <Route exact path='/contact' component={Contact} /> 
        </Switch> 
      </div>
    </Router>
  );
}

export default App;

