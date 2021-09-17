import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/PortfolioWithReact/" component={Jumbotron}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
