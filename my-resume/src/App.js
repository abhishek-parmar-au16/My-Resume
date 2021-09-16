import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
      </>
    </Router>
    
  );
}

export default App;
