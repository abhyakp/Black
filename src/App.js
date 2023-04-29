
import './App.css';
import Home from './components/Home';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/privacy' element={<Privacy />}/>
            <Route path='/terms' element={<Terms />}/>
          </Routes >
        </Router>
      </header>
    </div>
  );
}

export default App;
